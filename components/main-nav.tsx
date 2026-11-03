"use client";
import logo from "@/assets/image/logo.svg";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Mail, Phone, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav";
import { searchProducts } from "@/lib/search";


const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

const MAX_SUGGESTIONS = 5;

// Navbar search: live suggestions while typing, arrow keys to move, Enter to open
// the highlighted product or the full results list.
function SearchBox({
  onDone,
  className,
  variant = "light",
}: {
  onDone?: () => void;
  className?: string;
  variant?: "light" | "dark";
}) {
  const router = useRouter();
  const listId = React.useId();
  const [term, setTerm] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const wrapRef = React.useRef<HTMLFormElement>(null);

  const q = term.trim();
  const results = React.useMemo(() => (q ? searchProducts(q) : []), [q]);
  const suggestions = results.slice(0, MAX_SUGGESTIONS);
  const showPanel = open && q.length > 0;

  React.useEffect(() => setActive(-1), [q]);

  // close when clicking anywhere outside
  React.useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  const finish = () => {
    setOpen(false);
    setTerm("");
    onDone?.();
  };
  const goToResults = () => {
    router.push(q ? `/products/all?search=${encodeURIComponent(q)}#results` : "/products/all");
    finish();
  };
  const goToProduct = (id: number) => {
    router.push(`/products/${id}`);
    finish();
  };

  const dark = variant === "dark";

  return (
    <form
      ref={wrapRef}
      role="search"
      className={cn("relative", className)}
      onSubmit={(e) => {
        e.preventDefault();
        if (active >= 0 && suggestions[active]) goToProduct(suggestions[active].id);
        else goToResults();
      }}
    >
      <Search size={17} className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActive((i) => Math.min(i + 1, suggestions.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, -1));
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        placeholder="Search products here.."
        aria-label="Search products"
        role="combobox"
        aria-expanded={showPanel}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
        autoComplete="off"
        className="h-11 w-full rounded-full border border-slate-200 bg-white/70 pl-11 pr-4 text-sm text-brand-text outline-none transition-all placeholder:text-slate-400 focus:border-brand-sky focus:bg-white focus:ring-4 focus:ring-brand-sky/15"
      />

      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className={cn(
              "absolute right-0 top-[calc(100%+10px)] z-50 w-full origin-top overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_24px_60px_-20px_rgba(0,31,78,0.45)]",
              !dark && "min-w-[340px]"
            )}
          >
            {suggestions.length > 0 ? (
              <>
                <p className="px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Products
                </p>
                <ul id={listId} role="listbox" className="px-2 pb-2">
                  {suggestions.map((p, i) => (
                    <li key={p.id} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
                      <button
                        type="button"
                        // mousemove, not mouseenter: a resting cursor under the opening panel must not hijack Enter
                        onMouseMove={() => setActive(i)}
                        onClick={() => goToProduct(p.id)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors",
                          i === active ? "bg-brand-mist" : "hover:bg-brand-mist"
                        )}
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg bg-brand-mist">
                          <Image src={p.image} alt="" width={44} height={44} className="h-9 w-9 object-contain" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-brand-navy">{p.product_name}</span>
                          <span className="block text-xs text-slate-500">{p.brand_name}</span>
                        </span>
                        <ArrowUpRight size={15} className={cn("shrink-0 text-slate-300", i === active && "text-brand-blue")} />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="submit"
                  className="flex w-full items-center justify-between border-t border-slate-100 px-4 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-mist"
                >
                  See all {results.length} {results.length === 1 ? "result" : "results"}
                  <span className="text-xs font-normal text-slate-400">Enter ↵</span>
                </button>
              </>
            ) : (
              <div className="px-4 py-6 text-center">
                <p className="text-sm font-medium text-brand-navy">No products found for “{q}”</p>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/products/all");
                    finish();
                  }}
                  className="mt-2 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Browse all products
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // Hide while scrolling down, reveal as soon as the visitor scrolls up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > prev && latest > 240 && !open);
  });

  React.useEffect(() => setOpen(false), [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-[1320px] items-center justify-between gap-4 rounded-full border px-3 py-2 pl-5 transition-all duration-500 sm:pl-6",
            scrolled || open
              ? "border-white/60 bg-white/90 shadow-[0_10px_40px_-15px_rgba(0,31,78,0.35)] backdrop-blur-xl"
              : "border-white/50 bg-white/[0.92] shadow-[0_6px_30px_-18px_rgba(0,31,78,0.4)] backdrop-blur-md"
          )}
        >
          <Link href="/" aria-label="Anfords Bangladesh home" className="shrink-0">
            <Image src={logo} alt="Anfords" height={40} width={120} priority className="h-9 w-auto sm:h-10" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative z-10 block rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                      active ? "text-white" : "text-brand-text hover:text-brand-blue"
                    )}
                  >
                    {link.name}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-blue shadow-md shadow-brand-blue/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <SearchBox className="hidden w-56 xl:block xl:w-64" />
            <Link
              href="/contact-us"
              className="hidden items-center gap-1.5 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-green/30 transition-all hover:-translate-y-0.5 hover:bg-brand-leaf md:inline-flex lg:hidden xl:hidden"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative grid h-11 w-11 place-items-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/30 transition-transform active:scale-95 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded bg-white transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-[5px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded bg-white transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-[5px]"
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-brand-navy px-6 pb-8 pt-28 text-white lg:hidden"
          >
            <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-brand-blue/60 blur-[100px]" />
            <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-brand-green/30 blur-[100px]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              className="relative"
            >
              <SearchBox variant="dark" onDone={() => setOpen(false)} />
            </motion.div>

            <ul className="relative mt-8 space-y-1">
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1], duration: 0.6 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-medium text-brand-mint">0{i + 1}</span>
                        <span
                          className={cn(
                            "text-3xl font-semibold tracking-tight transition-colors sm:text-4xl",
                            active ? "text-brand-sky" : "text-white group-hover:text-brand-sky"
                          )}
                        >
                          {link.name}
                        </span>
                      </span>
                      <ArrowUpRight className="text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand-mint" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.75 } }}
              className="relative mt-auto space-y-3 pt-10 text-sm text-white/70"
            >
              <a href="tel:+88029353698" className="flex items-center gap-3 hover:text-white">
                <Phone size={16} className="text-brand-mint" /> +880-2-9353698
              </a>
              <a href="mailto:info@anfordslimited.com" className="flex items-center gap-3 hover:text-white">
                <Mail size={16} className="text-brand-mint" /> info@anfordslimited.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

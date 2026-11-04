"use client";

import ProductCard from "@/components/dashboard/card/ProductCard";
import { visibleBrands } from "@/lib/brands";
import { Brand, ProductCardProps } from "@/types/data";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
// import allProductBanner from "@/assets/image/sliders/allProductGroup2.png";
import productRangeBanner from "@/assets/image/sliders/productRangeBanner.jpg";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { cn } from "@/lib/utils";
import { searchProducts } from "@/lib/search";

const banners = [
  {
    src: productRangeBanner,
    alt: "Mediplus, Brush Up, English and Sleek products",
  },
  // hidden for now (shows Envy and Every Day); uncomment to bring it back
  // { src: allProductBanner, alt: "Anfords product range" },
];

// Cross-fading banner carousel; pauses while hovered
const BannerCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || banners.length < 2) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % banners.length),
      5000,
    );
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative aspect-[16/6] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 sm:rounded-3xl"
    >
      {banners.map((b, i) => (
        <Image
          key={i}
          src={b.src}
          alt={b.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          aria-hidden={i !== active}
          className={cn(
            "object-cover transition-opacity duration-1000",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      {banners.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-5">
          {banners.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show banner ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i === active
                  ? "w-7 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AllProductsContent = () => {
  const searchParams = useSearchParams();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("search") ?? "",
  );

  // keep in sync when the navbar search is used while already on this page,
  // and bring the results into view instead of leaving the visitor on the hero
  useEffect(() => {
    const q = searchParams.get("search") ?? "";
    setSearchTerm(q);
    if (q) {
      setSelectedBrand(null);
      requestAnimationFrame(() =>
        document
          .getElementById("results")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }, [searchParams]);

  const onSelectBrand = (selectedBrandId: string) => {
    setSelectedBrand(selectedBrandId === "all" ? null : selectedBrandId);
  };

  const filteredProducts = searchProducts(searchTerm).filter(
    (product: ProductCardProps) =>
      selectedBrand ? product.brand_id.toString() === selectedBrand : true,
  );

  const filters = [
    { id: "all", name: "All" },
    ...visibleBrands.map((b) => ({
      id: `${b.id}`,
      name: b.brandName,
      logo: b.image.color,
    })),
  ];

  return (
    <div>
      <PageHero
        crumb="Products"
        eyebrow="Our Products"
        title="Explore Our Products By Brands"
        subtitle="Discover Top Brands & Their Products"
        description="Find all your favorite brands in one place! Browse through our wide selection of top-quality products from leading brands. Click on any brand to explore its full range of offerings and discover the perfect products for you."
      />

      <div className="relative -mt-10 sm:-mt-14">
        <div className="container">
          <BannerCarousel />
        </div>
      </div>

      <section id="results" className="container scroll-mt-24 py-12 sm:py-16">
        {/* Filters: sticky under the navbar so they stay reachable while browsing */}
        <div className="sticky top-[84px] z-30 -mx-5 mb-8 bg-white/85 px-5 py-3 backdrop-blur-xl sm:mx-0 sm:rounded-full sm:border sm:border-slate-200 sm:px-3 sm:shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative md:w-72 md:shrink-0">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products here.."
                aria-label="Search products"
                className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-10 text-sm outline-none transition-all focus:border-brand-sky focus:ring-4 focus:ring-brand-sky/15"
              />
              {searchTerm && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Brand Selection */}
            <div
              role="tablist"
              aria-label="Filter by brand"
              className="no-scrollbar -mx-5 flex gap-1.5 overflow-x-auto px-5 md:mx-0 md:px-0"
            >
              {filters.map((item) => {
                const isSelected = (selectedBrand ?? "all") === item.id;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => onSelectBrand(item.id)}
                    className={cn(
                      "relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                      isSelected
                        ? "text-white"
                        : "text-slate-600 hover:bg-brand-mist hover:text-brand-blue",
                    )}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="brand-filter"
                        className="absolute inset-0 rounded-full bg-brand-blue shadow-md shadow-brand-blue/30"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 34,
                        }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mb-5 text-sm text-slate-500" aria-live="polite">
          Showing{" "}
          <span className="font-semibold text-brand-navy">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item: ProductCardProps) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProducts.length === 0 && (
          <div className="flex h-[30vh] flex-col items-center justify-center gap-3 text-center">
            <Search className="text-slate-300" size={40} />
            <p className="font-semibold text-brand-navy">No Items to show</p>
          </div>
        )}
      </section>
    </div>
  );
};

const AllProducts = () => (
  <Suspense>
    <AllProductsContent />
  </Suspense>
);

export default AllProducts;

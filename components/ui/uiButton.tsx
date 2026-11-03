import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import leafIcoWhite from "@/assets/image/landing-page/leafIcon.svg";
import leafIconBluish from "@/assets/icons/landing-page/leafBlueColor.svg";

interface UiButtonProps {
  children: string;
  varient?: "dark" | "light" | "outline";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

// Pill call-to-action with the brand leaf mark and an arrow that slides on hover
const UiButton: React.FC<UiButtonProps> = ({
  children,
  varient = "dark",
  onClick,
  type = "button",
  href,
  className,
  disabled,
}) => {
  const classes = cn(
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full py-2 pl-2 pr-6 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 sm:text-[15px]",
    varient === "dark" &&
      "bg-brand-royal text-white shadow-[0_12px_30px_-10px_rgba(18,99,173,0.7)] hover:bg-brand-deep hover:shadow-[0_18px_40px_-12px_rgba(18,99,173,0.8)]",
    varient === "light" &&
      "bg-white text-brand-royal shadow-[0_12px_30px_-12px_rgba(0,0,0,0.4)] hover:bg-brand-mist",
    varient === "outline" &&
      "bg-transparent text-brand-royal ring-1 ring-inset ring-brand-royal/30 hover:bg-brand-royal/5",
    className
  );

  const content = (
    <>
      {/* sheen */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[-12deg]",
          varient === "dark" ? "bg-white/15" : "bg-brand-royal/10"
        )}
      >
        <Image
          src={varient === "dark" ? leafIcoWhite : leafIconBluish}
          alt=""
          height={20}
          width={20}
        />
      </span>
      <span>{children}</span>
      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
};

export default UiButton;

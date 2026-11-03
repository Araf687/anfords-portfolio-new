import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import React from "react";

// Small pill label shown above section headings
const Eyebrow = ({
  children,
  variant = "light",
  className,
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "solid";
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
      variant === "light" && "bg-brand-green/10 text-brand-green ring-1 ring-brand-green/20",
      variant === "dark" && "bg-white/10 text-brand-mint ring-1 ring-white/15 backdrop-blur",
      variant === "solid" && "bg-brand-leaf text-white shadow-lg shadow-brand-leaf/30",
      className
    )}
  >
    <Leaf size={14} strokeWidth={2.5} />
    {children}
  </span>
);

export default Eyebrow;

import { ProductCardProps } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProductCardComponentProps {
  data: ProductCardProps;
}

// Product tile: themed background art, product floats up on hover
const ProductCard: React.FC<ProductCardComponentProps> = ({ data }) => {
  const { id, product_name, image, productCardBg, brand_name } = data;

  return (
    <Link
      href={`/products/${id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_2px_20px_-12px_rgba(0,31,78,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(0,90,170,0.45)]"
    >
      <div className="relative aspect-[4/4.2] overflow-hidden">
        {productCardBg && (
          <Image
            src={productCardBg}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            // the background art ships with a thin blue frame; a slight zoom crops it out
            className="scale-[1.04] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <Image
            src={image}
            alt={product_name || "Product image"}
            width={250}
            height={250}
            className="max-h-full w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-110"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-royal backdrop-blur">
          {brand_name}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-between gap-3 p-5">
        <p className="font-semibold leading-snug text-brand-navy">{product_name}</p>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-brand-mist py-2 pl-3.5 pr-2.5 text-xs font-semibold text-brand-royal transition-all duration-300 group-hover:bg-brand-royal group-hover:text-white">
          View more
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;

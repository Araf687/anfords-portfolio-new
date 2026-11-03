import { getProductDetails } from "@/helpers/functions/main";
import { visibleBrands, visibleProducts } from "@/lib/brands";
import { ProductCardProps } from "@/types/data";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/dashboard/card/ProductCard";
import UiButton from "@/components/ui/uiButton";
import { Reveal } from "@/components/motion/Reveal";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const productData: ProductCardProps = getProductDetails(parseInt(id))[0];

  if (!productData) {
    return (
      <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-28 text-center">
        <p className="text-2xl font-semibold text-brand-navy">Product not found</p>
        <UiButton href="/products/all">All Products</UiButton>
      </div>
    );
  }
  const brand = visibleBrands.find((item) => item.id === productData.brand_id);
  const related = visibleProducts
    .filter((p: ProductCardProps) => p.brand_id === productData.brand_id && p.id !== productData.id)
    .slice(0, 4);

  return (
    <div className="bg-white pt-24 sm:pt-28">
      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products/all" className="hover:text-brand-blue">Products</Link>
          <ChevronRight size={14} />
          <span className="text-brand-navy">{productData.product_name}</span>
        </nav>
        <Reveal direction="none" duration={1}>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image src={productData.banner} alt={`${productData.product_name} banner`} priority className="h-auto w-full" sizes="100vw" />
          </div>
        </Reveal>
      </div>

      <section className="container grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="space-y-8">
          <SectionHeading as="h1" className="sm:text-5xl lg:text-5xl">
            {productData.product_name}
          </SectionHeading>
          <Reveal delay={0.15}>
            <div
              dangerouslySetInnerHTML={{
                __html: productData.longDescription,
              }}
              className="rich-text"
            ></div>
          </Reveal>
        </div>

        {brand && (
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="left">
              <div className="space-y-5 rounded-3xl border border-slate-200 bg-brand-mist p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Brand</p>
                <div className="flex h-24 items-center justify-center rounded-2xl bg-white">
                  <BrandLogo brand={brand} size={40} />
                </div>
                <p className="font-medium text-brand-navy">{brand.description}</p>
                <UiButton href={`/brands/${brand.id}`} className="w-full">
                  {brand.brandName}
                </UiButton>
              </div>
            </Reveal>
          </aside>
        )}
      </section>

      {related.length > 0 && brand && (
        <section className="bg-brand-mist py-14 sm:py-20">
          <div className="container space-y-8">
            <SectionHeading className="sm:text-4xl lg:text-5xl">{`${brand.brandName} Products`}</SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item: ProductCardProps) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleProduct;

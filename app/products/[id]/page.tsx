import ProductDemonstrationSection from "@/components/dashboard/products/ProductDemonstrationSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProductDetails } from "@/helpers/functions/main";
import { ProductCardProps } from "@/types/data";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const productData: ProductCardProps = getProductDetails(parseInt(id))[0];

  if (!productData) {
    return <p>Product not found</p>; // Handle case where product data is not available
  }

  return (
    productData && (
      <div>
        <div className="lg:bg-[#f8ffff]">
          <div className="max-w-6xl mx-auto py-10 ">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Section */}
              <div className="md:w-2/3 w-full text-center flex justify-center">
                <Image
                  src={productData?.image}
                  alt="product-image"
                  width={
                    productData.width
                      ? productData.width < 100
                        ? productData.width + 50
                        : productData.width + 200
                      : 100
                  }
                  height={productData.height ? productData.height : 200}
                  className="rounded-lg"
                />
              </div>

              {/* Product Details Section */}
              <div className="sm:p-10 xs:p-10 md:w-2/3 w-full text-black">
                <h1 className="text-2xl md:text-4xl text-blue-900 font-semibold mb-4">
                  {productData?.product_name}
                </h1>
                <p className="mb-2 font-semibold">
                  Brand: {productData?.brand_name}
                </p>
                <div
                  className="mb-2 text-justify lg:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: productData.shortDescription || "",
                  }}
                ></div>
                {/* <p className="mb-2 text-lg">Price: BDT 312</p> */}
              </div>
            </div>
          </div>
        </div>

        <section className="rounded my-10 lg:max-w-5xl lg:mx-auto">
          {/* <div> <ProductDemonstrationSection productData={productData}/></div> */}
          <div>
            {/* <p className="sm:text-lg lg:text-3xl mb-3 ">Description</p> */}
            <div
              dangerouslySetInnerHTML={{
                __html: productData.longDescription,
              }}
            ></div>
          </div>
        </section>
      </div>
    )
  );
};

export default SingleProduct;

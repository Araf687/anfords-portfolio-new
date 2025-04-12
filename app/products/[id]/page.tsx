import SectionHeading from "@/components/ui/SectionHeading";
import { getProductDetails } from "@/helpers/functions/main";
import { allBrands } from "@/lib/constants";
import { ProductCardProps } from "@/types/data";
import Image from "next/image";
import React from "react";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const productData: ProductCardProps = getProductDetails(parseInt(id))[0];

  if (!productData) {
    return <p>Product not found</p>; // Handle case where product data is not available
  }
  const brand = productData
    ? allBrands.filter((item) => item.id === productData.brand_id)[0]
    : null;
  const words = productData.product_name.split(" ");
  const lastWord = words.pop(); // Extracts the last word
  const restOfText = words.join(" "); // Joins the remaining words

  return (
    productData && (
      <div>
        {/* <div className="lg:bg-[#f8ffff]">
          <div className="max-w-6xl mx-auto lg:py-10 ">
            <div className="flex flex-col md:flex-row items-center">
  
              <div className="xs:p-10 md:w-2/3 w-full text-center flex justify-center">
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

          
              <div className="md:w-2/3 w-full p-5 text-black ">
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
           
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <Image src={productData?.banner} alt="product-banner" />
        </div>

        <section className="rounded mb-5 lg:my-10 lg:max-w-5xl lg:mx-auto p-5">
          {/* <div> <ProductDemonstrationSection productData={productData}/></div> */}
          <div>
            <h2 className={"text-xl md:text-2xl lg:text-5xl text-[#206CB1] "}>
              <span className={`text-[#206CB1]`}>{restOfText} </span>
              <span className={`text-[#00A85A]`}>{lastWord}</span>
            </h2>
            {/* {brand && <Image src={brand.image.color} alt="brand logo" />} */}
            {/* <p className="sm:text-lg lg:text-3xl mb-3 ">Description</p> */}
            <div
              dangerouslySetInnerHTML={{
                __html: productData.longDescription,
              }}
              className="mt-8"
            ></div>
          </div>
        </section>
      </div>
    )
  );
};

export default SingleProduct;

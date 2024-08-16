import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProductDetails } from "@/helpers/functions/main";
import { ProductCardProps } from "@/types/main";
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
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex items-center">
          {/* Image Section */}
          <div className="w-1/3">
            <Image
              src={productData.image}
              alt="product-image"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-2/3">
            <h1 className="text-3xl font-semibold mb-4">
              {productData?.product_name}
            </h1>
            <p className="font-semibold flex items-center mb-2">
              Rating:{" "}
              {[1, 2, 3, 4, 5].map((item: number) => (
                <Star
                  className={`w-4 h-4 ms-1 ${
                    item > parseInt(productData?.rating[0])
                      ? "text-gray-700"
                      : "text-yellow-700"
                  }`}
                  key={item}
                />
              ))}
            </p>
            <p className="mb-2">Category: Shampoo</p>
            <p className="text-gray-800 mb-2 text-justify ">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design.
            </p>
            <p className="mb-2">Price: BDT 312</p>
            {/* Additional product details can go here */}
          </div>
        </div>
        <section className="px-2 my-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>About this product?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Ingrediants?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Perfect for?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    )
  );
};

export default SingleProduct;

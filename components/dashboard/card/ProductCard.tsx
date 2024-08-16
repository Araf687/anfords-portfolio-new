import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardData } from "@/helpers/data/about-card-data";
import { ProductCardProps } from "@/types/main";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardComponentProps {
  data: ProductCardProps;
}

const ProductCard: React.FC<ProductCardComponentProps> = ({ data }) => {
  const { id,product_name, image, description, rating } = data;
  return (
    <>
      <Card className="w-full">
        <CardHeader className="text-center">
          <Image src={image} alt="product_image" width={"200"} height={"200"} />
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-center font-semibold">
              <Link href={`/products/${id}`} className="hover:text-blue-500">{product_name.split(" ")[0]}</Link>
            </p>
            <div className="flex gap-1 justify-center mt-4">
              {[1, 2, 3, 4, 5].map((item: number) => (
                <Star
                  className={`w-6 h-6 ${
                    item > parseInt(rating[0])
                      ? "text-gray-700"
                      : "text-yellow-700"
                  }`}
                  key={item}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;

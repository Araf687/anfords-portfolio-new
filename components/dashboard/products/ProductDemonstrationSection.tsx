import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product, ProductCardProps } from "@/types/data";
import React from "react";

interface SingleProductProps {
  productData: ProductCardProps;
}

const ProductDemonstrationSection: React.FC<SingleProductProps> = ({
  productData,
}) => {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Desciption</TabsTrigger>
          <TabsTrigger value="ingredient">Ingredient</TabsTrigger>
          {/* <TabsTrigger value="direction_of_use">Use</TabsTrigger> */}
          <TabsTrigger value="varients">Varients</TabsTrigger>
        </TabsList>
        <div className="h-[60vh] overflow-y-auto">
          {" "}
          <TabsContent value="description">
            <CardContent>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
                <CardDescription>
                  Shows the description of the product
                </CardDescription>
              </CardHeader>
              <CardContent className="text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html: productData.longDescription,
                  }}
                ></div>
              </CardContent>
              {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
            </CardContent>
          </TabsContent>
          <TabsContent value="ingredient">
            <CardContent>
              <CardHeader>
                <CardTitle>Ingredient</CardTitle>
                <CardDescription>
                  shows information of the ingredients that used in the product
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas iusto consectetur numquam soluta alias possimus aliquam
                unde optio, porro accusamus, aliquid, excepturi tempore ducimus
                pariatur neque est dicta ullam doloribus? Ipsam, expedita sunt.
                Quisquam aliquid minima, laborum cum ex iure neque a? Officia
                perferendis ea expedita, debitis est officiis quos eveniet
                quaerat laboriosam quasi placeat velit ipsa minus impedit modi.
                Suscipit nostrum maxime porro numquam aut fugit quasi culpa
                dolore quaerat laudantium aperiam rerum nisi nemo quae dolorum
                asperiores soluta nulla, possimus sint voluptas quod odio vitae
                nihil alias. Animi? Itaque quod quia accusamus libero incidunt
                id earum nihil, eveniet commodi fugit maxime dolore quaerat
                sequi possimus nesciunt corporis similique voluptatem expedita
                magni aspernatur numquam dolorem sit iste! Optio, dolores. Velit
                labore libero nisi quam provident veniam amet facilis ducimus
                recusandae modi. Tempore, eaque? Dolorum in tenetur dignissimos
                tempore quia, ab, voluptas numquam nisi ad distinctio cum quas
                neque saepe. Corrupti cum consectetur illum repellendus suscipit
                et aspernatur omnis cumque quia, consequuntur atque laudantium
                aliquid beatae magnam saepe? Sed dolorum nemo necessitatibus
                atque dicta ipsa veritatis nam animi labore ullam?
              </CardContent>
            </CardContent>
          </TabsContent>
          {/* <TabsContent value="direction_of_use">
            <CardContent>
              <CardHeader>
                <CardTitle>Direction Of Use</CardTitle>
                <CardDescription>
                  Describes how to use the product
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                esse dicta deleniti? Commodi in quidem, aliquid distinctio
                fugiat quo quod. Maiores perferendis obcaecati libero excepturi
                in dolores dolorem culpa eos? Accusamus nam ab tempore quisquam
                iste assumenda, vel veritatis reprehenderit sit aperiam possimus
                nulla aspernatur quis excepturi, ratione totam voluptatem?
                Sapiente accusantium quas tempore quia, labore officiis qui
                laboriosam maxime. Odit et unde explicabo laborum asperiores
                quam inventore architecto iste repellendus fugit neque
                praesentium, veritatis molestiae illum obcaecati delectus
                suscipit perferendis amet aliquam ratione? Cumque quos quia
                explicabo animi impedit? Voluptatibus ullam commodi culpa
                doloremque voluptatum ipsum, quas facere quos nemo dolorem, quia
                accusamus quae sit eius, doloribus labore quam error non
                deserunt saepe! Velit corrupti vero in placeat quae. Tempora
                odio quisquam consequuntur minus esse pariatur impedit maiores
                eum delectus corrupti rerum, excepturi optio cupiditate corporis
                voluptate dolores alias ipsum? Cumque provident porro iusto et
                ducimus minima fuga similique. Quibusdam repellat ab enim
                voluptas nesciunt expedita odio adipisci, ipsam, temporibus
                rerum iusto animi, aut facilis doloribus repellendus officiis
                similique eius id cumque quae asperiores iure. Soluta est totam
                optio. Nulla porro voluptate sint! Ut a est nobis porro quidem
                ducimus excepturi reiciendis iusto atque, velit dolores, dolore
                ullam soluta blanditiis dolorum, nostrum aliquid dolorem.
                Sapiente ratione nesciunt blanditiis omnis!
              </CardContent>
              <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
            </CardContent>
          </TabsContent> */}
          <TabsContent value="varients">
            <CardContent>
              <CardHeader>
                <CardTitle>Product Varients</CardTitle>
                <CardDescription>
                  Shows different varients of the product
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 flex justify-center items-center h-[40vh]">
               <p>No content</p>
              </CardContent>
           
            </CardContent>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductDemonstrationSection;

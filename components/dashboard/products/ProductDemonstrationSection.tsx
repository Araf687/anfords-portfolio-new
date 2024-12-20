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
import React from "react";

const ProductDemonstrationSection = () => {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">Desciption</TabsTrigger>
          <TabsTrigger value="ingredient">Ingredient</TabsTrigger>
          <TabsTrigger value="direction_of_use">Use</TabsTrigger>
          <TabsTrigger value="varients">Varients</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <CardContent>
            <CardHeader>
              <CardTitle>Product Description</CardTitle>
              <CardDescription>
                Shows the description of the product
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quae veritatis esse quis necessitatibus velit optio vitae deserunt
              dolores tenetur? Accusamus quaerat illum sit quos asperiores?
              Blanditiis aspernatur consectetur sunt! Quae consectetur possimus
              culpa, reiciendis esse voluptatem quibusdam repellendus. Rerum
              quam architecto consequuntur tempore nam totam, quae illum beatae
              nulla dolorem inventore deserunt non vero, delectus odit sint
              distinctio repellendus! Suscipit, necessitatibus. Magnam incidunt
              blanditiis iusto debitis rerum harum quo nobis quidem, voluptas
              consequatur nulla laborum non provident. Eveniet distinctio
              dolorum quasi dolores debitis quis placeat accusantium sequi ex
              sunt. Quaerat incidunt, rem obcaecati, iusto, ullam ducimus fugit
              commodi eum in consequuntur quia nostrum iure animi minima at.
              Corporis quam sint facere nemo natus qui blanditiis est vero? Qui,
              provident. Repudiandae ex dignissimos temporibus officia ut soluta
              voluptatum quis qui? Animi omnis qui quidem, necessitatibus fugiat
              pariatur reprehenderit veniam odio neque, suscipit distinctio
              voluptatibus facilis, ullam minima magnam sunt rerum. Sed error
              corporis magnam obcaecati, dignissimos odit, cupiditate quo
              voluptas totam porro dolorum? Aliquid ratione quis, velit vitae
              possimus repellat voluptates quasi, tenetur harum omnis, ut cum
              accusantium odio. Velit. Est delectus enim repudiandae corrupti
              accusamus laudantium! Iusto sapiente quos deleniti ex dolorem nemo
              expedita sed minus necessitatibus! Necessitatibus laboriosam culpa
              asperiores tempore porro sunt quo eligendi commodi vitae labore!
              Velit itaque tempora unde quo distinctio! Asperiores earum facilis
              recusandae unde illum dolorem odit explicabo quaerat consequuntur
              dolores. Quisquam, laborum iure obcaecati cum porro optio sint
              aliquid ut eos exercitationem! Dolores ad rem pariatur esse.
              Adipisci, iure. Accusantium explicabo ipsum corporis maxime et
              impedit, odio aut reprehenderit architecto animi necessitatibus
              excepturi obcaecati cupiditate voluptate accusamus ducimus quis
              qui aperiam beatae?
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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto consectetur numquam soluta alias possimus aliquam unde optio, porro accusamus, aliquid, excepturi tempore ducimus pariatur neque est dicta ullam doloribus?
             Ipsam, expedita sunt. Quisquam aliquid minima, laborum cum ex iure neque a? Officia perferendis ea expedita, debitis est officiis quos eveniet quaerat laboriosam quasi placeat velit ipsa minus impedit modi.
             Suscipit nostrum maxime porro numquam aut fugit quasi culpa dolore quaerat laudantium aperiam rerum nisi nemo quae dolorum asperiores soluta nulla, possimus sint voluptas quod odio vitae nihil alias. Animi?
             Itaque quod quia accusamus libero incidunt id earum nihil, eveniet commodi fugit maxime dolore quaerat sequi possimus nesciunt corporis similique voluptatem expedita magni aspernatur numquam dolorem sit iste! Optio, dolores.
             Velit labore libero nisi quam provident veniam amet facilis ducimus recusandae modi. Tempore, eaque? Dolorum in tenetur dignissimos tempore quia, ab, voluptas numquam nisi ad distinctio cum quas neque saepe.
             Corrupti cum consectetur illum repellendus suscipit et aspernatur omnis cumque quia, consequuntur atque laudantium aliquid beatae magnam saepe? Sed dolorum nemo necessitatibus atque dicta ipsa veritatis nam animi labore ullam?
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </CardContent>
        </TabsContent>
        <TabsContent value="direction_of_use">
          <CardContent>
            <CardHeader>
              <CardTitle>Direction Of Use</CardTitle>
              <CardDescription>
                Describes how to use the product
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse dicta deleniti? Commodi in quidem, aliquid distinctio fugiat quo quod. Maiores perferendis obcaecati libero excepturi in dolores dolorem culpa eos?
              Accusamus nam ab tempore quisquam iste assumenda, vel veritatis reprehenderit sit aperiam possimus nulla aspernatur quis excepturi, ratione totam voluptatem? Sapiente accusantium quas tempore quia, labore officiis qui laboriosam maxime.
              Odit et unde explicabo laborum asperiores quam inventore architecto iste repellendus fugit neque praesentium, veritatis molestiae illum obcaecati delectus suscipit perferendis amet aliquam ratione? Cumque quos quia explicabo animi impedit?
              Voluptatibus ullam commodi culpa doloremque voluptatum ipsum, quas facere quos nemo dolorem, quia accusamus quae sit eius, doloribus labore quam error non deserunt saepe! Velit corrupti vero in placeat quae.
              Tempora odio quisquam consequuntur minus esse pariatur impedit maiores eum delectus corrupti rerum, excepturi optio cupiditate corporis voluptate dolores alias ipsum? Cumque provident porro iusto et ducimus minima fuga similique.
              Quibusdam repellat ab enim voluptas nesciunt expedita odio adipisci, ipsam, temporibus rerum iusto animi, aut facilis doloribus repellendus officiis similique eius id cumque quae asperiores iure. Soluta est totam optio.
              Nulla porro voluptate sint! Ut a est nobis porro quidem ducimus excepturi reiciendis iusto atque, velit dolores, dolore ullam soluta blanditiis dolorum, nostrum aliquid dolorem. Sapiente ratione nesciunt blanditiis omnis!
            </CardContent>
            {/* <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
          </CardContent>
        </TabsContent>
        <TabsContent value="varients">
          <CardContent>
            <CardHeader>
              <CardTitle>Product Varients</CardTitle>
              <CardDescription>
                Shows different varients of the productg
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="current">Current password</label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <label htmlFor="new">New password</label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </CardContent>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDemonstrationSection;

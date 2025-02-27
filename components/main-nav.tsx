"use client";
import logo from "@/assets/image/logo.svg";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { allProducts } from "@/helpers/data/all-products-data";
import { ResponsiveNavMenu } from "./ResponsiveNavMenu";
import { allBrands } from "@/lib/constants";
import { Brand } from "@/types/data";

export function Navbar() {
  const calculateImageWidth = (width: number) => {
    if (width < 100) return 20;
    if (width > 130) return 100;
    return 50;
  };

  return (
    <nav
      className={
        "z-50 transition-all  duration-300 w-full px-10 py-2 sticky bg-[#F1F2F6] top-0"
      }
    >
      <div>
        <div className="flex justify-between items-center h-15">
          <div className="flex-shrink-0 items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              <Image src={logo} alt={"logo"} height={50} width={120} />
            </a>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(),"tracking-[.10em]")}
                      style={{ background: "transparent" }}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent ">
                    <span className="tracking-[.10em] ">  Our Brands</span>
                  
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="h-full w-full flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <Image
                              src={logo}
                              alt={"logo"}
                              height={100}
                              width={140}
                            />
                            {/* <p className="mb-2 mt-4 font-medium">
                              Anfords Bangladesh
                            </p> */}
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li className="h-[30vh] overflow-y-auto">
                        {allBrands &&
                          allBrands.map((item: Brand, index: number) => (
                            <ListItem
                              key={index}
                              href={item.href}
                              title={item.brandName}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent tracking-[.10em]">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="h-[50vh] overflow-y-auto">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {allProducts.slice(0, 4).map((component) => (
                        <ListItem
                          key={component.id}
                          title={component.product_name}
                          href={`/products/${component.id}`}
                        >
                          <Image
                            src={component.image || "/placeholder.png"} // Fallback image if `component.image` is empty
                            alt={`${component.product_name} image`}
                            height={50}
                            width={calculateImageWidth(component.width)}
                          />
                          {/* <div
                            dangerouslySetInnerHTML={{
                              __html: component.shortDescription,
                            }}
                            className="text-sm text-gray-700"
                          /> */}
                        </ListItem>
                      ))}
                    </ul>
                    <p className="text-center p-3 font-semibold">
                      <Link href="/products/all" className="text-blue-700">
                        See more..
                      </Link>
                    </p>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="bg-transparent">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                   className={cn(navigationMenuTriggerStyle(),"tracking-[.10em]")}
                      style={{ background: "transparent" }}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/career" legacyBehavior passHref>
                    <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(),"tracking-[.10em]")}
                      style={{ background: "transparent" }}
                    >
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(),"tracking-[.10em]")}
                      style={{ background: "transparent" }}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search products here.."
                className="pl-10 border-none bg-transparent outline-none ring-0 focus:ring-0 focus:border-transparent focus:outline-none"
              />
            </div>
          </div>
          <div className="lg:hidden md:hidden">
            {/* <Menu size={20} /> */}
            <ResponsiveNavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

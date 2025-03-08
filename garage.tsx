// index page caroudsel
{/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(),"tracking-[.14em]")}
                      style={{ background: "transparent" }}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent ">
                    <span className="tracking-[.14em] ">  Our Brands</span>
                  
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
                            <p className="mb-2 mt-4 font-medium">
                              Anfords Bangladesh
                            </p>
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
                  <NavigationMenuTrigger className="bg-transparent tracking-[.14em]">
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
                          <div
                            dangerouslySetInnerHTML={{
                              __html: component.shortDescription,
                            }}
                            className="text-sm text-gray-700"
                          />
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
                   className={cn(navigationMenuTriggerStyle(),"tracking-[.14em]")}
                      style={{ background: "transparent" }}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/career" legacyBehavior passHref>
                    <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(),"tracking-[.14em]")}
                      style={{ background: "transparent" }}
                    >
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(),"tracking-[.14em]")}
                      style={{ background: "transparent" }}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  BriefcaseBusiness,
  Building2,
  Codepen,
  Codesandbox,
  Menu,
  SquareChartGantt,
  Trello,
  Voicemail,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function ResponsiveNavMenu() {
  const navMenuItem = [
    { icon: <Building2 size={18} />, name: "About Anfords", href: "/about" },
    { icon: <Trello  size={18} />, name: "Our Brands", href: "#" },
    { icon: <SquareChartGantt  size={18} />, name: "All Products", href: "/products/all" },
    { icon: <BriefcaseBusiness  size={18} />, name: "Career", href: "/career" },
    { icon: <Voicemail  size={18} />, name: "Contact us", href: "/contact-us" },
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">Open popover</Button> */}
        <Menu size={20} />
      </PopoverTrigger>
      <PopoverContent className="w-80 lg:hidden md:hidden cursor-pointer">
        <div className="space-y-0">
          {navMenuItem.map((item, listIndex) => (
            <div key={listIndex} className={`hover:bg-blue-100 ${(listIndex+1)<navMenuItem.length&&"border-b"}`}>
              <div className="flex items-center space-x-3">
                {item.icon}
                <Link
                  href={item.href}
                  className="block font-semibold py-3"
                >
                  {item.name}
                </Link>
              </div>

              {(listIndex+1)<navMenuItem.length && <Separator />}
            </div>
          ))}

          {/* <Link
            href="/about"
            className="block font-semibold hover:bg-blue-100 p-2 border-b"
          >
            Our Brands
          </Link>
          <Link
            href="/career"
            className="block font-semibold hover:bg-blue-100 p-2 border-b"
          >
            All products
          </Link>

          <Link
            href="/career"
            className="block font-semibold hover:bg-blue-100 p-2 border-b"
          >
            Career
          </Link>
          <Link
            href="/contact-us"
            className="block font-semibold hover:bg-blue-100 p-2"
          >
            Contact Us
          </Link> */}
        </div>
      </PopoverContent>
    </Popover>
    // <DropdownMenu>
    //   <DropdownMenuTrigger>
    //     {" "}
    //     <Menu size={20} />
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    // <DropdownMenuSeparator /> */}
    //     <DropdownMenuItem>Profile</DropdownMenuItem>
    //     <DropdownMenuItem>Billing</DropdownMenuItem>
    //     <DropdownMenuItem>Team</DropdownMenuItem>
    //     <DropdownMenuItem>Subscription</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}

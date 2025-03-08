import { Brand } from "@/types/data";
import envyGray from "@/assets/image/brand/envy-gray.svg";
import envyColor from "@/assets/image/brand/envy-color.svg";
import englishGray from "@/assets/image/brand/english-gray.svg";
import englishColor from "@/assets/image/brand/english-color.svg";
import sleekGray from "@/assets/image/brand/sleek-gray.svg";
import sleekColor from "@/assets/image/brand/sleek-color.svg";
import dsGray from "@/assets/image/brand/ds-gray.svg";
import dsColor from "@/assets/image/brand/ds-color.svg";
import mediplusGray from "@/assets/image/brand/mediplus-gray.svg";
import mediplusColor from "@/assets/image/brand/mediplus-color.svg";
import brushUpGray from "@/assets/image/brand/brushUp-gray.svg";
import brushUpColor from "@/assets/image/brand/brushUp-color.svg";
import everydayGray from "@/assets/image/brand/everyday-gray.svg";
import everydayColor from "@/assets/image/brand/everyday-color.svg";
import gelGray from "@/assets/image/brand/gel-gray.svg";
import gelColor from "@/assets/image/brand/gel-color.svg";

export const allBrands: Brand[] = [
  {
    id: 1,
    brandName: "Envy",
    description: "Premium skincare solutions.",
    href: "#",
    image: { gray: envyGray, color: envyColor },
  },
  {
    id: 2,
    brandName: "English",
    description: "Healthy hair with haircare products.",
    href: "#",
    image: { gray: englishGray, color: englishColor },
  },
  {
    id: 3,
    brandName: "Sleek",
    description: "Grooming solutions.",
    href: "#",
    image: { gray: sleekGray, color: sleekColor },
  },
  {
    id: 4,
    brandName: "Mediplus",
    description: "Promoting oral health care products.",
    href: "#",
    image: { gray: mediplusGray, color: mediplusColor },
  },
  {
    id: 4,
    brandName: "Mediplus Gel",
    description: "Promoting oral health care products.",
    href: "#",
    image: { gray: gelGray, color: gelColor },
  },
  {
    id: 4,
    brandName: "Mediplus DS",
    description: "Promoting oral health care products.",
    href: "#",
    image: { gray: dsGray, color: dsColor },
  },
  {
    id: 5,
    brandName: "Brush Up",
    description: "Brightening smiles with superior oral care essentials.",
    href: "#",
    image: { gray: brushUpGray, color: brushUpColor },
  },
  {
    id: 6,
    brandName: "Every Day",
    description:
      "Elevating your grooming routine with reliable daily care products.",
    href: "#",
    image: { gray: everydayGray, color: everydayColor },
  },
];

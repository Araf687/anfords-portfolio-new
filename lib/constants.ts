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
    longDescription:"Envy is a personal care brand under Anfords Bangladesh Ltd., known for its innovative skincare and beauty products. Established with a focus on natural ingredients, Envy aims to provide effective solutions for everyday skincare needs. The brand is recognized for its commitment to quality and sustainability, utilizing ingredients that are gentle on the skin while offering significant benefits.",

    href: "#",
    image: { gray: envyGray, color: envyColor },
  },
  {
    id: 2,
    brandName: "English",
    description: "Healthy hair with haircare products.",
    longDescription:"English Anti Lice Shampoo effectively combats head lice infestations using a blend of natural ingredients like neem, tea tree oil, and eucalyptus. It is gentle on the scalp, making it suitable for all hair types while providing a soothing effect during treatment. The conditioning formula leaves hair soft and manageable, with a pleasant fragrance that masks any unpleasant odors. Regular use ensures a lice-free environment, providing peace of mind for both parents and children.",
    href: "#",
    image: { gray: englishGray, color: englishColor },
  },
  {
    id: 3,
    brandName: "Sleek",
    description: "Grooming solutions.",
    longDescription:'Sleek is a prominent brand specializing in a diverse range of air fresheners designed to enhance the ambiance of any space. With a commitment to quality and customer satisfaction, Sleek offers an array of captivating scents, including the delightful Orchid Arogga and the calming Lavender. Each fragrance is carefully crafted to evoke specific moods and create inviting environments, whether at home, in the office, or in public spaces.',
    href: "#",
    image: { gray: sleekGray, color: sleekColor },
  },
  {
    id: 4,
    brandName: "Mediplus",
    description: "Promoting oral health care products.",
    longDescription:
      'In Bangladesh, "Mediplus" is a brand associated with oral care products, particularly toothpaste, manufactured by Anfords Bangladesh Ltd. Their product line includes various toothpaste options, such as Mediplus DS and Mediplus Fluoride Gel, available in different sizes.',
    href: "#",
    image: { gray: mediplusGray, color: mediplusColor },
  },
  {
    id: 4,
    brandName: "Mediplus Gel",
    description: "Promoting oral health care products.",
    longDescription:'Mediplus Fluoride Gel is designed to provide enhanced cavity protection while strengthening enamel for a healthier smile. Infused with fluoride, this toothpaste helps prevent tooth decay, fights plaque buildup, and ensures long-lasting freshness. Its gentle yet effective formula is perfect for daily use, promoting strong teeth and healthy gums. Available in multiple sizes, Mediplus Fluoride Gel is your go-to solution for complete oral care and protection. Keep your smile bright and confident every day!',
    href: "#",
    image: { gray: gelGray, color: gelColor },
  },
  {
    id: 4,
    brandName: "Mediplus DS",
    description: "Promoting oral health care products.",
    longDescription:'Mediplus DS is specially formulated to provide deep cleaning and long-lasting protection for your teeth and gums. Its advanced formula helps remove plaque, fight cavities, and maintain fresh breath throughout the day. Designed for optimal oral hygiene, Mediplus DS strengthens enamel, prevents gum problems, and ensures a healthy, confident smile. Available in multiple sizes, it’s the perfect choice for daily dental care. Keep your teeth strong and your breath fresh with Mediplus DS!',
    href: "#",
    image: { gray: dsGray, color: dsColor },
  },
  {
    id: 5,
    brandName: "Brush Up",
    description: "Brightening smiles with superior oral care essentials.",
    longDescription:'Brush Up is a toothpaste brand offered by ANSAR HARFORD FZC, a company based in the United Arab Emirates. Their Brush Up Fluoride Toothpaste is designed to gently clean away yellowing plaque and whiten teeth with each brushing. It contains a powerful fluoride component that strengthens tooth enamel. The toothpaste is available in various flavors, including Ice Blue Minty Gel, Strong Green Minty Gel, Red Spice Minty Gel, and Miswak Toothpaste (Opaque).',
    href: "#",
    image: { gray: brushUpGray, color: brushUpColor },
  },
  {
    id: 6,
    brandName: "Every Day",
    description:
      "Elevating your grooming routine with reliable daily care products.",
      longDescription:'In Bangladesh, "Mediplus" is a brand associated with oral care products, particularly toothpaste, manufactured by Anfords Bangladesh Ltd. Their product line includes various toothpaste options, such as Mediplus DS and Mediplus Fluoride Gel, available in different sizes.',
    href: "#",
    image: { gray: everydayGray, color: everydayColor },
  },
];

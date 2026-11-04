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

//background image for the brand section
import envyBG from "@/assets/image/brand/envyBrandBG.png";
import mediplusDSBG from "@/assets/image/brand/mediplusDSBrandBG.png";
import mediplusGelBG from "@/assets/image/brand/mediplusGelBrandBG.png";
import mediplusBG from "@/assets/image/brand/MediplusBrandBG.png";
import englishBG from "@/assets/image/brand/englishBrandBG.png";
import sleekBG from "@/assets/image/brand/SleekBrandBG.png";
import brushUpBG from "@/assets/image/brand/brushUpBrandBG.png";
import everydayBG from "@/assets/image/brand/everyDayBrandBG.png";

export const allBrands: Brand[] = [
  // oral care brands lead: they are the flagship range
  {
    id: 4,
    brandName: "Mediplus",
    hide: false,
    description: "Care Beyond Clean",
    longDescription: `
  <p style="font-size: 1.5rem; margin-bottom: 20px;">
    Total Oral Protection for a Healthier You
  </p>
  <p>
    Discover comprehensive oral care solutions with Mediplus. From everyday protection to specialized care, Mediplus products ensure a confident and healthy smile.
  </p>
  <p>
    Mediplus Toothpaste is designed as a daily oral care solution, focusing on maintaining overall dental health. Its advanced formula helps reduce sensitivity and promote long-term gum and tooth health.
  </p>
  <ul>
    <li>Reduces Sensitivity</li>
    <li>Freshens Breath</li>
    <li>Stops Gum Bleeding</li>
    <li>Reduces Toothache</li>
  </ul>
  <p>
    The perfect choice for everyday oral care—ensuring a clean and healthy mouth with every use.
  </p>
`,

    href: "#",
    image: { gray: mediplusGray, color: mediplusColor },
    banner: mediplusBG,
  },
  {
    id: 5,
    brandName: "Mediplus Gel",
    hide: false,
    description: "Stronger Teeth, Healthier Smile ",
    longDescription: `
    <p style="font-size: 1.5rem; margin-bottom: 20px;">
      Advanced Fluoride Protection for Ultimate Oral Care
    </p>
    <p>
      Strengthen your teeth and protect against sensitivity with Mediplus Fluoride Gel. This specialized formula enhances enamel strength, prevents tooth decay, and is ideal for maintaining long-term dental health.
    </p>
    <p>
      Whether you need daily freshness, advanced protection, or enamel strengthening, Mediplus has a solution for you. Smile with confidence every day!
    </p>

    <p>
      New improved formula with petroleum free neutral Glycol.
    </p>
    <p>
     Mediplus Fluoride Gel was developed as a preventive care product, aimed at protecting against cavities by delivering a high concentration of fluoride. It is recommended for individuals with a higher risk of decay, including children and those with orthodontic appliances.
    </p>
  `,
    href: "#",
    image: { gray: gelGray, color: gelColor },
    banner: mediplusGelBG,
  },
  {
    id: 6,
    brandName: "Mediplus DS",
    hide: false,
    description: "Strength You Can Smile About ",
    longDescription: `
    <p style="font-size: 1.5rem;margin-bottom: 20px;">
      Advanced Care for a Healthier Smile
    </p>
    <p>
      Experience next-level oral care with Mr. D Plus DS—the toothpaste designed for stronger teeth, healthier gums, and long-lasting freshness. Formulated with advanced dental science, it provides superior cavity protection, fights plaque and bacteria, and keeps your breath fresh all day.
    </p>
    <p>
      From sensitivity relief to gum protection and enamel strengthening, there's a Mr. D Plus DS variant for every need.
    </p>
    <p>
      Globally trusted, Mr. D Plus DS incorporates clinically proven ingredients like fluoride, herbal extracts, and activated minerals to deliver a dentist-approved clean.
    </p>
    <p>
      Committed to oral health innovation, Mr. D Plus DS is made with sustainably sourced ingredients, ensuring a safe and effective solution for your daily routine.
    </p>
    <p>
      Because a confident smile starts with stronger, healthier teeth.
    </p>
    <p><strong>Strength You Can Smile About.</strong></p>
  `,
    href: "#",
    image: { gray: dsGray, color: dsColor },
    banner: mediplusDSBG,
  },
  {
    id: 7,
    brandName: "Brush Up",
    hide: false,
    description: "Refresh. Protect. Shine.",
    longDescription: `
    <p style="font-size: 1.5rem;margin-bottom: 20px;">
     Daily Oral Care for a Brighter, Healthier Smile
    </p>
    <p>
      Brush UP's powerful fluoride strengthens the enamel. The new exciting fresh flavor & strong mouthwash makes your mouth cool & fresh.
    </p>
    <p>
      Get a fresh start every morning with Brush Up Toothpaste! Brush Up fight’s plaque, protects against cavities, and keeps your breath fresh all day. Take the step towards a healthier, brighter smile—Brush Up and smile confidently!
    </p>
    <p>
    Experience the ultimate in oral hygiene with Brush up Toothpaste, your go-to solution for a confident and healthy smile. Specially formulated to provide comprehensive dental care, brush Up offers:
    </p>
     <ul>
            <li><strong>Strong Fluoride System:</strong>  Gives stronger teeth </li>
            <li><strong>Fresh Breath:</strong>  Leaves your mouth feeling fresh and clean throughout the day.</li>
            
          </ul>
    <p>
    Ideal for daily use, BrushUp Toothpaste is crafted to suit the oral care needs of all age groups. Trust BrushUp to deliver a refreshing start and a confident finish to your day, every time you brush!
    </p>
   
  `,
    href: "#",
    image: { gray: brushUpGray, color: brushUpColor },
    banner: brushUpBG,
  },
  {
    id: 2,
    brandName: "English",
    hide: false,
    description: "Bye Head Lice, Hello Healthy Hair",
    longDescription: `
    <p style="font-size: 1.5rem;margin-bottom: 20px;">
      Head Lice Removal Shampoo, Now in a New Fragrance
    </p>
    <p>
      English Anti-Lice Shampoo clears head lice and keeps your hair healthy. With regular use, hair becomes free of head lice, shiny and smooth.
    </p>
    <p>
      Just leave it on for five minutes, and stay completely free of head lice.
    </p>
    <ul>
      <li>Dual action: clears head lice and keeps hair healthy</li>
      <li>Leave it on for five minutes for complete protection</li>
      <li>Regular use leaves hair free of head lice, shiny and smooth</li>
      <li>Conditioning shampoo for all types of hair</li>
    </ul>
    <p>Bye Head Lice, Hello Healthy Hair.</p>
  `,
    href: "#",
    image: { gray: englishGray, color: englishColor },
    banner: englishBG,
  },
  {
    id: 8,
    brandName: "Every Day",
    hide: false,
    description: "Smooth Shave, Fresh Start",
    longDescription: `
    <p style="font-size: 1.5rem;margin-bottom: 20px;">
      Ultimate Comfort for Your Daily Shave
    </p>
    <p>
   Start your day with Everyday Shaving Foam—designed for a smooth, irritation-free shave with rich, creamy lather that softens hair and protects your skin. Infused with moisturizing agents and soothing ingredients, it ensures a close, comfortable shave while keeping your skin hydrated and refreshed.
    </p>
    <p>
     Formulated with aloe vera, vitamin E, and cooling menthol, Everyday Shaving Foam: 
    </p>
    <ul>
      <li>1. Softens hair for effortless razor glide</li>
      <li>2. Prevents cuts, nicks, and razor burns</li>
      <li>3. Leaves skin feeling fresh and nourished</li>
    </ul>
    <p>Suitable for all skin types, its non-irritating formula provides a refreshing shaving experience every day.</p>
    <p>Because a great day starts with a great shave.</p>
    <p>Smooth Shave, Fresh Start.</p>
  `,
    href: "#",
    image: { gray: everydayGray, color: everydayColor },
    banner: everydayBG,
  },
  {
    id: 3,
    brandName: "Sleek",
    hide: false,
    description: "Freshen up your space with Sleek Air Freshener!",
    longDescription: `
          <p>
            Transform your home, officeor any area with delightful fragrances
            that last long. Whether you&#39;re looking to relax , Sleek has the
            perfect scent for every mood. Say goodbye to odors and hello to
            freshness!
          </p>
          <p>
            Transform your space with Sleek Sir Freshener! Available in seven
            captivating flavors – Lavender, Lime, Rose, Anti-Tobacco, Bakhoor,
            Jasmine, and Orchid – it ensures a refreshing ambiance that suits
            every mood.
          </p>
          <h2 className='text-red-400'><b>Elevate Every Breath</b></h2>
          <p>
            Elevate your surroundings with the enchanting fragrances of Sleek
            Sir Freshener. Designed to create an inviting atmosphere, this air
            freshener comes in seven delightful flavors:
          </p>
          <ul>
            <li><strong>Lavender:</strong> For a calming and soothing experience.</li>
            <li><strong>Lime:</strong> A burst of citrusy freshness to energize your space.</li>
            <li><strong>Rose:</strong> The timeless elegance of blooming roses.</li>
            <li>
              <strong>Anti-Tobacco:</strong> Specially formulated to neutralize and refresh smoky
              odors.
            </li>
            <li><strong>Bakhoor:</strong> An exotic, woody aroma for a luxurious vibe.</li>
            <li>
              <strong>Jasmine:</strong> The soft, floral essence of freshly picked jasmine.
            </li>
            <li>
              <strong>Orchid:</strong> A unique, sophisticated fragrance to uplift your mood.
            </li>
          </ul>
          <p>
            Perfect for homes, offices, or cars, Sleek Sir Freshener combines
            long-lasting scents with an easy-to-use design, ensuring your space
            remains fragrant and inviting all day long. Choose your favorite
            scent and refresh your environment with Sleek!
          </p>
          <p>Variants: 300ml.</p>
    `,
    href: "#",
    image: { gray: sleekGray, color: sleekColor },
    banner: sleekBG,
  },
  {
    id: 1,
    brandName: "Envy",
    hide: true,
    description: "Glow Naturally, Shine Beautifully",
    longDescription: `
    <p style="font-size: 1.5rem;margin-bottom: 20px;">
      Daily Oral Care for a Brighter, Healthier Smile
    </p>
    <p>
   Experience the timeless skincare secret with Envy Ubtan Soap—a luxurious blend of turmeric, sandalwood, and natural herbs for glowing, healthy skin. Inspired by ancient beauty rituals, this soap gently cleanses, exfoliates, and nourishes, revealing a brighter, more radiant complexion every day.
    </p>
    <p>
     Enriched with saffron, almond oil, and multani mitti, Envy Ubtan Soap helps to: 
    </p>
    <ul>
      <li>Deep cleanse & remove impurities</li>
      <li>Brighten & even out skin tone</li>
      <li>Maintain moisture & softness</li>
    </ul>
    <p>Free from harsh chemicals & artificial additives, this herbal-infused formula is suitable for all skin types, giving you a natural, glowing look with every wash.</p>
    <p>Because true beauty starts with nature.</p>
    <p>Glow Naturally, Shine Beautifully.</p>
  `,
    href: "#",
    image: { gray: envyGray, color: envyColor },
    banner: envyBG,
  },
];

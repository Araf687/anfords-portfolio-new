import brush from "@/assets/image/products/TB-04.jpg";
import toothpaste from "@/assets/image/products/B UP.png";
import floss from "@/assets/image/products/D Floss.png";
import DSTube from "@/assets/image/products/DSl Pack & Tube.png";
import shampoo from "@/assets/image/products/web-images/english-shampu1_crop.png";
import sleek from "@/assets/image/products/Sleek-5.png";
import envy from "@/assets/image/products/envy.png";
import florideGel from "@/assets/image/products/Fgel Pack & Tube.png";
import mediplusToothpaste from "@/assets/image/products/mediplusResize2.png";

export const allProducts = [
  {
    id: 1,
    brand_name: "Mediplus",
    product_name: "Mediplus Toothpaste",
    image: mediplusToothpaste,
    shortDescription: `<div >
  <h2 class="text-2xl mb-4">
    Achieve a Healthier Smile with Mediplus Toothpaste!
  </h2>
  <p class="text-gray-900">
    Maintain your dental health with <span class="font-semibold">Mediplus Toothpaste</span>, designed to fight cavities, freshen breath, and strengthen enamel for a healthier, brighter smile.
  </p>
</div>
`,
    longDescription: `<div>
  <h2 class="text-xl font-semibold text-gray-800 mb-4">
    Mediplus Toothpaste: Your Daily Oral Care Solution
  </h2>
  <p class="text-gray-900 leading-relaxed mb-4">
    Mediplus Toothpaste was introduced as a daily oral care solution, focusing
    on maintaining overall dental health. The formula helps combat cavities,
    plaque, and gum issues. It was designed to provide long-lasting freshness
    and strengthen enamel.
  </p>
  <ul class=" pl-5 space-y-2 text-gray-900">
    <li><strong >Reduces Sensitivity</strong></li>
    <li><strong >Freshens Breath</strong></li>
    <li><strong >Stops Gum Bleeding</strong></li>
    <li><strong >Reduces Toothache</strong></li>
  </ul>
  <p class="text-gray-700 leading-relaxed mt-4">
    The perfect choice for everyday oral care. It fights plaque, freshens
    breath, and protects against cavities, ensuring a clean and healthy mouth
    with every use.
  </p>
</div>
`,
    rating: "4.5",
    width: 250,
    height: undefined,
  },
  {
    id: 2,
    brand_name: "Brush Up",
    product_name: "Brush Up Toothpaste",
    image: toothpaste,
    shortDescription: `<div>
  <h2 class="text-xl font-semibold mb-4">
    Start Your Day Fresh with Brush Up Toothpaste!
  </h2>
  <p class="text-gray-900 leading-relaxed mb-4">
    Brush Up contains a whitening agent that works gently every time you brush.
    Its powerful fluoride strengthens enamel, while the exciting fresh flavor
    and strong mouthwash leave your mouth cool and fresh.
  </p>
  <p class="text-gray-900 leading-relaxed mb-4">
    Brush Up fights plaque, protects against cavities, and keeps your breath
    fresh all day. Take the step towards a healthier, brighter smile—Brush Up
    and smile confidently!
  </p>
</div>
`,
    longDescription: `<div >
  <h2 class="text-3xl font-bold text-gray-800 mb-4">
    Experience the Ultimate in Oral Hygiene with Brush Up Toothpaste!
  </h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Brush Up Toothpaste is your go-to solution for a confident and healthy smile. Specially formulated to provide comprehensive dental care, Brush Up offers:
  </p>
  <ul class="list-disc pl-5 space-y-2 text-gray-700">
    <li>
      <strong class="text-gray-900">Cavity Protection:</strong> Fights tooth decay with fluoride to strengthen enamel and prevent cavities.
    </li>
    <li>
      <strong class="text-gray-900">Fresh Breath:</strong> Leaves your mouth feeling fresh and clean throughout the day.
    </li>
    <li>
      <strong class="text-gray-900">Gentle Whitening:</strong> Removes surface stains to reveal a naturally brighter smile.
    </li>
  </ul>
  <p class="text-gray-700 leading-relaxed mt-4">
    Ideal for daily use, Brush Up Toothpaste is crafted to suit the oral care needs of all age groups. Trust Brush Up to deliver a refreshing start and a confident finish to your day, every time you brush!
  </p>
</div>
`,
    rating: "4.7",
    width: 280,
    height: undefined,
  },
  {
    id: 3,
    brand_name: "Envy",
    product_name: "Uptan Soap",
    image: envy,
    shortDescription: `<p>Experience the traditional essence of glowing skin with Envy Uptan Soap. Enriched with natural ingredients, it gently cleanses and nourishes your skin, leaving it refreshed every day.</p>`,
    longDescription: `<p>Discover the secret to radiant and naturally glowing skin with Envy Uptan Soap. Crafted with a blend of traditional ingredients such as turmeric, uptan, and coconut oil, this soap is a luxurious treat for your skin. It deeply cleanses while preserving your skin’s natural moisture, promoting a soft, smooth, and even-toned complexion. Ideal for all skin types, Envy Uptan Soap works as a gentle exfoliant, removing impurities and dead skin cells while restoring your skin’s natural glow. Say goodbye to dullness and hello to a fresh look every time. Embrace the timeless beauty of nature with Envy Uptan Soap.</p>`,
    rating: "4.6",
    width: 200,
    height: undefined,
  },
  {
    id: 4,
    brand_name: "Sleek",
    product_name: "Air Freshener",
    image: sleek,
    shortDescription: `<p><p class="text-lg md:text-xl font-semibold mb-3">Freshen up your space with Sleek Air Freshener!</p> Available in seven captivating flavors – Lavender, Lime, Rose, Anti-Tobacco, Bakhoor, Jasmine, and Orchid – it ensures a refreshing ambiance that suits every mood.</p>`,
    longDescription: `<p>Elevate your surroundings with the enchanting fragrances of Sleek Air Freshener. Designed to create an inviting atmosphere, this air freshener comes in seven delightful flavors: <ul class="space-y-2 mt-2"><li><strong>Lavender:</strong> For a calming and soothing experience.</li><li><strong>Lime:</strong> A burst of citrusy freshness to energize your space.</li><li><strong>Rose:</strong> The timeless elegance of blooming roses.</li><li><strong>Anti-Tobacco:</strong> Specially formulated to neutralize and refresh smoky odors.</li><li><strong>Bakhoor:</strong> An exotic, woody aroma for a luxurious vibe.</li><li><strong>Jasmine:</strong> The soft, floral essence of freshly picked jasmine.</li><li><strong>Orchid:</strong> A unique, sophisticated fragrance to uplift your mood.</li></ul>
    <p class="mt-2">Perfect for homes, offices, or cars, Sleek Air Freshener combines long-lasting scents with an easy-to-use design, ensuring your space remains fragrant and inviting all day long. Choose your favorite scent and refresh your environment with Sleek!</p></p>`,
    rating: "4.8",
    width: 50,
    height: undefined,
  },
  {
    id: 5,
    brand_name: "Mediplus",
    product_name: "Mediplus DS",
    image: DSTube,
    shortDescription: `<p>Designed for individuals requiring extra care, Mediplus DS offers double-strength protection. Its advanced formula provides enhanced antibacterial action, helping to combat stubborn oral issues like persistent plaque and gum sensitivity effectively.</p>`,
    longDescription: `<p>Mediplus DS was formulated as a specialized toothpaste targeting users with sensitive teeth and gums. The 'DS' stands for "Dual Strength," offering relief to those with sensitivity to hot and cold foods. Its unique formula includes potassium nitrate to help reduce sensitivity over time. <ul><li><strong>Protection Against Sensitivity</strong></li><li><strong>Gentle Whitening</strong></li></ul></p>`,
    rating: "4.4",
    width: 260,
    height: undefined,
  },
  {
    id: 6,
    brand_name: "Mediplus",
    product_name: "Fluoride Gel",
    image: florideGel,
    shortDescription: `<p>Strengthen your teeth and protect against cavities with Mediplus Fluoride Gel. This specialized formula enhances enamel strength, prevents tooth decay, and is ideal for maintaining long-term dental health.</p>`,
    longDescription: `<p>Mediplus Fluoride Gel was developed as a preventive care product, aimed at protecting against cavities by delivering a high concentration of fluoride. It is recommended for individuals with a higher risk of decay, including children and those with orthodontic appliances. Benefits include: <ul><li><strong>Effective Desensitization:</strong> Relief from tooth sensitivity caused by hot or cold foods and drinks.</li><li><strong>Fluoride Protection:</strong> Strengthens tooth enamel and protects against cavities.</li><li><strong>Fresh Taste:</strong> Leaves your mouth feeling clean and fresh after every use.</li></ul></p>`,
    rating: "4.5",
    width: 250,
    height: undefined,
  },
  {
    id: 7,
    brand_name: "Mediplus",
    product_name: "Dental Floss",
    image: floss,
    shortDescription: `<p>Achieve cleaner, healthier teeth with Mediplus Dental Floss. Designed for easy use, it removes plaque and debris from hard-to-reach areas, promoting excellent oral hygiene.</p>`,
    longDescription: `<p>Enhance your oral care routine with Mediplus Dental Floss, the perfect companion for maintaining a healthy, radiant smile. Specially crafted to glide smoothly between teeth, it effectively removes food particles and plaque that brushing alone might miss. Regular use helps prevent cavities, gum disease, and bad breath, ensuring your mouth feels fresher and cleaner every day.</p>`,
    rating: "4.6",
    width: 150,
    height: undefined,
  },
  // {
  //   id: 8,
  //   brand_name: "Everyday",
  //   product_name: "Shaving Foam",
  //   image: "",
  //   shortDescription: `<p>Enjoy a smooth, irritation-free shave with Everyday Shaving Foam, designed for all skin types, including sensitive skin.</p>`,
  //   longDescription: `<p>Everyday Shaving Foam provides superior hydration and comfort. Its ultra-moisturizing formula ensures a close, irritation-free shave while nourishing your skin. Available in refreshing variants, it's the perfect companion for your grooming routine.</p>`,
  //   rating: "4.7",
  //   width: 200,
  //   height:undefined,
  // },
  {
    id: 9,
    brand_name: "Mediplus",
    product_name: "Mediplus Toothbrush",
    image: brush,
    shortDescription:
      "<div>Experience superior oral care with the Mediplus Toothbrush. Its advanced design ensures deep cleaning, gentle gum care, and lasting freshness for a healthy, confident smile.Gentle care, effective cleaning! Available in 4 vibrant colors, it ensures a deep clean and healthy gums for a confident smile every day.</div>",
    longDescription:
      "<div>The Mediplus Toothbrush is crafted for exceptional oral hygiene, combining functionality and comfort to give you a refreshing brushing experience.Advanced Bristle Design: Soft yet sturdy bristles effectively remove plaque and debris while being gentle on gums.	Deep Cleaning: Reaches hard-to-access areas, ensuring thorough cleaning and fresher breath.Gum Care: Designed to promote gum health by reducing irritation during brushing.Available in vibrant colors and suitable for all age groups, the Mediplus Toothbrush is the perfect addition to your oral care routine. Start every day with a smile, thanks to Mediplus!</div>",
    rating: "361",
    width: 130,
  },
  {
    id: 10,
    brand_name: "Shampoo",
    product_name: "English Shampoo",
    image: shampoo,
    shortDescription: `<p><p class="text-lg md:text-3xl mb-3">Struggling with hair lice?</p><p>Our English shampoo is here to help! Designed to effectively remove head lice while being gentle on your scalp, it’s packed with nourishing ingredients that leave your hair fresh and smooth. Get rid of lice and enjoy healthy, beautiful hair with every wash!</p></p>`,

    longDescription: `<p>Our specially formulated anti-lice shampoo targets lice, gently cleansing your scalp and hair while leaving it fresh, clean, and lice-free. It’s a hassle-free, easy solution that works for both kids and adults. Simply apply, massage, rinse—and let English Shampoo do the rest! Say goodbye to lice and hello to confidence! Available at leading stores near you.</p>`,
    rating: "73477",
    width: 120,
  },
];

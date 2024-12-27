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
    id: 2,
    brand_id:5,
    brand_name: "Brush Up",
    product_name: "Brush Up Toothpaste",
    image: toothpaste,
    shortDescription: `<div>
  <h2 class="text-xl font-semibold mb-4">
    Start Your Day Fresh with Brush Up Toothpaste!
  </h2>
  <p class="text-lg leading-relaxed mb-4">
    Brush Up contains a whitening agent that works gently every time you brush.
    Its powerful fluoride strengthens enamel, while the exciting fresh flavor
    and strong mouthwash leave your mouth cool and fresh.
  </p>
  <p class="text-lg leading-relaxed mb-4">
    Brush Up fights plaque, protects against cavities, and keeps your breath
    fresh all day. Take the step towards a healthier, brighter smile—Brush Up
    and smile confidently!
  </p>
</div>
`,
    longDescription: `<div >
  <h2 class="text-3xl font-bold text-blue-900 mb-4">
    Experience the Ultimate in Oral Hygiene with Brush Up Toothpaste!
  </h2>
  <p class="text-lg leading-relaxed mb-4">
    Brush Up Toothpaste is your go-to solution for a confident and healthy smile. Specially formulated to provide comprehensive dental care, Brush Up offers:
  </p>
  <ul class="list-disc pl-5 space-y-2 text-lg">
    <li>
      <strong class="text-lg">Cavity Protection:</strong> Fights tooth decay with fluoride to strengthen enamel and prevent cavities.
    </li>
    <li>
      <strong class="text-lg">Fresh Breath:</strong> Leaves your mouth feeling fresh and clean throughout the day.
    </li>
    <li>
      <strong class="text-lg">Gentle Whitening:</strong> Removes surface stains to reveal a naturally brighter smile.
    </li>
  </ul>
  <p class="text-lg leading-relaxed mt-4">
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
    brand_id:1,
    brand_name: "Envy",
    product_name: "Uptan Soap",
    image: envy,
    shortDescription: `<div >
  <h1 class="text-xl font-semibold mb-4">Experience the Traditional Essence of Glowing Skin</h1>
  <p class="text-lg leading-relaxed mb-4">
    Discover the beauty of nature with <span >Envy Ubtan Soap</span>. 
    Enriched with natural ingredients, it gently cleanses and nourishes your skin, leaving it refreshed and radiant every day.
  </p>
</div>`,
    longDescription: `<div>
  <h1 class="text-3xl font-bold text-blue-900 mb-4">Discover the Secret to Radiant Skin</h1>
  <p class="text-lg leading-relaxed">
    Experience the magic of <span class="font-semibold text-yellow-600">Envy Ubtan Soap</span>, crafted with a blend of 
    traditional ingredients like <span class="text-yellow-600">turmeric</span>, <span class="text-yellow-600">ubtan</span>, 
    and <span class="text-yellow-600">coconut oil</span>. This luxurious soap deeply cleanses your skin while preserving its 
    natural moisture, leaving you with a soft, smooth, and even-toned complexion.
  </p>
  <p class="text-lg leading-relaxed mt-4">
    Ideal for all skin types, <span class="font-semibold text-yellow-600">Envy Ubtan Soap</span> works as a gentle exfoliant, 
    removing impurities and dead skin cells to restore your skin’s natural glow. Say goodbye to dullness and hello to a fresh 
    look every time.
  </p>
  <p class="text-lg leading-relaxed mt-4">
    Embrace the timeless beauty of nature with <span class="font-semibold text-yellow-600">Envy Ubtan Soap</span>.
  </p>
</div>
`,
    rating: "4.6",
    width: 200,
    height: undefined,
  },
  {
    id: 4,
    brand_id:3,
    brand_name: "Sleek",
    product_name: "Sleek Air Freshener",
    image: sleek,
    shortDescription: `<p><p class="text-lg md:text-xl font-semibold mb-3">Freshen up your space with Sleek Air Freshener!</p> Available in seven captivating flavors – Lavender, Lime, Rose, Anti-Tobacco, Bakhoor, Jasmine, and Orchid – it ensures a refreshing ambiance that suits every mood.</p>`,
    longDescription: `<div>
  <h1 class="text-3xl font-bold text-blue-900 mb-4">Elevate Your Surroundings with Sleek Sir Freshener</h1>
  <p class="text-lg leading-relaxed">
    Transform your space with the enchanting fragrances of <span class="font-semibold text-lg">Sleek Sir Freshener</span>. 
    Designed to create an inviting atmosphere, this air freshener comes in seven delightful flavors:
  </p>
  <ul class=" mt-4 space-y-3 text-lg">
    <li><span class="font-bold text-lg">Lavender</span>: For a calming and soothing experience.</li>
    <li><span class="font-bold text-lg">Lime</span>: A burst of citrusy freshness to energize your space.</li>
    <li><span class="font-bold text-lg">Rose</span>: The timeless elegance of blooming roses.</li>
    <li><span class="font-bold text-lg">Anti-Tobacco</span>: Specially formulated to neutralize and refresh smoky odors.</li>
    <li><span class="font-bold text-lg">Bakhoor</span>: An exotic, woody aroma for a luxurious vibe.</li>
    <li><span class="font-bold text-lg">Jasmine</span>: The soft, floral essence of freshly picked jasmine.</li>
    <li><span class="font-bold text-lg">Orchid</span>: A unique, sophisticated fragrance to uplift your mood.</li>
  </ul>
  <p class="text-lg leading-relaxed mt-4">
    Perfect for homes, offices, or cars, <span class="font-semibold text-lg">Sleek Sir Freshener</span> combines 
    long-lasting scents with an easy-to-use design, ensuring your space remains fragrant and inviting all day long. 
    Choose your favorite scent and refresh your environment with Sleek!
  </p>
</div>
`,
    rating: "4.8",
    width: 50,
    height: undefined,
  },
  {
    id: 5,
    brand_id:4,
    brand_name: "Mediplus",
    product_name: "Mediplus DS",
    image: DSTube,
    shortDescription: `<div>
  <h1 class="text-xl font-semibold mb-4">Experience Double Protection with Mediplus DS!</h1>
  <p class="text-lg leading-relaxed">
    Designed for individuals requiring extra care, <span class="font-semibold">Mediplus DS</span> offers double-strength protection. 
    Its advanced formula provides enhanced antibacterial action, effectively combating stubborn oral issues such as persistent plaque and gum sensitivity.
  </p>
</div>
`,
    longDescription: `<div>
  <h1 class="text-3xl text-blue-900 font-bold mb-4">Mediplus DS: Specialized Care for Sensitive Teeth and Gums</h1>
  <p class="text-lg leading-relaxed">
    <span class="font-semibold">Mediplus DS</span> is a specialized toothpaste designed for individuals with sensitive teeth and gums. 
    The "DS" stands for <span class="italic">Dual Strength</span>, offering targeted relief for sensitivity to hot and cold foods. 
    Its unique formula includes potassium nitrate to help reduce sensitivity over time.
  </p>
  <ul class="text-lg list-disc list-inside mt-4">
    <li><span class="font-semibold">Protection Against Sensitivity</span></li>
    <li><span class="font-semibold">Gentle Whitening</span></li>
  </ul>
</div>
`,
    rating: "4.4",
    width: 260,
    height: undefined,
  },
  {
    id: 6,
    brand_id:4,
    brand_name: "Mediplus",
    product_name: "Fluoride Gel",
    image: florideGel,
    shortDescription: `<div >
 <h1 class="text-xl font-semibold mb-4">Be Strengthened and Protected with Fluoride Gel!</h1>

  <p class="text-lg leading-relaxed">
    Strengthen your teeth and protect against cavities with <span class="font-semibold ">Mediplus Fluoride Gel</span>. 
    This specialized formula enhances enamel strength, prevents tooth decay, and is ideal for maintaining long-term dental health.
  </p>
  <p class="text-lg leading-relaxed mt-4">
    Whether you need daily freshness, advanced protection, or enamel strengthening, <span class="font-semibold ">Mediplus</span> has a solution for you. 
    Smile with confidence every day!
  </p>
</div>
`,
    longDescription: `<div>
  <h1 class="text-3xl font-bold text-blue-800 mb-4">Mediplus Fluoride Gel: Power Relief for Sensitive Teeth</h1>
  <div class="text-lg">
  <p class=" leading-relaxed">
    <span class="font-semibold">Mediplus Fluoride Gel</span> was developed as a preventive care product, aimed at protecting against cavities by delivering a high concentration of fluoride. 
    It is recommended for individuals with a higher risk of decay, including children and those with orthodontic appliances.
  </p>

  <p class="mt-4 mb-3 leading-relaxed">
    <span class="font-bold">Mediplus Fluoride Gel Power Relief Decentralizing Toothpaste: </span>.
  </p>
  <ul class="list-decimal list-inside space-y-2 ">
    <li>
      <span class="font-semibold ">Effective Desensitization:</span> This toothpaste is specially formulated to provide relief from tooth sensitivity. If you experience discomfort when consuming hot or cold foods and drinks, MediPlus can help reduce that sensitivity and make eating and drinking enjoyable again.
    </li>
    <li>
      <span class="font-semibold ">Fluoride Protection:</span> MediPlus contains fluoride, which strengthens tooth enamel and helps protect against cavities. It’s a great way to keep your teeth strong and healthy.
    </li>
    <li>
      <span class="font-semibold">Fresh Taste:</span> With a pleasant, refreshing taste, MediPlus leaves your mouth feeling clean and fresh after every use.
    </li>
  </ul>
  <p class=" leading-relaxed mt-4">
    If you’re looking for a solution to tooth sensitivity that also helps maintain your oral health, give MediPlus a try.
  </p>
  </div>
  
</div>
`,
    rating: "4.5",
    width: 250,
    height: undefined,
  },
  {
    id: 7,
    brand_id:4,
    brand_name: "Mediplus",
    product_name: "Mediplus Dental Floss",
    image: floss,
    shortDescription: `<div>
  <h1 class="text-xl font-bold mb-4">Mediplus Dental Floss: Cleaner, Healthier Teeth!</h1>
  <p class="leading-relaxed">
    Achieve cleaner, healthier teeth with <span class="font-semibold text-blue-600">Mediplus Dental Floss</span>. Designed for easy use, it removes plaque and debris from hard-to-reach areas, promoting excellent oral hygiene.
  </p>
</div>`,
    longDescription: `<div>
  <h1 class="text-3xl font-bold text-blue-800 mb-4">Mediplus Dental Floss: Your Companion for a Radiant Smile</h1>

  <div class="text-lg">
    <p class="leading-relaxed mb-4">
    Enhance your oral care routine with <span class="font-semibold text-green-600">Mediplus Dental Floss</span>, the perfect companion for maintaining a healthy, radiant smile. 
    Specially crafted to glide smoothly between teeth, it effectively removes food particles and plaque that brushing alone might miss.
  </p>
  <h2 class="text-lg font-bold mb-3">Key Benefits:</h2>
  <ul class="list-decimal space-y-2 ">
    <li>
      <span class="font-semibold text-green-600">Gentle yet Effective:</span> Cleans deeply without damaging gums.
    </li>
    <li>
      <span class="font-semibold text-green-600">Comfortable Design:</span> Soft yet durable material for easy and safe use.
    </li>
    <li>
      <span class="font-semibold text-green-600">Compact & Convenient:</span> Perfect for on-the-go oral hygiene.
    </li>
  </ul>
  <p class=" leading-relaxed mt-4">
    Regular use of Mediplus Dental Floss helps prevent cavities, gum disease, and bad breath, ensuring your mouth feels fresher and cleaner every day. 
    Make Mediplus Dental Floss a part of your daily routine for complete oral care!
  </p></div>

</div>`,
    rating: "4.6",
    width: 150,
    height: undefined,
  },
  // {
  //   id: 8,
  //   brand_name: "Everyday",
  //   brand_id:1,
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
    brand_id:4,
    brand_name: "Mediplus",
    product_name: "Mediplus Toothbrush",
    image: brush,
    shortDescription:
      `<div>
      <p class="text-xl mb-4 font-semibold">Gentle Care, Confident Smiles!</p>
  <p class="text-lg">
    Experience superior oral care with the <span class="font-semibold text-blue-600">Mediplus Toothbrush</span>. Its advanced design ensures deep cleaning, gentle gum care, and lasting freshness for a healthy, confident smile.
  </p>
  <p class="text-lg mt-2">
    Gentle care, effective cleaning! Available in 4 vibrant colors, it ensures a deep clean and healthy gums for a confident smile every day.
  </p>
</div>
`,
    longDescription:`<div >
  <h2 class="text-3xl font-bold text-blue-800 mb-4">The Mediplus Toothbrush</h2>
  <div class="text-lg">  <p class="mb-4">
    The <span class="font-semibold text-blue-600">Mediplus Toothbrush</span> is crafted for exceptional oral hygiene, combining functionality and comfort to give you a refreshing brushing experience.
  </p>
  <ul class="list-disc list-inside space-y-2 mb-4">
    <li><span class="font-semibold text-blue-600">Advanced Bristle Design:</span> Soft yet sturdy bristles effectively remove plaque and debris while being gentle on gums.</li>
    <li><span class="font-semibold text-blue-600">Deep Cleaning:</span> Reaches hard-to-access areas, ensuring thorough cleaning and fresher breath.</li>
    <li><span class="font-semibold text-blue-600">Gum Care:</span> Designed to promote gum health by reducing irritation during brushing.</li>
  </ul>
  <p>
    Available in vibrant colors and suitable for all age groups, the <span class="font-semibold text-blue-600">Mediplus Toothbrush</span> is the perfect addition to your oral care routine. Start every day with a smile, thanks to Mediplus!
  </p><div>

</div>
`,
    rating: "361",
    width: 130,
  },
  {
    id: 10,
    brand_id:2,
    brand_name: "Shampoo",
    product_name: "English Shampoo",
    image: shampoo,
    shortDescription: `<p><p class="text-lg md:text-xl font-semibold mb-3">Struggling with hair lice?</p><p class="text-lg">Our English shampoo is here to help! Designed to effectively remove head lice while being gentle on your scalp, it’s packed with nourishing ingredients that leave your hair fresh and smooth. Get rid of lice and enjoy healthy, beautiful hair with every wash!</p></p>`,

    longDescription: `<div>
  <h1 class="text-3xl font-bold text-blue-900 mb-4">Say Goodbye to Lice with English Shampoo</h1>
  <p class="text-lg leading-relaxed">
    Our specially formulated <span class="font-semibold text-blue-600">anti-lice shampoo</span> targets lice, gently cleansing your 
    scalp and hair while leaving it fresh, clean, and lice-free. It’s a hassle-free, easy solution that works for both kids and adults.
  </p>
  <p class="text-lg leading-relaxed mt-4">
    Simply apply, massage, rinse—and let <span class="font-semibold text-blue-600">English Shampoo</span> do the rest! 
    Say goodbye to lice and hello to confidence!
  </p>
  <p class="text-lg leading-relaxed mt-4">
    Available at leading stores near you.
  </p>
</div>
`,
    rating: "73477",
    width: 120,
  },
  {
    id: 1,
    brand_id:4,
    brand_name: "Mediplus",
    product_name: "Mediplus Toothpaste",
    image: mediplusToothpaste,
    shortDescription: `<div >
  <h2 class="text-xl font-semibold mb-4">
    Achieve a Healthier Smile with Mediplus Toothpaste!
  </h2>
  <p class="text-lg">
    Maintain your dental health with <span class="font-semibold">Mediplus Toothpaste</span>, designed to fight cavities, freshen breath, and strengthen enamel for a healthier, brighter smile.
  </p>
</div>
`,
    longDescription: `<div>
  <h2 class="text-3xl font-semibold text-blue-900 mb-4">
    Mediplus Toothpaste: Your Daily Oral Care Solution
  </h2>
  <p class="text-lg leading-relaxed mb-4">
    Mediplus Toothpaste was introduced as a daily oral care solution, focusing
    on maintaining overall dental health. The formula helps combat cavities,
    plaque, and gum issues. It was designed to provide long-lasting freshness
    and strengthen enamel.
  </p>
  <ul class=" pl-5 space-y-2 text-lg">
    <li><strong >Reduces Sensitivity</strong></li>
    <li><strong >Freshens Breath</strong></li>
    <li><strong >Stops Gum Bleeding</strong></li>
    <li><strong >Reduces Toothache</strong></li>
  </ul>
  <p class="text-lg leading-relaxed mt-4">
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
];

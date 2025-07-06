const products = [

  // Skincare - Avila Naturalle Products
  {
    id: 1,
    name: "Avila Hyaluronic Acid Serum",
    category: "Skincare",
    price: 25000,
    image: "/Avila-1.jpeg",
    description: "Avila Naturalle intensive hydrating serum with pure hyaluronic acid for plump, dewy skin. 100% natural ingredients.",
    inStock: true
  },
  {
    id: 2,
    name: "Avila Vitamin C Brightening Serum",
    category: "Skincare",
    price: 28000,
    image: "/Avila-2.jpeg",
    description: "Avila Naturalle powerful vitamin C serum that brightens and evens skin tone with natural botanicals.",
    inStock: true
  },
  {
    id: 35,
    name: "Avila Retinol Night Cream",
    category: "Skincare",
    price: 35000,
    image: "/Avila-3.jpeg",
    description: "Avila Naturalle anti-aging night cream with plant-based retinol for smoother, firmer skin.",
    inStock: true
  },
  {
    id: 36,
    name: "Avila Gentle Foaming Cleanser",
    category: "Skincare",
    price: 15000,
    image: "/Avila-4.jpeg",
    description: "Avila Naturalle mild foaming cleanser with natural extracts that removes impurities without stripping skin.",
    inStock: true
  },
  {
    id: 37,
    name: "Avila Niacinamide Pore Minimizer",
    category: "Skincare",
    price: 20000,
    image: "/Avila-5.jpeg",
    description: "Avila Naturalle 10% niacinamide serum that minimizes pores and controls oil naturally.",
    inStock: true
  },
  {
    id: 38,
    name: "Avila Ceramide Moisturizing Cream",
    category: "Skincare",
    price: 26000,
    image: "/Avila-6.jpeg",
    description: "Avila Naturalle rich moisturizer with plant-derived ceramides to restore skin barrier naturally.",
    inStock: true
  },
  {
    id: 39,
    name: "Avila AHA/BHA Exfoliating Toner",
    category: "Skincare",
    price: 22000,
    image: "/Avila-7.jpeg",
    description: "Avila Naturalle gentle chemical exfoliant with natural fruit acids that reveals smoother, brighter skin.",
    inStock: true
  },
  {
    id: 40,
    name: "Avila Natural SPF 50 Sunscreen",
    category: "Skincare",
    price: 18000,
    image: "/Avila-8.jpeg",
    description: "Avila Naturalle broad-spectrum sunscreen with zinc oxide and natural botanicals, lightweight formula.",
    inStock: true
  },
  {
    id: 41,
    name: "Avila Peptide Eye Cream",
    category: "Skincare",
    price: 30000,
    image: "/Avila-9.jpeg",
    description: "Avila Naturalle anti-aging eye cream with plant peptides and natural extracts to reduce fine lines.",
    inStock: true
  },
  {
    id: 42,
    name: "Avila Willow Bark Cleanser",
    category: "Skincare",
    price: 17000,
    image: "/Avila-10.jpeg",
    description: "Avila Naturalle deep-cleansing face wash with natural willow bark (salicylic acid) for acne-prone skin.",
    inStock: true
  },
  {
    id: 43,
    name: "Avila Pure Rose Hip Oil",
    category: "Skincare",
    price: 21000,
    image: "/Avila-11.jpeg",
    description: "Avila Naturalle 100% pure, cold-pressed rose hip oil for natural skin regeneration and hydration.",
    inStock: true
  },
  {
    id: 44,
    name: "Avila Fruit Enzyme Mask",
    category: "Skincare",
    price: 27000,
    image: "/Avila-12.jpeg",
    description: "Avila Naturalle weekly fruit enzyme mask with papaya and pineapple for gentle exfoliation and renewal.",
    inStock: true
  },
  {
    id: 51,
    name: "Avila Collagen Boosting Serum",
    category: "Skincare",
    price: 32000,
    image: "/Avila-1.jpeg",
    description: "Avila Naturalle collagen-boosting serum with marine peptides for firmer, younger-looking skin.",
    inStock: true
  },
  {
    id: 52,
    name: "Avila Brightening Face Mask",
    category: "Skincare",
    price: 24000,
    image: "/Avila-2.jpeg",
    description: "Avila Naturalle brightening face mask with turmeric and honey for radiant, glowing skin.",
    inStock: true
  },
  {
    id: 53,
    name: "Avila Acne Treatment Gel",
    category: "Skincare",
    price: 19000,
    image: "/Avila-3.jpeg",
    description: "Avila Naturalle acne treatment gel with tea tree oil and niacinamide for clear skin.",
    inStock: true
  },
  {
    id: 54,
    name: "Avila Hydrating Mist",
    category: "Skincare",
    price: 16000,
    image: "/Avila-4.jpeg",
    description: "Avila Naturalle hydrating facial mist with rose water and aloe vera for instant refreshment.",
    inStock: true
  },
  {
    id: 55,
    name: "Avila Anti-Dark Spot Cream",
    category: "Skincare",
    price: 29000,
    image: "/Avila-5.jpeg",
    description: "Avila Naturalle anti-dark spot cream with kojic acid and vitamin E for even skin tone.",
    inStock: true
  },

  // Contact Lenses
  {
    id: 8,
    name: "Contact Lens 1",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL.jpeg",
    description: "Contact Lens Image 1",
    inStock: true
  },
  {
    id: 9,
    name: "Contact Lens 2",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL1.jpeg",
    description: "Contact Lens Image 2",
    inStock: true
  },
  {
    id: 10,
    name: "Contact Lens 3",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL2.jpeg",
    description: "Contact Lens Image 3",
    inStock: true
  },
  {
    id: 11,
    name: "Contact Lens 4",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL3.jpeg",
    description: "Contact Lens Image 4",
    inStock: true
  },
  {
    id: 12,
    name: "Contact Lens 5",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL4.jpeg",
    description: "Contact Lens Image 5",
    inStock: true
  },
  {
    id: 13,
    name: "Contact Lens 6",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL5.jpeg",
    description: "Contact Lens Image 6",
    inStock: true
  },
  {
    id: 14,
    name: "Contact Lens 7",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL6.jpeg",
    description: "Contact Lens Image 7",
    inStock: true
  },
  {
    id: 15,
    name: "Contact Lens 8",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL7.jpeg",
    description: "Contact Lens Image 8",
    inStock: true
  },
  {
    id: 16,
    name: "Contact Lens 9",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL8.jpeg",
    description: "Contact Lens Image 9",
    inStock: true
  },
  {
    id: 17,
    name: "Contact Lens 10",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL9.jpeg",
    description: "Contact Lens Image 10",
    inStock: true
  },
  {
    id: 18,
    name: "Contact Lens 11",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL10.jpeg",
    description: "Contact Lens Image 11",
    inStock: true
  },
  {
    id: 19,
    name: "Contact Lens 12",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL11.jpeg",
    description: "Contact Lens Image 12",
    inStock: true
  },
  {
    id: 20,
    name: "Contact Lens 13",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL12.jpeg",
    description: "Contact Lens Image 13",
    inStock: true
  },
  {
    id: 21,
    name: "Contact Lens 14",
    category: "Contact Lenses",
    price: 32000,
    image: "/ContackL13.jpeg",
    description: "Contact Lens Image 14",
    inStock: true
  },

  // Unique Mini Shoulder Bags
  {
    id: 11,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b3.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 12,
    name: "lovely",
    category: "Bags",
    price: 20500.0,
    image: "/b16.jpg",
    description: "Specialized contact lenses for astigmatism correction.",
    inStock: true
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "Bags",
    price: 20500.0,
    image: "/b.jpg",
    description: "Premium leather crossbody bag with adjustable strap.",
    inStock: true
  },
  {
    id: 5,
    name: "Canvas Tote Bag",
    category: "Bags",
    price: 20500.0,
    image: "/b1.jpg",
    description: "Eco-friendly canvas tote bag perfect for daily use.",
    inStock: true
  },


  {
    id: 13,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b12.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 14,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b13.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 15,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b14.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 16,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b4.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 17,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b5.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 18,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b6.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 19,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b7.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 20,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b8.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 21,
    name: "unique",
    category: "Bags",
    price: 20500.0,
    image: "/b18.jpg",
    description: "Specialized contact lenses for astigmatism correction.",
    inStock: true
  },
 

  {
    id: 23,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b10.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
 
  {
    id: 25,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b15.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 26,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b17.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },
  {
    id: 27,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b19.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
    inStock: true
  },

];

export default products;

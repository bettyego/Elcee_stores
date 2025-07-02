const products = [

  // Skincare - Avila Naturalle Products
  {
    id: 1,
    name: "Avila Hyaluronic Acid Serum",
    category: "Skincare",
    price: 25000,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle intensive hydrating serum with pure hyaluronic acid for plump, dewy skin. 100% natural ingredients.",
    inStock: true
  },
  {
    id: 2,
    name: "Avila Vitamin C Brightening Serum",
    category: "Skincare",
    price: 28000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle powerful vitamin C serum that brightens and evens skin tone with natural botanicals.",
    inStock: true
  },
  {
    id: 35,
    name: "Avila Retinol Night Cream",
    category: "Skincare",
    price: 35000,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle anti-aging night cream with plant-based retinol for smoother, firmer skin.",
    inStock: true
  },
  {
    id: 36,
    name: "Avila Gentle Foaming Cleanser",
    category: "Skincare",
    price: 15000,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle mild foaming cleanser with natural extracts that removes impurities without stripping skin.",
    inStock: true
  },
  {
    id: 37,
    name: "Avila Niacinamide Pore Minimizer",
    category: "Skincare",
    price: 20000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle 10% niacinamide serum that minimizes pores and controls oil naturally.",
    inStock: true
  },
  {
    id: 38,
    name: "Avila Ceramide Moisturizing Cream",
    category: "Skincare",
    price: 26000,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle rich moisturizer with plant-derived ceramides to restore skin barrier naturally.",
    inStock: true
  },
  {
    id: 39,
    name: "Avila AHA/BHA Exfoliating Toner",
    category: "Skincare",
    price: 22000,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle gentle chemical exfoliant with natural fruit acids that reveals smoother, brighter skin.",
    inStock: true
  },
  {
    id: 40,
    name: "Avila Natural SPF 50 Sunscreen",
    category: "Skincare",
    price: 18000,
    image: "https://images.unsplash.com/photo-1564149504-7b9b5b8b7b8b?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle broad-spectrum sunscreen with zinc oxide and natural botanicals, lightweight formula.",
    inStock: true
  },
  {
    id: 41,
    name: "Avila Peptide Eye Cream",
    category: "Skincare",
    price: 30000,
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle anti-aging eye cream with plant peptides and natural extracts to reduce fine lines.",
    inStock: true
  },
  {
    id: 42,
    name: "Avila Willow Bark Cleanser",
    category: "Skincare",
    price: 17000,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle deep-cleansing face wash with natural willow bark (salicylic acid) for acne-prone skin.",
    inStock: true
  },
  {
    id: 43,
    name: "Avila Pure Rose Hip Oil",
    category: "Skincare",
    price: 21000,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle 100% pure, cold-pressed rose hip oil for natural skin regeneration and hydration.",
    inStock: true
  },
  {
    id: 44,
    name: "Avila Fruit Enzyme Mask",
    category: "Skincare",
    price: 27000,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle weekly fruit enzyme mask with papaya and pineapple for gentle exfoliation and renewal.",
    inStock: true
  },
  {
    id: 51,
    name: "Avila Collagen Boosting Serum",
    category: "Skincare",
    price: 32000,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle collagen-boosting serum with marine peptides for firmer, younger-looking skin.",
    inStock: true
  },
  {
    id: 52,
    name: "Avila Brightening Face Mask",
    category: "Skincare",
    price: 24000,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle brightening face mask with turmeric and honey for radiant, glowing skin.",
    inStock: true
  },
  {
    id: 53,
    name: "Avila Acne Treatment Gel",
    category: "Skincare",
    price: 19000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle acne treatment gel with tea tree oil and niacinamide for clear skin.",
    inStock: true
  },
  {
    id: 54,
    name: "Avila Hydrating Mist",
    category: "Skincare",
    price: 16000,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle hydrating facial mist with rose water and aloe vera for instant refreshment.",
    inStock: true
  },
  {
    id: 55,
    name: "Avila Anti-Dark Spot Cream",
    category: "Skincare",
    price: 29000,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center",
    description: "Avila Naturalle anti-dark spot cream with kojic acid and vitamin E for even skin tone.",
    inStock: true
  },

  // Contact Lenses
  {
    id: 8,
    name: "Daily Disposable Contact Lenses",
    category: "Contact Lenses",
    price: 32000,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=center",
    description: "Comfortable daily disposable contact lenses with UV protection and moisture technology.",
    inStock: true
  },
  {
    id: 9,
    name: "Monthly Silicone Hydrogel Lenses",
    category: "Contact Lenses",
    price: 48000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    description: "Long-lasting monthly contact lenses with superior oxygen flow and comfort.",
    inStock: true
  },
  {
    id: 7,
    name: "Blue Colored Contact Lenses",
    category: "Contact Lenses",
    price: 40000,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop&crop=center",
    description: "Natural-looking blue colored contact lenses for a stunning ocean-blue look.",
    inStock: true
  },
  {
    id: 10,
    name: "Toric Lenses for Astigmatism",
    category: "Contact Lenses",
    price: 56000,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=center",
    description: "Specialized toric contact lenses designed for astigmatism correction with stable vision.",
    inStock: true
  },
  {
    id: 30,
    name: "Green Colored Contact Lenses",
    category: "Contact Lenses",
    price: 40000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    description: "Natural-looking green colored contact lenses for beautiful emerald eyes.",
    inStock: true
  },
  {
    id: 34,
    name: "Brown Colored Contact Lenses",
    category: "Contact Lenses",
    price: 40000,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
    description: "Natural-looking brown colored contact lenses for warm, honey-brown eyes.",
    inStock: true
  },
  {
    id: 45,
    name: "Gray Colored Contact Lenses",
    category: "Contact Lenses",
    price: 40000,
    image: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=400&h=400&fit=crop&crop=center",
    description: "Sophisticated gray colored contact lenses for a mysterious, smoky-eye look.",
    inStock: true
  },
  {
    id: 46,
    name: "Weekly Disposable Lenses",
    category: "Contact Lenses",
    price: 37000,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=center",
    description: "Convenient weekly disposable contact lenses perfect for active lifestyles and travel.",
    inStock: true
  },
  {
    id: 47,
    name: "Multifocal Contact Lenses",
    category: "Contact Lenses",
    price: 64000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    description: "Progressive multifocal contact lenses for presbyopia correction with seamless vision zones.",
    inStock: true
  },
  {
    id: 48,
    name: "Violet Colored Contact Lenses",
    category: "Contact Lenses",
    price: 42000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    description: "Striking violet colored contact lenses for a unique, enchanting appearance.",
    inStock: true
  },
  {
    id: 49,
    name: "Extended Wear Monthly Lenses",
    category: "Contact Lenses",
    price: 53000,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=center",
    description: "Extended wear monthly contact lenses approved for safe overnight use up to 30 days.",
    inStock: true
  },
  {
    id: 50,
    name: "Honey Colored Contact Lenses",
    category: "Contact Lenses",
    price: 39000,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
    description: "Warm honey colored contact lenses for a natural golden-amber eye transformation.",
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
    id: 6,
    name: "Designer Handbag",
    category: "Bags",
    price: 20500.0,
    image: "/b2.jpg",
    description: "Elegant designer handbag with gold hardware.",
    inStock: false
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
    id: 6,
    name: "Designer Handbag",
    category: "Bags",
    price: 20500.0,
    image: "/b20.jpg",
    description: "Elegant designer handbag with gold hardware.",
    inStock: false
  },
  {
    id: 22,
    name: "Mini Shoulder Bag ",
    category: "Bags",
    price: 20500.0,
    image: "/b9.jpg",
    description: "Compact shoulder bag perfect for evening outings.",
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

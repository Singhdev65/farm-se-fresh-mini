const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Fresh Apples",
    price: 120,
    unit: "kg",
    category: "Fruits",
    image:
      "https://media.istockphoto.com/id/2161232219/photo/senior-fruit-grower-collecting-apples-in-orchard.jpg?s=1024x1024&w=is&k=20&c=kpMOr8CI2MffJ1p_FyyI2Gw0HdYJsejpT6E3ZgC-glY=",
  },
  {
    name: "Organic Bananas",
    price: 60,
    unit: "kg",
    category: "Fruits",
    image:
      "https://media.istockphoto.com/id/1291262112/photo/banana.jpg?s=1024x1024&w=is&k=20&c=bncXB5lxxXAUESs2o7ere02ravpiacIVLNmvh7yaFoM=",
  },
  {
    name: "Cow Milk",
    price: 50,
    unit: "litre",
    category: "Milk",
    image:
      "https://www.istockphoto.com/photo/male-farmer-pouring-milk-in-canister-at-dairy-farm-gm1331816791-414846518",
  },
  {
    name: "Buffalo Milk",
    price: 60,
    unit: "litre",
    category: "Milk",
    image:
      "https://www.istockphoto.com/photo/indian-female-milking-buffalo-gm108201646-6586494",
  },

  // More Fruits
  {
    name: "Sweet Oranges",
    price: 80,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1571047399553-5244aef086c2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Red Grapes",
    price: 150,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pineapple",
    price: 90,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1562158070-497e03cbd527?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Strawberries",
    price: 200,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Watermelon",
    price: 40,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mango",
    price: 120,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&w=800&q=80",
  },

  // Vegetables
  {
    name: "Carrots",
    price: 50,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1572441710143-5a0a7421da6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tomatoes",
    price: 60,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Potatoes",
    price: 40,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Broccoli",
    price: 90,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1501004318641-147d4eb5b364?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Green Peas",
    price: 70,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1506806732259-58c8e620e03f?auto=format&fit=crop&w=800&q=80",
  },

  // Milk & Dairy
  {
    name: "Goat Milk",
    price: 70,
    unit: "litre",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1526512340740-921c5c9b0d9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cheese",
    price: 300,
    unit: "kg",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Butter",
    price: 250,
    unit: "kg",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Yogurt",
    price: 100,
    unit: "kg",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1590080877777-e7f8f2d11031?auto=format&fit=crop&w=800&q=80",
  },

  // More Fruits
  {
    name: "Cherries",
    price: 250,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Blueberries",
    price: 280,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1505253210343-5b30aa9a64ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pears",
    price: 90,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lemons",
    price: 110,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1506806732259-58c8e620e03f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kiwis",
    price: 140,
    unit: "kg",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1549887534-df95993f5d2f?auto=format&fit=crop&w=800&q=80",
  },

  // Vegetables continued
  {
    name: "Onions",
    price: 30,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1501004318641-646ef5d4e7b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cabbage",
    price: 50,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cauliflower",
    price: 70,
    unit: "kg",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1549887534-60bda8c87902?auto=format&fit=crop&w=800&q=80",
  },

  // More Milk & Dairy
  {
    name: "Cream",
    price: 200,
    unit: "kg",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1590080877777-2eae7d5a7ebf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Paneer",
    price: 250,
    unit: "kg",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ice Cream",
    price: 300,
    unit: "kg",
    category: "Milk",
    image:
      "https://images.unsplash.com/photo-1542614477-c5f36ef0ca77?auto=format&fit=crop&w=800&q=80",
  },

  // Nuts & Seeds
  {
    name: "Almonds",
    price: 600,
    unit: "kg",
    category: "Nuts & Seeds",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Walnuts",
    price: 650,
    unit: "kg",
    category: "Nuts & Seeds",
    image:
      "https://images.unsplash.com/photo-1506806732259-5a1e9a2c6f5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cashews",
    price: 700,
    unit: "kg",
    category: "Nuts & Seeds",
    image:
      "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunflower Seeds",
    price: 400,
    unit: "kg",
    category: "Nuts & Seeds",
    image:
      "https://images.unsplash.com/photo-1532635247-6b485d89f738?auto=format&fit=crop&w=800&q=80",
  },

  // Herbs & Spices
  {
    name: "Fresh Basil",
    price: 150,
    unit: "bunch",
    category: "Herbs & Spices",
    image:
      "https://images.unsplash.com/photo-1501004318641-b88dcb2719a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cilantro",
    price: 130,
    unit: "bunch",
    category: "Herbs & Spices",
    image:
      "https://images.unsplash.com/photo-1562158070-7b707e5461b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ginger Root",
    price: 100,
    unit: "kg",
    category: "Herbs & Spices",
    image:
      "https://images.unsplash.com/photo-1572448862523-6787f2dd80eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Garlic Bulbs",
    price: 90,
    unit: "kg",
    category: "Herbs & Spices",
    image:
      "https://images.unsplash.com/photo-1501004318641-6f4f37790ca0?auto=format&fit=crop&w=800&q=80",
  },

  // Grains & Pulses
  {
    name: "Brown Rice",
    price: 80,
    unit: "kg",
    category: "Grains & Pulses",
    image:
      "https://images.unsplash.com/photo-1506806732259-99d4a1bb74ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Red Lentils",
    price: 100,
    unit: "kg",
    category: "Grains & Pulses",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chickpeas",
    price: 110,
    unit: "kg",
    category: "Grains & Pulses",
    image:
      "https://images.unsplash.com/photo-1532635247-6b485d89f738?auto=format&fit=crop&w=800&q=80",
  },

  // Honey & Jams
  {
    name: "Organic Honey",
    price: 500,
    unit: "kg",
    category: "Honey & Jams",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Strawberry Jam",
    price: 300,
    unit: "jar",
    category: "Honey & Jams",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

seedData();

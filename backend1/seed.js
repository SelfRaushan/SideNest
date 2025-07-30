require('dotenv').config();
const mongoose = require('mongoose');
const ProductCategory = require('./models/ProductCategory');

const products = [
  {
    category: "Blueprints",
    items: [
      {
        title: "Business Startup & Growth Blueprint",
        description: "Step-by-step course for launching and scaling. Includes plan builder, templates, and more.",
        price: "₹2,499",
        image: "/img/blueprint1.jpg",
        previewImages: ["/img/blueprint1-preview1.jpg"],
        link: "product.html"
      },
      {
        title: "Service Blueprint Templates",
        description: "Editable digital templates for mapping customer journeys & internal processes. Instant AI-powered maps.",
        price: "₹899",
        image: "/img/blueprint2.jpg",
        previewImages: ["/img/blueprint2-preview1.jpg"],
        link: "product.html"
      }
    ]
  },
  {
    category: "Marketing Kits",
    items: [
      {
        title: "Social Ad Kit (Plug & Play)",
        description: "A bundle of conversion-focused ad creatives and copywriting formulae for Facebook, IG, LinkedIn.",
        price: "₹1,199",
        image: "/img/marketing1.jpg",
        previewImages: ["/img/marketing1-preview1.jpg"],
        link: "product.html"
      }
    ]
  },
  {
    category: "Branding Kits",
    items: [
      {
        title: "Logo & Brand Identity Pack",
        description: "Get unique logo, color palette, font combos, and a brand guideline PDF. Boost clarity and professionalism.",
        price: "₹3,599",
        image: "/img/branding1.jpg",
        previewImages: ["/img/branding1-preview1.jpg"],
        link: "product.html"
      }
    ]
  },
  {
    category: "Automation Tools",
    items: [
      {
        title: "Workflow Automation Bundle",
        description: "Ready Zapier, Integromat, and CRM workflow recipes with video walkthroughs. Automate your systems fast.",
        price: "₹1,899",
        image: "/img/automation1.jpg",
        previewImages: ["/img/automation1-preview1.jpg"],
        link: "product.html"
      }
    ]
  },
  {
    category: "Social Media Packs",
    items: [
      {
        title: "15 Social Media Post Templates",
        description: "Editable Canva/PSD posts for launches, promotions, and brand engagement. Includes post ideas!",
        price: "₹999",
        image: "/img/sidenest-logo1.png",
        previewImages: ["/img/smpack1-preview1.jpg"],
        link: "product.html"
      }
    ]
  }
];

async function seedDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing product categories (optional)
    await ProductCategory.deleteMany({});
    console.log('Cleared existing product categories');

    // Insert seed data
    await ProductCategory.insertMany(products);
    console.log('Database seeded successfully!');

    // Close DB connection
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seedDB();

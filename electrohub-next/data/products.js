// ElectroHub Products Database
export const products = [
  {
    id: 1,
    title: "Samsung 55-inch QLED 4K Smart TV",
    category: "TVs",
    price: 649.00,
    originalPrice: 799.00,
    rating: 4.8,
    reviewsCount: 128,
    badge: "sale",
    image: "/assets/tv-product.jpg",
    description: "Experience breathtaking visual clarity with the Samsung 55-inch QLED 4K Smart TV. Powered by Quantum Processor Lite for optimized color and deep contrast. Integrated Tizen OS gives you access to Netflix, Prime Video, and YouTube instantly.",
    specs: {
      "Brand": "Samsung",
      "Screen Size": "55 Inches",
      "Display Tech": "QLED 4K UHD",
      "Smart OS": "Tizen Smart TV",
      "Warranty": "1 Year Brand Warranty"
    }
  },
  {
    id: 2,
    title: "Haier Inverter Air Conditioner 1.5 Ton",
    category: "ACs",
    price: 499.00,
    originalPrice: 599.00,
    rating: 4.7,
    reviewsCount: 94,
    badge: "hot",
    image: "/assets/haier-ac.jpg",
    description: "Stay cool and comfortable with the Haier Inverter Air Conditioner. Featuring 1.5 Ton capacity, smart inverter technology for up to 60% energy savings, and self-cleaning function. Perfect for medium to large-sized rooms.",
    specs: {
      "Brand": "Haier",
      "Capacity": "1.5 Ton (18000 BTU)",
      "Inverter": "Yes (DC Inverter)",
      "Energy Rating": "5 Star Rating",
      "Warranty": "10 Years Compressor Warranty"
    }
  },
  {
    id: 3,
    title: "Dawlance Front Load Washing Machine",
    category: "Washing Machines",
    price: 399.00,
    originalPrice: 0,
    rating: 4.5,
    reviewsCount: 52,
    badge: "new",
    image: "/assets/washing-machine.jpg",
    description: "Dawlance Front Load Washing Machine offers powerful stain removal and fabric care. Gentle wave-drum technology protects your delicate clothes while ensuring maximum hygiene. Features 14 unique wash cycles for different fabrics.",
    specs: {
      "Brand": "Dawlance",
      "Capacity": "8.0 Kg",
      "Motor Type": "Inverter Direct Drive",
      "Spin Speed": "1400 RPM",
      "Warranty": "3 Years Motor Warranty"
    }
  },
  {
    id: 4,
    title: "LG InstaView French Door Refrigerator",
    category: "Kitchen",
    price: 1299.00,
    originalPrice: 1499.00,
    rating: 4.9,
    reviewsCount: 38,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    description: "Knock twice and see inside with the LG InstaView Refrigerator. Features Linear Cooling, Door-in-Door compartment, and custom air flow vents to keep food fresher, longer. Includes built-in water and ice dispenser.",
    specs: {
      "Brand": "LG",
      "Capacity": "655 Liters",
      "Compressor": "Smart Inverter Compressor",
      "Cooling Type": "Multi Air Flow",
      "Warranty": "10 Years Compressor Warranty"
    }
  },
  {
    id: 5,
    title: "ASUS Zenbook 14 OLED Laptop",
    category: "Laptops",
    price: 899.00,
    originalPrice: 0,
    rating: 4.8,
    reviewsCount: 86,
    badge: "new",
    image: "/assets/laptop-product.jpg",
    description: "ASUS Zenbook 14 features a gorgeous 14-inch OLED display, AMD Ryzen 7 processor, 16GB RAM, and 512GB SSD. Lightweight, ultra-portable powerhouse for developers and creatives on the go.",
    specs: {
      "Brand": "ASUS",
      "Processor": "AMD Ryzen 7 7730U",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB NVMe SSD",
      "Display": "14-inch 2.8K OLED 90Hz"
    }
  },
  {
    id: 6,
    title: "Dell XPS 15 Creator Edition Laptop",
    category: "Laptops",
    price: 1599.00,
    originalPrice: 1799.00,
    rating: 4.9,
    reviewsCount: 110,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    description: "Supercharge your productivity with the Dell XPS 15. Equipped with Intel Core i9, 32GB RAM, 1TB SSD, and NVIDIA RTX 4060 graphics. Designed specifically for programming, video rendering, and heavy computational tasks.",
    specs: {
      "Brand": "Dell",
      "Processor": "Intel Core i9 13th Gen",
      "RAM": "32GB DDR5",
      "Storage": "1TB PCIe SSD",
      "Graphics Card": "NVIDIA RTX 4060 8GB"
    }
  },
  {
    id: 7,
    title: "Panasonic Inverter Microwave Oven",
    category: "Kitchen",
    price: 189.00,
    originalPrice: 0,
    rating: 4.6,
    reviewsCount: 61,
    badge: "",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    description: "Enjoy quick and even cooking with Panasonic Inverter technology. Preserves texture and flavor of your meals while offering 12 auto-cook presets. Sleek mirror finish perfectly complements modern kitchens.",
    specs: {
      "Brand": "Panasonic",
      "Capacity": "27 Liters",
      "Power Output": "1000W Inverter Power",
      "Control": "Touch Control Panel",
      "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: 8,
    title: "Philips Premium Air Fryer XXL",
    category: "Kitchen",
    price: 249.00,
    originalPrice: 0,
    rating: 4.8,
    reviewsCount: 204,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&w=600&q=80",
    description: "Cook healthy meals with up to 90% less fat. The Philips Air Fryer XXL features Twin TurboStar technology to remove excess fat and cook food evenly. Large capacity fits a whole chicken easily.",
    specs: {
      "Brand": "Philips",
      "Capacity": "7.3 Liters / 1.4 Kg",
      "Technology": "Twin TurboStar Rapid Air",
      "Dishwasher Safe": "Yes (Removable Parts)",
      "Warranty": "2 Years Global Warranty"
    }
  },
  {
    id: 9,
    title: "Sony Noise Cancelling Headphones WH-1000XM5",
    category: "Accessories",
    price: 349.00,
    originalPrice: 0,
    rating: 4.9,
    reviewsCount: 412,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Industry-leading noise cancelling wireless headphones. Equipped with Auto NC Optimizer, 30 hours battery life, and crystal-clear hands-free calling. Features Multipoint connection to switch between devices seamlessly.",
    specs: {
      "Brand": "Sony",
      "Battery Life": "30 Hours (ANC On)",
      "Driver Unit": "30mm Dome Type",
      "Connectivity": "Bluetooth 5.2 & Wired",
      "Weight": "250 Grams"
    }
  },
  {
    id: 10,
    title: "Logitech MX Master 3S Wireless Mouse",
    category: "Accessories",
    price: 99.00,
    originalPrice: 0,
    rating: 4.8,
    reviewsCount: 510,
    badge: "new",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    description: "Logitech MX Master 3S is an iconic mouse remastered. Features 8K DPI tracking on glass, ultra-quiet clicks, and MagSpeed electromagnetic scroll wheel for high-precision workflows.",
    specs: {
      "Brand": "Logitech",
      "Sensor": "Darkfield high precision (8000 DPI)",
      "Battery": "Rechargeable Li-Po (Up to 70 days)",
      "Connectivity": "Logi Bolt & Bluetooth",
      "Scroll Wheel": "MagSpeed Smartwheel"
    }
  },
  {
    id: 11,
    title: "Anker PowerCore 24K Power Bank",
    category: "Accessories",
    price: 149.00,
    originalPrice: 0,
    rating: 4.7,
    reviewsCount: 185,
    badge: "",
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-high capacity power bank with 140W fast charging. Features smart digital display showing output power, input power, and remaining recharge time. Perfect for laptops, tablets, and phones.",
    specs: {
      "Brand": "Anker",
      "Capacity": "24,000 mAh",
      "Max Output": "140W Power Delivery 3.1",
      "Ports": "2 USB-C, 1 USB-A",
      "Warranty": "18 Months Warranty"
    }
  },
  {
    id: 12,
    title: "Kenwood Multi-Food Processor",
    category: "Kitchen",
    price: 120.00,
    originalPrice: 150.00,
    rating: 4.4,
    reviewsCount: 75,
    badge: "sale",
    image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&w=600&q=80",
    description: "Kenwood Multi-Food Processor is your ultimate kitchen assistant. Includes attachments for chopping, slicing, grating, and blending, powered by an 800W motor. Features 2.1 Liter capacity bowl.",
    specs: {
      "Brand": "Kenwood",
      "Power": "800 Watts",
      "Capacity": "2.1 Liters Bowl",
      "Speeds": "2 Speeds + Pulse",
      "Warranty": "2 Years Motor Warranty"
    }
  }
];

export const slides = [
  {
    id: 1,
    tag: "SUMMER DEALS",
    tagClass: "highlight-tag",
    title: "Chill Out with Smart Inverters",
    description: "Get up to <strong class='text-accent'>30% OFF</strong> on premium Haier & Dawlance 1.5 Ton Energy Saver Inverter ACs. Cool air, lower bills.",
    btnText: "Shop Now",
    targetCategory: "ACs",
    price: "$499.00",
    priceLabel: "Starting from",
    image: "/assets/ac-banner.jpg",
    imageAlt: "Inverter AC Premium Promo",
    bg: "linear-gradient(135deg, #0F172A 0%, #1e3a5f 100%)"
  },
  {
    id: 2,
    tag: "ULTRA HD CINEMA",
    tagClass: "",
    title: "Upgrade to Stunning 4K Vision",
    description: "Samsung and Sony 55-inch Ultra HD Smart TVs with immersive Dolby Digital Sound now with <strong class='text-accent'>Free Installation</strong>.",
    btnText: "Explore TVs",
    targetCategory: "TVs",
    price: "$649.00",
    priceLabel: "Only",
    image: "/assets/tv-banner.jpg",
    imageAlt: "4K Smart TV Promo",
    bg: "linear-gradient(135deg, #050C1A 0%, #1F2D44 100%)"
  },
  {
    id: 3,
    tag: "NEW IN STOCK",
    tagClass: "hot-tag",
    title: "Next-Gen Speed for Creators",
    description: "Explore premium laptops featuring Intel Core i7 & M3 Pro processors. Elevate your programming and editing workflow.",
    btnText: "View Laptops",
    targetCategory: "Laptops",
    price: "$899.00",
    priceLabel: "From",
    image: "/assets/laptop-banner.jpg",
    imageAlt: "Productive Laptops Promo",
    bg: "linear-gradient(135deg, #1A1F2C 0%, #343E56 100%)"
  }
];

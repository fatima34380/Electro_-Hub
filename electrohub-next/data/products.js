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
  },

  // --- MOBILES ---
  {
    id: 13,
    title: "Redmi 13 5G Dual SIM (Midnight Black)",
    category: "Mobiles",
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.8,
    reviewsCount: 420,
    badge: "hot",
    image: "/assets/redmi-phone.jpg",
    description: "Redmi 13 features a sleek Midnight Black finish, 108MP pro-grade main camera, 6.79-inch FHD+ 90Hz display, and Snapdragon 4 Gen 2 processor with 5000mAh battery & 33W fast charging.",
    specs: {
      "Brand": "Xiaomi Redmi",
      "Model": "Redmi 13 5G",
      "RAM & Storage": "8GB + 256GB",
      "Display": "6.79-inch FHD+ 90Hz",
      "Camera": "108MP Dual Camera",
      "Battery": "5000 mAh (33W Fast Charge)"
    }
  },
  {
    id: 14,
    title: "Samsung Galaxy A15 5G (Ice Blue)",
    category: "Mobiles",
    price: 229.00,
    originalPrice: 279.00,
    rating: 4.9,
    reviewsCount: 580,
    badge: "new",
    image: "/assets/samsung-phone.jpg",
    description: "Samsung Galaxy A15 5G features a gorgeous 6.5-inch Super AMOLED 90Hz display, 50MP triple camera system, Octa-Core processor, and 5000mAh battery with 25W Super Fast Charging.",
    specs: {
      "Brand": "Samsung",
      "Model": "Galaxy A15 5G",
      "RAM & Storage": "8GB + 256GB",
      "Display": "6.5-inch Super AMOLED 90Hz",
      "Camera": "50MP + 5MP + 2MP Triple Camera",
      "Battery": "5000 mAh"
    }
  },
  {
    id: 15,
    title: "OnePlus Nord CE4 5G (Celadon Marble Green)",
    category: "Mobiles",
    price: 349.00,
    originalPrice: 399.00,
    rating: 4.9,
    reviewsCount: 390,
    badge: "sale",
    image: "/assets/oneplus-phone.jpg",
    description: "OnePlus Nord CE4 5G features Snapdragon 7 Gen 3, 100W SUPERVOOC fast charging (1-100% in 28 mins), 50MP Sony LYT-600 OIS camera, and 120Hz Fluid AMOLED display.",
    specs: {
      "Brand": "OnePlus",
      "Model": "Nord CE4 5G",
      "RAM & Storage": "12GB + 256GB",
      "Processor": "Snapdragon 7 Gen 3",
      "Camera": "50MP Sony OIS + 8MP Ultra Wide",
      "Charging": "100W SUPERVOOC"
    }
  },

  // --- AUDIO ---
  {
    id: 16,
    title: "Audionic Airbuds Pro TWS Wireless Earbuds",
    category: "Audio",
    price: 49.00,
    originalPrice: 69.00,
    rating: 4.8,
    reviewsCount: 650,
    badge: "hot",
    image: "/assets/audionic-earbuds.jpg",
    description: "Audionic Airbuds Pro offer crystal-clear HD sound, deep bass response, touch controls, and up to 30 hours of battery life with wireless charging case. IPX5 sweat & water resistant.",
    specs: {
      "Brand": "Audionic",
      "Model": "Airbuds Pro TWS",
      "Battery": "6Hr + 24Hr (Case)",
      "Charging": "Type-C Fast Charge",
      "Connectivity": "Bluetooth 5.3",
      "Water Resistance": "IPX5 Sweatproof"
    }
  },
  {
    id: 17,
    title: "Professional Studio Condenser Microphone Kit",
    category: "Audio",
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.9,
    reviewsCount: 380,
    badge: "new",
    image: "/assets/studio-mic.jpg",
    description: "High-sensitivity cardioid studio microphone with boom arm stand, shock mount, and pop filter. Ideal for podcasting, studio vocal recording, gaming streaming, and YouTube content creation.",
    specs: {
      "Brand": "AudioPro",
      "Type": "Studio Condenser Cardioid",
      "Frequency Response": "20Hz – 20kHz",
      "Connector": "XLR / USB-C Interface",
      "Includes": "Boom Arm + Shock Mount + Pop Filter",
      "Noise Reduction": "Active Noise Isolation"
    }
  },
  {
    id: 18,
    title: "Premium Wireless Noise-Cancelling Headphones",
    category: "Audio",
    price: 189.00,
    originalPrice: 229.00,
    rating: 4.9,
    reviewsCount: 890,
    badge: "hot",
    image: "/assets/studio-headphones.jpg",
    description: "Ultra-comfortable over-ear wireless headphones with active noise cancellation, plush memory foam earcups, 40mm HD drivers, and 45 hours of continuous playback.",
    specs: {
      "Brand": "ElectroSound",
      "Type": "Over-Ear Wireless ANC",
      "Battery Life": "45 Hours (ANC On)",
      "Drivers": "40mm Neodymium",
      "Connectivity": "Bluetooth 5.2 & 3.5mm Aux",
      "Microphone": "Dual Beamforming Mics"
    }
  },
  {
    id: 19,
    title: "Edifier Active Desktop Studio Speakers Pair",
    category: "Audio",
    price: 159.00,
    originalPrice: 199.00,
    rating: 4.8,
    reviewsCount: 410,
    badge: "sale",
    image: "/assets/edifier-speakers-copper.jpg",
    description: "Edifier powered bookshelf studio speakers featuring 42W RMS output, dual RCA inputs, bass/treble acoustic control knobs, and silk dome tweeters for room-filling audiophile sound.",
    specs: {
      "Brand": "Edifier",
      "Power Output": "42W RMS (21W + 21W)",
      "Driver Units": "4-inch Bass + 13mm Tweeter",
      "Inputs": "Dual RCA & 3.5mm Aux",
      "Controls": "Volume, Bass, Treble Dial",
      "Cabinet": "100% MDF Wooden Enclosure"
    }
  },
  {
    id: 20,
    title: "Vintage Retro Bluetooth Wooden Radio Speaker",
    category: "Audio",
    price: 89.00,
    originalPrice: 109.00,
    rating: 4.7,
    reviewsCount: 230,
    badge: "new",
    image: "/assets/vintage-radio.jpg",
    description: "Classic retro wooden AM/FM radio with modern Bluetooth 5.0 wireless speaker connectivity, warm acoustic tuning, brass rotary control dials, and 12-hour rechargeable battery.",
    specs: {
      "Brand": "RetroSound",
      "Design": "Handcrafted Walnut Wood Enclosure",
      "Functions": "FM/AM Radio + Bluetooth 5.0",
      "Battery": "2200 mAh (12 Hours Playback)",
      "Controls": "Analog Rotary Dials",
      "Speaker": "10W Full Range Driver"
    }
  },

  // --- GAMING ---
  {
    id: 21,
    title: "High-Speed Asphalt Car Racing Game",
    category: "Gaming",
    price: 49.00,
    originalPrice: 59.00,
    rating: 4.9,
    reviewsCount: 820,
    badge: "hot",
    image: "/assets/car-racing-game.jpg",
    description: "Experience extreme high-speed supercar racing with realistic physics, customizable cars, dynamic weather effects, and multiplayer street racing circuits.",
    specs: {
      "Genre": "Arcade & Racing",
      "Platform": "PC / Console / Mobile",
      "Graphics": "Ultra HD 4K 60FPS",
      "Modes": "Single Player & Online Multiplayer",
      "Age Rating": "Everyone (E)"
    }
  },
  {
    id: 22,
    title: "Ultimate All-Star Sports Games Collection",
    category: "Gaming",
    price: 39.00,
    originalPrice: 49.00,
    rating: 4.8,
    reviewsCount: 450,
    badge: "sale",
    image: "/assets/sports-equipment.jpg",
    description: "The complete sports game bundle featuring Football, Basketball, Tennis, Boxing, Golf, and Baseball with real-time motion controls and multiplayer tournaments.",
    specs: {
      "Genre": "Sports & Simulation",
      "Games Included": "Football, Basketball, Tennis, Boxing, Golf",
      "Multiplayer": "Up to 4 Players Co-Op",
      "Controller Support": "Motion Controls & Gamepad"
    }
  },
  {
    id: 23,
    title: "Brain Teaser Puzzles & Maze Challenge Game",
    category: "Gaming",
    price: 29.00,
    originalPrice: 35.00,
    rating: 4.7,
    reviewsCount: 310,
    badge: "new",
    image: "/assets/brain-puzzle-game.png",
    description: "Test your IQ and logic with over 500+ intricate maze puzzles, logic riddles, and brain-teaser challenges designed for all ages.",
    specs: {
      "Genre": "Puzzle & Logic",
      "Levels": "500+ Unique Maze Levels",
      "Difficulty": "Easy to Expert",
      "Features": "Daily Challenges & Leaderboards"
    }
  },
  {
    id: 24,
    title: "Top Mobile Strategy & Kingdom War Games",
    category: "Gaming",
    price: 59.00,
    originalPrice: 69.00,
    rating: 4.9,
    reviewsCount: 920,
    badge: "hot",
    image: "/assets/mobile-strategy-game.jpg",
    description: "Build your empire, command hero armies, and conquer enemy kingdoms in this top-rated real-time mobile strategy battle game.",
    specs: {
      "Genre": "Real-Time Strategy (RTS)",
      "Platform": "Android / iOS / PC",
      "Features": "Guild Wars & PvP Battles",
      "Graphics": "HD 3D Battle Animations"
    }
  },
  {
    "Weight": "< 60g",
    "Battery": "95 Hours",
    "Connectivity": "LIGHTSPEED Wireless",
    "Polling Rate": "2000Hz"
  },


  // --- CAMERAS ---
  {
    id: 25,
    title: "Sony ZV-E10 Mirrorless Vlog Camera",
    category: "Cameras",
    price: 699.00,
    originalPrice: 799.00,
    rating: 4.8,
    reviewsCount: 312,
    badge: "sale",
    image: "/assets/camera-product.jpg",
    description: "Sony ZV-E10 is a compact mirrorless camera ideal for vloggers and content creators. APS-C sensor, interchangeable lens support, 4K video, real-time eye-tracking AF, and a fully rotating touchscreen.",
    specs: {
      "Brand": "Sony",
      "Sensor": "24.2MP APS-C CMOS",
      "Video": "4K 30fps / 1080p 120fps",
      "AF": "Real-Time Eye Tracking AF",
      "Display": "3-inch Rotating Touchscreen",
      "Mount": "Sony E-Mount"
    }
  },
  {
    id: 26,
    title: "GoPro HERO12 Black Action Camera",
    category: "Cameras",
    price: 349.00,
    originalPrice: 399.00,
    rating: 4.7,
    reviewsCount: 421,
    badge: "hot",
    image: "/assets/camera-product.jpg",
    description: "GoPro HERO12 Black shoots stunning 5.3K video, has 10-bit color, HyperSmooth 6.0 stabilization, 27MP photos, and is waterproof to 10m. Perfect for adventure, sports, and travel content.",
    specs: {
      "Brand": "GoPro",
      "Video": "5.3K60 / 4K120 / 2.7K240",
      "Photos": "27MP RAW",
      "Stabilization": "HyperSmooth 6.0",
      "Waterproof": "10 Meters",
      "Battery": "Enduro Battery Included"
    }
  },

  // --- MONITORS ---
  {
    id: 27,
    title: "LG 27GP850-B 27\" IPS Gaming Monitor",
    category: "Monitors",
    price: 349.00,
    originalPrice: 399.00,
    rating: 4.8,
    reviewsCount: 289,
    badge: "sale",
    image: "/assets/monitor-product.jpg",
    description: "LG UltraGear 27\" IPS gaming monitor with 165Hz refresh rate, 1ms response time, NVIDIA G-Sync Compatible, and HDR400. Stunning QHD resolution for competitive gaming and content creation.",
    specs: {
      "Brand": "LG",
      "Panel": "27-inch IPS QHD",
      "Resolution": "2560 x 1440",
      "Refresh Rate": "165Hz",
      "Response Time": "1ms (GtG)",
      "HDR": "VESA DisplayHDR 400"
    }
  },
  {
    id: 28,
    title: "Samsung 32\" Odyssey G7 Curved Monitor",
    category: "Monitors",
    price: 699.00,
    originalPrice: 799.00,
    rating: 4.9,
    reviewsCount: 198,
    badge: "hot",
    image: "/assets/monitor-product.jpg",
    description: "Samsung Odyssey G7 features a 1000R curved QLED panel at 240Hz, 1ms response, G-Sync & FreeSync Premium Pro, and HDR600. The ultimate immersive gaming experience for serious gamers.",
    specs: {
      "Brand": "Samsung",
      "Panel": "32-inch VA QLED Curved",
      "HDR": "VESA DisplayHDR 600"
    }
  },

  // --- KITCHEN APPLIANCES & TOOLS ---
  {
    id: 29,
    title: "Enviro Smart Digital Microwave Oven",
    category: "Kitchen",
    price: 129.00,
    originalPrice: 159.00,
    rating: 4.8,
    reviewsCount: 175,
    badge: "sale",
    image: "/assets/kitchen-microwave.jpg",
    description: "Enviro 20L Smart Digital Microwave Oven featuring multiple auto-cook preset menus, defrost function, precision rotary controls, and energy-efficient heating element.",
    specs: {
      "Brand": "Enviro",
      "Capacity": "20 Liters",
      "Power": "800W Output",
      "Functions": "Defrost, Reheat, Express Cook",
      "Control": "Dual Rotary Knobs"
    }
  },
  {
    id: 30,
    title: "Artisan Wooden Cutting Board & Spice Prep Set",
    category: "Kitchen",
    price: 39.00,
    originalPrice: 49.00,
    rating: 4.9,
    reviewsCount: 210,
    badge: "hot",
    image: "/assets/kitchen-cuttingboard.jpg",
    description: "Handcrafted natural hardwood round chopping board set with wooden spoon, spice bowls, and garlic prep accessories. Durable, knife-friendly surface for professional meal prep.",
    specs: {
      "Material": "Natural Solid Hardwood",
      "Diameter": "14 Inches",
      "Accessories": "Wooden Spoon & Spice Bowls Included",
      "Finish": "Food-Grade Organic Oil Finish"
    }
  },
  {
    id: 31,
    title: "Ariete Vintage Professional Glass Blender",
    category: "Kitchen",
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.7,
    reviewsCount: 142,
    badge: "new",
    image: "/assets/kitchen-blender.jpg",
    description: "Ariete high-performance countertop blender with heavy-duty 1.5L glass jar, 4 stainless steel crushed-ice blades, multiple speed settings, and retro design.",
    specs: {
      "Brand": "Ariete",
      "Jar Capacity": "1.5L Thermal Glass",
      "Power": "1000W Motor",
      "Blades": "4-Wing Stainless Steel",
      "Speeds": "4 Speeds + Pulse"
    }
  },
  {
    id: 32,
    title: "Stainless Steel Fast-Boil Electric Kettle",
    category: "Kitchen",
    price: 34.00,
    originalPrice: 45.00,
    rating: 4.8,
    reviewsCount: 390,
    badge: "sale",
    image: "/assets/kitchen-kettle.jpg",
    description: "Fast-boiling 1.8L cordless electric kettle made of premium food-grade stainless steel with auto shut-off, boil-dry protection, and 360-degree swivel base.",
    specs: {
      "Capacity": "1.8 Liters",
      "Power": "1500W Fast Boil",
      "Material": "304 Food-Grade Stainless Steel",
      "Safety": "Auto Shut-Off & Boil-Dry Protection"
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

/* ==========================================================================
   ElectroHub Interactive Application Logic
   ========================================================================== */

// --- 1. DUMMY PRODUCTS DATABASE ---
const products = [
  {
    id: 1,
    title: "Samsung 55-inch QLED 4K Smart TV",
    category: "TVs",
    price: 649.00,
    originalPrice: 799.00,
    rating: 4.8,
    reviewsCount: 128,
    badge: "sale",
    image: "assets/tv-product.jpg",
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
    image: "assets/haier-ac.jpg",
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
    image: "assets/washing-machine.jpg",
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
    title: "Enviro Smart Digital Microwave Oven",
    category: "Kitchen",
    price: 129.00,
    originalPrice: 159.00,
    rating: 4.8,
    reviewsCount: 175,
    badge: "sale",
    image: "assets/kitchen-microwave.jpg",
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
    id: 5,
    title: "ASUS Zenbook 14 OLED Laptop",
    category: "Laptops",
    price: 899.00,
    originalPrice: 0,
    rating: 4.8,
    reviewsCount: 86,
    badge: "new",
    image: "assets/laptop-product.jpg",
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
    title: "Artisan Wooden Cutting Board & Spice Prep Set",
    category: "Kitchen",
    price: 39.00,
    originalPrice: 49.00,
    rating: 4.9,
    reviewsCount: 210,
    badge: "hot",
    image: "assets/kitchen-cuttingboard.jpg",
    description: "Handcrafted natural hardwood round chopping board set with wooden spoon, spice bowls, and garlic prep accessories. Durable, knife-friendly surface for professional meal prep.",
    specs: {
      "Material": "Natural Solid Hardwood",
      "Diameter": "14 Inches",
      "Accessories": "Wooden Spoon & Spice Bowls Included",
      "Finish": "Food-Grade Organic Oil Finish"
    }
  },
  {
    id: 8,
    title: "Ariete Vintage Professional Glass Blender",
    category: "Kitchen",
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.7,
    reviewsCount: 142,
    badge: "new",
    image: "assets/kitchen-blender.jpg",
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
    id: 9,
    title: "Universal Hard Shell Headphone Carrying Case Bag",
    category: "Accessories",
    price: 19.00,
    originalPrice: 29.00,
    rating: 4.9,
    reviewsCount: 310,
    badge: "hot",
    image: "assets/accessory-headphonecase.jpg",
    description: "Universal hard-shell protective travel case for over-ear headphones. Features durable water-resistant exterior, soft velvet interior lining, inner mesh pocket for cables & adapter.",
    specs: {
      "Type": "Hard Shell Carrying Case",
      "Compatibility": "Universal (Sony, Bose, JBL, Beats)",
      "Interior": "Soft Shockproof Velvet",
      "Features": "Zipper Close & Cable Mesh Pocket"
    }
  },
  {
    id: 10,
    title: "Premium Pastel Silicone Protective iPhone Cases",
    category: "Accessories",
    price: 15.00,
    originalPrice: 25.00,
    rating: 4.8,
    reviewsCount: 450,
    badge: "sale",
    image: "assets/accessory-cases.jpg",
    description: "Soft liquid silicone protective cases for iPhone series. Features anti-fingerprint matte texture, camera lens protection bump, micro-fiber inner lining, and vibrant pastel color options.",
    specs: {
      "Material": "Liquid Silicone & Microfiber",
      "Compatibility": "iPhone 13 / 14 / 15 / 16 Series",
      "Protection": "Drop Proof & Camera Bump Shield",
      "Colors": "Multi-Color Pastel Pack"
    }
  },
  {
    id: 11,
    title: "ICON MagSafe 22.5W Magnetic Power Bank with Stand",
    category: "Accessories",
    price: 49.00,
    originalPrice: 69.00,
    rating: 4.9,
    reviewsCount: 280,
    badge: "new",
    image: "assets/accessory-powerbank.jpg",
    description: "ICON IPW-102 MagSafe wireless magnetic fast-charging power bank. Features 22.5W fast output, built-in folding kickstand, dual integrated charging cables, and multi-color options.",
    specs: {
      "Brand": "ICON",
      "Capacity": "10,000 mAh",
      "Wireless Output": "22.5W Fast MagSafe",
      "Features": "Built-in Foldable Stand & Dual Cables",
      "Safety": "Over-heat & Short Circuit Shield"
    }
  },
  {
    id: 12,
    title: "Stainless Steel Fast-Boil Electric Kettle",
    category: "Kitchen",
    price: 34.00,
    originalPrice: 45.00,
    rating: 4.8,
    reviewsCount: 390,
    badge: "sale",
    image: "assets/kitchen-kettle.jpg",
    description: "Fast-boiling 1.8L cordless electric kettle made of premium food-grade stainless steel with auto shut-off, boil-dry protection, and 360-degree swivel base.",
    specs: {
      "Capacity": "1.8 Liters",
      "Power": "1500W Fast Boil",
      "Material": "304 Food-Grade Stainless Steel",
      "Safety": "Auto Shut-Off & Boil-Dry Protection"
    }
  },
];

// --- 2. GLOBAL STATE ---
let cart = JSON.parse(localStorage.getItem('electrohub_cart')) || [];
let activeCategory = 'All';
let searchQuery = '';
let currentSort = 'default';
let activeSlide = 0;
let carouselTimer = null;

// --- 3. DOM ELEMENT CACHING ---
// Layout Navigation elements
const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMobileDrawerBtn = document.getElementById('close-mobile-drawer');
const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
const mobileDrawer = document.getElementById('mobile-navigation-drawer');

// Search elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Cart Drawer elements
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartItemsBody = document.getElementById('cart-items-body');
const cartBadgeCount = document.getElementById('cart-badge-count');
const cartDrawerCount = document.getElementById('cart-drawer-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartGrandTotal = document.getElementById('cart-grand-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutToast = document.getElementById('checkout-toast');

// Product Detail Modal elements
const productModal = document.getElementById('product-detail-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalContentSplit = document.getElementById('modal-content-split');

// Grid Catalog elements
const productGrid = document.getElementById('product-grid');
const filterDisplayTitle = document.getElementById('filter-display-title');
const catalogItemsCount = document.getElementById('catalog-items-count');
const sortSelect = document.getElementById('sort-select');
const categoryPillsContainer = document.getElementById('category-pills');
const quickCategoryCards = document.querySelectorAll('.category-bubble-card');
const noProductsMsg = document.getElementById('no-products-msg');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

// Newsletter
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');

// Carousel
const slides = document.querySelectorAll('.carousel-slide');
const prevSlideBtn = document.getElementById('carousel-prev');
const nextSlideBtn = document.getElementById('carousel-next');
const dotsContainer = document.getElementById('carousel-dots-container');

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartBadge();
  setupCarousel();
  setupEventListeners();
});

// --- 5. HERO CAROUSEL IMPLEMENTATION ---
function setupCarousel() {
  if (slides.length === 0) return;
  
  // Clear any existing dots
  dotsContainer.innerHTML = '';
  
  // Create dots dynamically based on number of slides
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (idx === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetCarouselTimer();
    });
    dotsContainer.appendChild(dot);
  });

  startCarouselTimer();
}

function startCarouselTimer() {
  carouselTimer = setInterval(() => {
    nextSlide();
  }, 5000); // Transitions slide every 5 seconds
}

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  startCarouselTimer();
}

function updateSlidesUI() {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === activeSlide) slide.classList.add('active');
  });

  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  dots.forEach((dot, idx) => {
    dot.classList.remove('active');
    if (idx === activeSlide) dot.classList.add('active');
  });
}

function nextSlide() {
  activeSlide = (activeSlide + 1) % slides.length;
  updateSlidesUI();
}

function prevSlide() {
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  updateSlidesUI();
}

function goToSlide(idx) {
  activeSlide = idx;
  updateSlidesUI();
}

// --- 6. CATALOG FILTER & SORT LOGIC ---
function renderCatalog() {
  let filteredProducts = [...products];

  // 1. Filter by Active Category
  if (activeCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
  }

  // 2. Filter by Search Query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filteredProducts = filteredProducts.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // 3. Apply Sorting
  if (currentSort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else {
    // default/popularity: sort by original ID
    filteredProducts.sort((a, b) => a.id - b.id);
  }

  // 4. Update UI Header Info
  filterDisplayTitle.textContent = activeCategory === 'All' ? 'All Products' : activeCategory;
  catalogItemsCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'item' : 'items'} found`;

  // 5. Check if products exists
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = '';
    noProductsMsg.classList.remove('hidden');
  } else {
    noProductsMsg.classList.add('hidden');
    renderGrid(filteredProducts);
  }

  // Synchronize category selection active styles across all views
  syncCategoryClasses();
}

function renderGrid(productsList) {
  productGrid.innerHTML = productsList.map(product => {
    const originalPriceHTML = product.originalPrice > 0 
      ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` 
      : '';
    
    const badgeHTML = product.badge 
      ? `<span class="card-badge ${product.badge}">${product.badge}</span>` 
      : '';

    return `
      <article class="product-card" data-id="${product.id}">
        ${badgeHTML}
        <div class="card-image-wrapper" onclick="openProductModal(${product.id})">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-category">${product.category}</span>
          <h3 class="card-title" onclick="openProductModal(${product.id})">${product.title}</h3>
          
          <div class="card-rating-row">
            <div class="star-rating">
              ${generateStarsHTML(product.rating)}
            </div>
            <span class="review-count">(${product.reviewsCount})</span>
          </div>

          <div class="card-price-row">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${originalPriceHTML}
          </div>

          <div class="card-action-row">
            <button class="btn btn-add-cart" onclick="handleAddToCart(${product.id}, 1, this)">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Generate stars visual helper
function generateStarsHTML(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      // Full Star
      stars += '★';
    } else if (i === fullStars + 1 && halfStar) {
      // Half star symbol representation (visually stars are styled, simplified to solid star or half)
      stars += '★';
    } else {
      // Empty Star
      stars += '☆';
    }
  }
  return stars;
}

// Synchronize all filters active classes
function syncCategoryClasses() {
  // Sync desktop navbar links
  desktopNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.category === activeCategory) link.classList.add('active');
  });

  // Sync mobile nav links
  mobileNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.category === activeCategory) link.classList.add('active');
  });

  // Sync category tag pills
  const pills = categoryPillsContainer.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    pill.classList.remove('active');
    if (pill.dataset.category === activeCategory) pill.classList.add('active');
  });

  // Sync category quick selector cards
  quickCategoryCards.forEach(card => {
    card.classList.remove('active');
    if (card.dataset.category === activeCategory) card.classList.add('active');
  });
}

function handleCategoryChange(cat) {
  activeCategory = cat;
  renderCatalog();
}

// --- 7. Persistent SHOPPING CART DRAWER SYSTEM ---
function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadgeCount.textContent = totalCount;
  cartDrawerCount.textContent = totalCount;
  
  // Scale animation for badge count updates
  cartBadgeCount.style.animation = 'none';
  cartBadgeCount.offsetHeight; /* trigger reflow */
  cartBadgeCount.style.animation = null;
}

function handleAddToCart(productId, quantity = 1, buttonElement = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.product.id === productId);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawerItems();

  // Visual success feedback on card button
  if (buttonElement) {
    const originalText = buttonElement.querySelector('span').textContent;
    buttonElement.querySelector('span').textContent = "Added!";
    buttonElement.style.background = "var(--success)";
    buttonElement.style.color = "var(--white)";
    buttonElement.style.borderColor = "var(--success)";
    
    setTimeout(() => {
      buttonElement.querySelector('span').textContent = originalText;
      buttonElement.style.background = "";
      buttonElement.style.color = "";
      buttonElement.style.borderColor = "";
    }, 1200);
  }

  // Auto-open cart drawer on desktop
  if (window.innerWidth > 768) {
    openCartDrawer();
  }
}

function saveCart() {
  localStorage.setItem('electrohub_cart', JSON.stringify(cart));
}

function renderCartDrawerItems() {
  if (cart.length === 0) {
    cartItemsBody.innerHTML = `
      <div class="empty-cart-state">
        <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" stroke-width="1.5" fill="none">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h3>Your Cart is Empty</h3>
        <p>Explore our latest gadgets and add appliances to get started.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Start Shopping</button>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  let cartSubtotalValue = 0;

  cartItemsBody.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.product.price * item.quantity;
    cartSubtotalValue += itemTotal;

    return `
      <div class="cart-item-row" data-id="${item.product.id}">
        <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.product.title}</h4>
          <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <div class="qty-selectors">
              <button class="qty-btn" onclick="adjustCartQty(${item.product.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="adjustCartQty(${item.product.id}, 1)">+</button>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem(${item.product.id})" aria-label="Remove item">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateCartTotals(cartSubtotalValue);
}

function updateCartTotals(subtotal) {
  const taxAmount = subtotal * 0.05; // 5% Estimated Tax
  const grandTotalValue = subtotal + taxAmount;

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTax.textContent = `$${taxAmount.toFixed(2)}`;
  cartGrandTotal.textContent = `$${grandTotalValue.toFixed(2)}`;
}

function adjustCartQty(productId, amount) {
  const idx = cart.findIndex(item => item.product.id === productId);
  if (idx === -1) return;

  cart[idx].quantity += amount;
  
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawerItems();
}

function removeCartItem(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawerItems();
}

function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartDrawerOverlay.classList.add('active');
  renderCartDrawerItems();
  document.body.style.overflow = 'hidden'; // Prevents background scroll
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// --- 8. PRODUCT DETAIL MODAL IMPLEMENTATION ---
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const originalPriceHTML = product.originalPrice > 0 
    ? `<span class="modal-original-price">$${product.originalPrice.toFixed(2)}</span>` 
    : '';

  // Generate specification rows HTML
  const specRowsHTML = Object.entries(product.specs).map(([label, val]) => `
    <div class="spec-item">
      <span class="spec-label">${label}</span>
      <span class="spec-value">${val}</span>
    </div>
  `).join('');

  modalContentSplit.innerHTML = `
    <div class="modal-left-img">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="modal-right-info">
      <span class="modal-category">${product.category}</span>
      <h2 class="modal-title">${product.title}</h2>
      
      <div class="modal-rating-row">
        <div class="star-rating" style="font-size: 1rem;">
          ${generateStarsHTML(product.rating)}
        </div>
        <span class="review-count" style="font-size: 0.85rem;">(${product.reviewsCount} verified reviews)</span>
      </div>

      <div class="modal-price-row">
        <span class="modal-current-price">$${product.price.toFixed(2)}</span>
        ${originalPriceHTML}
      </div>

      <p class="modal-description">${product.description}</p>

      <div class="modal-specifications">
        <h4 style="font-size: 0.85rem; font-weight:800; text-transform:uppercase; margin-bottom:8px; color:var(--primary-dark)">Specifications</h4>
        ${specRowsHTML}
      </div>

      <div class="modal-actions-row">
        <div class="modal-qty-selector">
          <button class="modal-qty-btn" id="modal-qty-minus">-</button>
          <span class="modal-qty-val" id="modal-qty-display">1</span>
          <button class="modal-qty-btn" id="modal-qty-plus">+</button>
        </div>
        <button class="btn btn-primary btn-modal-add-cart" id="modal-add-to-cart-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  `;

  // Set quantity variables inside modal context
  let modalQuantity = 1;
  const qtyDisplay = document.getElementById('modal-qty-display');
  
  document.getElementById('modal-qty-plus').addEventListener('click', () => {
    modalQuantity++;
    qtyDisplay.textContent = modalQuantity;
  });

  document.getElementById('modal-qty-minus').addEventListener('click', () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      qtyDisplay.textContent = modalQuantity;
    }
  });

  document.getElementById('modal-add-to-cart-btn').addEventListener('click', (e) => {
    handleAddToCart(product.id, modalQuantity, e.currentTarget);
    closeProductModal();
  });

  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- 9. EVENT LISTENERS SETUP ---
function setupEventListeners() {
  
  // Mobile navigation drawer toggles
  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('active');
    mobileDrawerOverlay.classList.add('active');
  });

  const closeMobile = () => {
    mobileDrawer.classList.remove('active');
    mobileDrawerOverlay.classList.remove('active');
  };
  
  closeMobileDrawerBtn.addEventListener('click', closeMobile);
  mobileDrawerOverlay.addEventListener('click', closeMobile);

  // Nav category selection trigger (desktop)
  desktopNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleCategoryChange(link.dataset.category);
      // Smooth scroll to catalog
      document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Nav category selection trigger (mobile drawer)
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleCategoryChange(link.dataset.category);
      closeMobile();
      document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Filter Pills (Catalog section)
  categoryPillsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-pill')) {
      handleCategoryChange(e.target.dataset.category);
    }
  });

  // Circular Category Cards (Quick selection section)
  quickCategoryCards.forEach(card => {
    card.addEventListener('click', () => {
      handleCategoryChange(card.dataset.category);
      document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Category Banner Image Cards (new banner grid section)
  const catBannerCards = document.querySelectorAll('.cat-banner-card');
  catBannerCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Ignore clicks on the button itself to avoid double-firing
      if (e.target.classList.contains('cat-banner-btn') || e.target.closest('.cat-banner-btn')) {
        return;
      }
      const cat = card.dataset.category;
      if (cat) {
        handleCategoryChange(cat);
        document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
      }
    });
    // Also wire up the "Shop by category" button inside each banner card
    const btn = card.querySelector('.cat-banner-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = card.dataset.category;
        if (cat) {
          handleCategoryChange(cat);
          document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const cat = card.dataset.category;
        if (cat) {
          handleCategoryChange(cat);
          document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Reset filter buttons when search yields no products
  resetFiltersBtn.addEventListener('click', () => {
    activeCategory = 'All';
    searchQuery = '';
    currentSort = 'default';
    searchInput.value = '';
    sortSelect.value = 'default';
    renderCatalog();
  });

  // Search input typing filters list
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCatalog();
  });

  searchBtn.addEventListener('click', () => {
    document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
  });

  // Sort dropdown selectors change
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCatalog();
  });

  // Cart drawer opening & overlays
  cartToggleBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);
  cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  // Close modals clicking on backdrop
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
  });
  closeModalBtn.addEventListener('click', closeProductModal);

  // Checkout process simulation
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    // Clear cart memory
    cart = [];
    saveCart();
    updateCartBadge();
    closeCartDrawer();

    // Trigger Success Toast animation
    checkoutToast.classList.add('show');
    setTimeout(() => {
      checkoutToast.classList.remove('show');
    }, 4500);
  });

  // Banner slide button link triggers
  const shopNowBtns = document.querySelectorAll('.shop-now-btn');
  shopNowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.targetCategory;
      if (cat) {
        handleCategoryChange(cat);
        document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Carousel Next/Prev Controls
  prevSlideBtn.addEventListener('click', () => {
    prevSlide();
    resetCarouselTimer();
  });

  nextSlideBtn.addEventListener('click', () => {
    nextSlide();
    resetCarouselTimer();
  });

  // Newsletter Submit Listener
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail.value;
    alert(`Thank you for subscribing to the ElectroHub newsletter! Updates and vouchers will be sent to: ${email}`);
    newsletterForm.reset();
  });
}

// Global modal exposure helper for HTML inline clicks
window.openProductModal = openProductModal;
window.handleAddToCart = handleAddToCart;
window.closeCartDrawer = closeCartDrawer;
window.adjustCartQty = adjustCartQty;
window.removeCartItem = removeCartItem;

'use client';
import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import ProductModal from './ProductModal';

const CATEGORIES = ['All', 'Mobiles', 'TVs', 'Laptops', 'Audio', 'Gaming', 'Cameras', 'Monitors', 'ACs', 'Washing Machines', 'Kitchen', 'Accessories'];

function generateStars(rating = 0) {
  let stars = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 1; i <= 5; i++) {
    if (i <= full) stars += '★';
    else if (i === full + 1 && half) stars += '★';
    else stars += '☆';
  }
  return stars;
}

export default function ProductCatalog({ activeCategory, onCategoryChange, onAddToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedIds, setAddedIds] = useState({});

  // Listen for search events from Header
  useEffect(() => {
    const handler = (e) => setSearchQuery(e.detail);
    window.addEventListener('electrohub-search', handler);
    return () => window.removeEventListener('electrohub-search', handler);
  }, []);

  // Listen for cart button click from Header to open cart
  useEffect(() => {
    const btn = document.getElementById('cart-toggle-btn');
    if (btn) {
      const handler = () => {
        const event = new CustomEvent('electrohub-opencart');
        window.dispatchEvent(event);
      };
      btn.addEventListener('click', handler);
      return () => btn.removeEventListener('click', handler);
    }
  }, []);

  let filtered = Array.isArray(products) ? [...products] : [];
  if (activeCategory !== 'All') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.title?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q)
    );
  }
  if (sort === 'price-asc') filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
  else if (sort === 'price-desc') filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
  else if (sort === 'rating') filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  else filtered.sort((a, b) => (a.id || 0) - (b.id || 0));

  const handleAddToCart = (product, qty = 1, cardId = null) => {
    if (onAddToCart) onAddToCart(product, qty);
    if (cardId !== null) {
      setAddedIds(prev => ({ ...prev, [cardId]: true }));
      setTimeout(() => setAddedIds(prev => { const n = { ...prev }; delete n[cardId]; return n; }), 1200);
    }
  };

  const handleReset = () => {
    if (onCategoryChange) onCategoryChange('All');
    setSearchQuery('');
    setSort('default');
    const input = document.getElementById('header-search-input');
    if (input) input.value = '';
  };

  return (
    <>
      <section className="catalog-section" id="catalog-section">
        <div className="container">
          <div className="catalog-controls-bar">
            <div className="controls-left">
              <h2 className="current-filter-title" id="filter-display-title">
                {activeCategory === 'All' ? 'All Products' : activeCategory}
              </h2>
              <span className="items-count-badge" id="catalog-items-count">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'} found
              </span>
            </div>
            <div className="controls-right">
              <div className="sort-selector-wrapper">
                <label htmlFor="sort-select">Sort By:</label>
                <select
                  id="sort-select"
                  className="sort-select-input"
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                >
                  <option value="default">Popularity</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className="category-tags-container" id="category-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`category-pill${activeCategory === cat ? ' active' : ''}`}
                data-category={cat}
                onClick={() => onCategoryChange && onCategoryChange(cat)}
              >
                {cat === 'ACs' ? 'Air Conditioners' : cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="no-products-msg" id="no-products-msg">
              <svg viewBox="0 0 24 24" width="60" height="60" stroke="#94A3B8" strokeWidth="1.5" fill="none">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <h3>No products match your criteria</h3>
              <p>Try refining your search terms or selecting another category.</p>
              <button className="btn btn-secondary reset-filters-btn" onClick={handleReset}>Reset Filters</button>
            </div>
          ) : (
            <div className="product-grid" id="product-grid">
              {filtered.map((product, index) => {
                const currentPrice = Number(product?.price || 0).toFixed(2);
                const origPrice = Number(product?.originalPrice || 0);

                return (
                  <article className="product-card" key={`product-${product?.id || 'item'}-${index}`} data-id={product.id}>
                    {product.badge && (
                      <span className={`card-badge ${product.badge}`}>{product.badge}</span>
                    )}
                    <div className="card-image-wrapper" onClick={() => setSelectedProduct(product)}>
                      <img src={product.image} alt={product.title || 'Product Image'} loading="lazy" />
                    </div>
                    <div className="card-body">
                      <span className="card-category">{product.category}</span>
                      <h3 className="card-title" onClick={() => setSelectedProduct(product)}>{product.title}</h3>
                      <div className="card-rating-row">
                        <div className="star-rating">{generateStars(product.rating)}</div>
                        <span className="review-count">({product.reviewsCount || 0})</span>
                      </div>
                      <div className="card-price-row">
                        <span className="current-price">${currentPrice}</span>
                        {origPrice > 0 && (
                          <span className="original-price">${origPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="card-action-row">
                        <button
                          className="btn btn-add-cart"
                          style={addedIds[product.id] ? { background: 'var(--success)', color: 'var(--white)', borderColor: 'var(--success)' } : {}}
                          onClick={() => handleAddToCart(product, 1, product.id)}
                        >
                          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                          <span>{addedIds[product.id] ? 'Added!' : 'Add to Cart'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(prod, qty) => handleAddToCart(prod, qty, null)}
        />
      )}
    </>
  );
}
'use client';
import { useState } from 'react';

function generateStars(rating) {
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

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay active" id="product-detail-modal" onClick={handleBackdropClick}>
      <div className="modal-wrapper">
        <button className="close-modal-btn" onClick={onClose} aria-label="Close details">&times;</button>
        <div className="modal-body-split">
          <div className="modal-left-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="modal-right-info">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-title">{product.title}</h2>

            <div className="modal-rating-row">
              <div className="star-rating" style={{ fontSize: '1rem' }}>
                {generateStars(product.rating)}
              </div>
              <span className="review-count" style={{ fontSize: '0.85rem' }}>
                ({product.reviewsCount} verified reviews)
              </span>
            </div>

            <div className="modal-price-row">
              <span className="modal-current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice > 0 && (
                <span className="modal-original-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="modal-description">{product.description}</p>

            <div className="modal-specifications">
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', color: 'var(--primary-dark)' }}>
                Specifications
              </h4>
              {Object.entries(product.specs).map(([label, val]) => (
                <div className="spec-item" key={label}>
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{val}</span>
                </div>
              ))}
            </div>

            <div className="modal-actions-row">
              <div className="modal-qty-selector">
                <button className="modal-qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span className="modal-qty-val">{quantity}</span>
                <button className="modal-qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button
                className="btn btn-primary btn-modal-add-cart"
                onClick={() => { onAddToCart(product, quantity); onClose(); }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

export default function CartDrawer({ cart, onClose, onAdjustQty, onRemove, onCheckout, isOpen }) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;

  return (
    <>
      <div className={`cart-drawer-overlay${isOpen ? ' active' : ''}`} onClick={onClose} />
      <div className={`cart-drawer${isOpen ? ' active' : ''}`} id="cart-drawer">
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2>Shopping Cart (<span id="cart-drawer-count">{cart.reduce((s, i) => s + i.quantity, 0)}</span>)</h2>
          </div>
          <button className="close-cart-btn" onClick={onClose} aria-label="Close Cart">&times;</button>
        </div>

        <div className="cart-items-body" id="cart-items-body">
          {cart.length === 0 ? (
            <div className="empty-cart-state">
              <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h3>Your Cart is Empty</h3>
              <p>Explore our latest gadgets and add appliances to get started.</p>
              <button className="btn btn-primary btn-sm" onClick={onClose}>Start Shopping</button>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item-row" key={item.product.id} data-id={item.product.id}>
                <img src={item.product.image} alt={item.product.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.product.title}</h4>
                  <div className="cart-item-price">${item.product.price.toFixed(2)}</div>
                  <div className="cart-item-controls">
                    <div className="qty-selectors">
                      <button className="qty-btn" onClick={() => onAdjustQty(item.product.id, -1)}>-</button>
                      <span className="qty-val">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => onAdjustQty(item.product.id, 1)}>+</button>
                    </div>
                    <button className="btn-remove-item" onClick={() => onRemove(item.product.id)} aria-label="Remove item">
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="summary-line">
            <span>Subtotal</span>
            <span id="cart-subtotal">${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Delivery</span>
            <span className="free-delivery-badge">FREE</span>
          </div>
          <div className="summary-line">
            <span>Estimated Tax (5%)</span>
            <span id="cart-tax">${tax.toFixed(2)}</span>
          </div>
          <div className="summary-line total-line">
            <span>Grand Total</span>
            <span id="cart-grand-total">${grandTotal.toFixed(2)}</span>
          </div>
          <button className="btn btn-block btn-checkout" onClick={onCheckout}>
            <span>Proceed to Secure Checkout</span>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

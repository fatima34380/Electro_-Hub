'use client';
import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import HeroCarousel from '@/components/HeroCarousel';
import TrustBadges from '@/components/TrustBadges';
import CategoryBanners from '@/components/CategoryBanners';
import QuickCategories from '@/components/QuickCategories';
import ProductCatalog from '@/components/ProductCatalog';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('electrohub_cart')) || [];
      setCart(saved);
    } catch { setCart([]); }
  }, []);

  // Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('electrohub_cart', JSON.stringify(cart));
    // Update badge count in header
    const badge = document.getElementById('cart-badge-count');
    if (badge) {
      badge.textContent = cart.reduce((s, i) => s + i.quantity, 0);
    }
  }, [cart]);

  // Listen for cart open event from Header cart button
  useEffect(() => {
    const handler = () => setCartOpen(true);
    window.addEventListener('electrohub-opencart', handler);
    return () => window.removeEventListener('electrohub-opencart', handler);
  }, []);

  // Also attach cart toggle directly
  useEffect(() => {
    const btn = document.getElementById('cart-toggle-btn');
    if (!btn) return;
    const handler = () => setCartOpen(true);
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  });

  const handleAddToCart = useCallback((product, qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + qty };
        return updated;
      }
      return [...prev, { product, quantity: qty }];
    });
    if (window.innerWidth > 768) setCartOpen(true);
  }, []);

  const handleAdjustQty = useCallback((productId, amount) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.product.id === productId);
      if (idx === -1) return prev;
      const updated = [...prev];
      const newQty = updated[idx].quantity + amount;
      if (newQty <= 0) {
        updated.splice(idx, 1);
        return updated;
      }
      updated[idx] = { ...updated[idx], quantity: newQty };
      return updated;
    });
  }, []);

  const handleRemove = useCallback((productId) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const handleCheckout = useCallback(() => {
    if (cart.length === 0) return;
    setCart([]);
    setCartOpen(false);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4500);
  }, [cart.length]);

  return (
    <>
      <NewsTicker />
      <Header
        onCategoryChange={setActiveCategory}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
      />

      <main className="main-content">
        <HeroCarousel onCategoryChange={setActiveCategory} />
        <TrustBadges />
        <CategoryBanners onCategoryChange={setActiveCategory} />
        <QuickCategories onCategoryChange={setActiveCategory} />
        <ProductCatalog
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onAddToCart={handleAddToCart}
        />
      </main>

      <CartDrawer
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onAdjustQty={handleAdjustQty}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />

      {/* Checkout Success Toast */}
      <div className={`success-toast${toastVisible ? ' show' : ''}`} id="checkout-toast">
        <div className="toast-content">
          <div className="toast-icon-circle">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="toast-text">
            <h4>Order Placed Successfully!</h4>
            <p>Thank you for shopping at ElectroHub. Your receipt has been sent.</p>
          </div>
        </div>
      </div>

      <Footer onCategoryChange={setActiveCategory} />
    </>
  );
}

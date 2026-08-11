'use client';
import { useState } from 'react';

export default function Header({ onCategoryChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'All Products', category: 'All' },
    { label: 'Mobiles', category: 'Mobiles' },
    { label: 'TVs', category: 'TVs' },
    { label: 'Laptops', category: 'Laptops' },
    { label: 'Audio', category: 'Audio' },
    { label: 'Gaming', category: 'Gaming' },
    { label: 'Appliances', category: 'ACs' },
  ];

  const mobileNavLinks = [
    { label: 'All Products', category: 'All' },
    { label: 'Mobiles', category: 'Mobiles' },
    { label: 'TVs & Audio', category: 'TVs' },
    { label: 'Laptops', category: 'Laptops' },
    { label: 'Audio & Earbuds', category: 'Audio' },
    { label: 'Gaming', category: 'Gaming' },
    { label: 'Cameras', category: 'Cameras' },
    { label: 'Monitors', category: 'Monitors' },
    { label: 'Air Conditioners', category: 'ACs' },
    { label: 'Washing Machines', category: 'Washing Machines' },
    { label: 'Kitchen Appliances', category: 'Kitchen' },
  ];

  const handleNavClick = (category) => {
    onCategoryChange(category);
    setMobileOpen(false);
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <button className="mobile-menu-btn" id="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Toggle Menu">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <a href="/" className="logo-wrapper">
            <img src="/assets/logo-white.svg" alt="ElectroHub Logo" className="brand-logo" />
          </a>

          <nav className="desktop-nav" id="desktop-nav">
            <ul>
              {navLinks.map(link => (
                <li key={link.category}>
                  <a
                    href="#"
                    className="nav-link"
                    onClick={e => { e.preventDefault(); handleNavClick(link.category); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-controls">
            <div className="search-container" id="search-wrapper">
              <input
                type="text"
                id="header-search-input"
                placeholder="Search appliances, brands..."
                aria-label="Search Products"
                onChange={e => {
                  const event = new CustomEvent('electrohub-search', { detail: e.target.value });
                  window.dispatchEvent(event);
                }}
              />
              <button className="search-btn" aria-label="Execute Search" onClick={() => {
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            <button className="control-btn profile-btn" id="profile-btn" aria-label="My Account">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

            <button className="control-btn cart-btn" id="cart-toggle-btn" aria-label="View Shopping Cart">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-badge-count" id="cart-badge-count">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`mobile-navigation-drawer${mobileOpen ? ' active' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/assets/logo.svg" alt="ElectroHub Logo" className="brand-logo" />
          <button className="close-mobile-drawer" onClick={() => setMobileOpen(false)} aria-label="Close Menu">&times;</button>
        </div>
        <ul className="mobile-nav-list">
          {mobileNavLinks.map(link => (
            <li key={link.category}>
              <a
                href="#"
                className="mobile-nav-link"
                onClick={e => { e.preventDefault(); handleNavClick(link.category); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

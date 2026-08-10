'use client';
import { useState } from 'react';

export default function Footer({ onCategoryChange }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing to the ElectroHub newsletter! Updates and vouchers will be sent to: ${email}`);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-info-col">
            <img src="/assets/logo-white.svg" alt="ElectroHub Logo" className="brand-logo footer-logo" />
            <p className="footer-desc">
              Your ultimate hub for top-tier electrical goods and smart home appliances. We bring innovation and reliability directly to your doorstep.
            </p>
            <div className="social-links-row">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-nav-link" onClick={e => { e.preventDefault(); onCategoryChange('All'); document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' }); }}>All Appliances</a></li>
              <li><a href="#catalog-section">Trending Offers</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+1 (800) 123-4567</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>support@electrohub.com</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>123 Innovation Drive, Tech City, USA</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col subscription-col">
            <h3>Subscribe Newsletter</h3>
            <p>Get notified about the latest releases, seasonal price drops, and member-exclusive vouchers.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                aria-label="Email address for Newsletter"
              />
              <button type="submit" className="btn btn-accent btn-subscribe" aria-label="Subscribe to newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p className="copyright-text">&copy; 2026 ElectroHub. All rights reserved. Built with premium design layouts.</p>
          <div className="payment-methods">
            {/* Visa */}
            <svg viewBox="0 0 36 24" width="36" height="24">
              <rect width="36" height="24" rx="3" fill="#1A1F71"/>
              <path d="M12.5 16.2l1.6-10h2.6l-1.6 10h-2.6zm9.2-9.7c-.5-.2-1.3-.4-2.2-.4-2.4 0-4.1 1.3-4.1 3.1 0 1.4 1.2 2.1 2.2 2.6.9.5 1.3.8 1.3 1.2 0 .6-.7.9-1.4.9-1.2 0-1.8-.2-2.8-.6l-.4-.2-.4 2.5c.7.3 2 .6 3.3.6 2.6 0 4.3-1.3 4.3-3.3 0-1.1-.7-2-2.2-2.7-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.9 1.5-.9.8 0 1.4.2 1.9.4l.2.1.4-2.5zm5.7 3.5l1.3-3.5.7 3.5h-2zm3.1-3.5l-1.9 9.7h-2.5l-.2-1.2h-2.4l-.6 1.2h-2.6l2.3-9.7h2.7l1.7 6.4 1.2-6.4h2.3z" fill="#FFF"/>
            </svg>
            {/* Mastercard */}
            <svg viewBox="0 0 36 24" width="36" height="24">
              <rect width="36" height="24" rx="3" fill="#3A3A3A"/>
              <circle cx="14" cy="12" r="7" fill="#EB001B" opacity="0.9"/>
              <circle cx="22" cy="12" r="7" fill="#FF5F00" opacity="0.9"/>
            </svg>
            {/* PayPal */}
            <svg viewBox="0 0 36 24" width="36" height="24">
              <rect width="36" height="24" rx="3" fill="#FFF"/>
              <path d="M11 7.5h5.5c1.4 0 2.4.3 2.9 1 .5.7.6 1.6.4 2.6-.3 1.7-1.3 2.8-2.9 3.3-.6.2-1.4.2-2.4.2H12.9L11.5 21h-2.8L11 7.5zm4 5.3c.7 0 1.2-.1 1.5-.4s.4-.7.5-1.3c.1-.5.1-.9-.1-1.1s-.6-.3-1.2-.3h-2.1l-.6 3.1h2z" fill="#003087"/>
              <path d="M13 9.5h5.5c1.4 0 2.4.3 2.9 1 .5.7.6 1.6.4 2.6-.3 1.7-1.3 2.8-2.9 3.3-.6.2-1.4.2-2.4.2H14.9L13.5 23h-2.8L13 9.5zm4 5.3c.7 0 1.2-.1 1.5-.4s.4-.7.5-1.3c.1-.5.1-.9-.1-1.1s-.6-.3-1.2-.3h-2.1l-.6 3.1h2z" fill="#0079C1" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

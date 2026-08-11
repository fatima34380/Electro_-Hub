'use client';

export default function PromoBanner() {
  const handleShopClick = () => {
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="promo-banner-section">
      <div className="banner-div">
        <div className="banner-content">
          <span className="banner-tag">LIMITED TIME OFFER</span>
          <h2 className="banner-heading">Up to <span className="banner-accent">40% OFF</span> on Premium Electronics</h2>
          <p className="banner-subtext">Explore top brands — Samsung, Sony, Apple, LG & more. Free delivery on all orders.</p>
          <button className="banner-cta-btn" onClick={handleShopClick}>
            Shop All Deals
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

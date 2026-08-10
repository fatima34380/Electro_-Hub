'use client';

const headlines = [
  '🔥 SUMMER SALE — Up to 30% OFF on All Inverter ACs!',
  '📦 FREE Home Delivery on Every Order — No Minimum Purchase',
  '⚡ New Arrivals: Samsung QLED 4K TVs Now In Stock',
  '🛡️ 100% Genuine Products with Official Brand Warranty',
  '💻 ASUS Zenbook & Dell XPS Laptops — Limited Stock Available',
  '🎁 Buy Any Appliance & Get Free Installation Service',
  '🌟 Over 10,000 Happy Customers — Join ElectroHub Today!',
  '❄️ Dawlance & Haier ACs Starting from Just $499 — Shop Now',
];

export default function NewsTicker() {
  const repeated = [...headlines, ...headlines]; // seamless loop

  return (
    <div className="news-ticker-bar">
      <div className="ticker-label">
        <span>LIVE</span>
      </div>
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {repeated.map((text, i) => (
            <span key={i} className="ticker-item">
              {text}
              <span className="ticker-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

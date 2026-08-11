'use client';

const headlines = [
  '🔥 SUMMER SALE — Up to 30% OFF on All Inverter ACs!',
  '📱 New Arrivals: iPhone 15 Pro Max & Samsung Galaxy S24 Ultra Now In Stock!',
  '🎧 Sony WF-1000XM5 Earbuds — Industry-Leading Noise Cancellation',
  '📦 FREE Home Delivery on Every Order — No Minimum Purchase',
  '🎮 Gaming Zone: PS5 DualSense, Razer Headsets & More!',
  '💻 ASUS Zenbook & Dell XPS Laptops — Limited Stock Available',
  '📷 Sony & GoPro Cameras — Capture Every Moment in 4K',
  '🖥️ LG & Samsung Gaming Monitors — 165Hz to 240Hz Available',
  '🎁 Buy Any Appliance & Get Free Installation Service',
  '🎙️ Rode & Blue Yeti Microphones for Streamers & Podcasters',
  '🌟 Over 10,000 Happy Customers — Join ElectroHub Today!',
  '⚡ Apple AirPods Pro 2nd Gen — Now at Best Price Guaranteed!',
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

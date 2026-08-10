'use client';

const banners = [
  {
    category: 'TVs',
    sub: 'Premium Viewing',
    title: 'SMART TVs',
    desc: 'Crystal Clear. Immersive Audio.',
    image: '/assets/tv-banner.jpg',
    alt: 'Smart TVs',
    size: 'large',
  },
  {
    category: 'Laptops',
    sub: 'Reliable. Powerful. Everyday.',
    title: 'TRADITIONAL LAPTOPS',
    desc: 'Built for Work & Play.',
    image: '/assets/laptop-banner.jpg',
    alt: 'Laptops',
    size: 'tall',
  },
  {
    category: 'ACs',
    sub: 'Stay Cool All Summer',
    title: 'AIR CONDITIONERS',
    desc: '',
    image: '/assets/ac-banner.jpg',
    alt: 'Air Conditioners',
    size: 'normal',
  },
  {
    category: 'Washing Machines',
    sub: 'Effortless Laundry',
    title: 'WASHING MACHINES',
    desc: '',
    image: '/assets/washing-machine.jpg',
    alt: 'Washing Machines',
    size: 'normal',
  },
];

export default function CategoryBanners({ onCategoryChange }) {
  const handleClick = (category) => {
    onCategoryChange(category);
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const leftBanner = banners.find(b => b.size === 'large');
  const tallBanner = banners.find(b => b.size === 'tall');
  const rightBanners = banners.filter(b => b.size === 'normal');

  const BannerCard = ({ banner, extraClass = '' }) => (
    <div
      className={`cat-banner-card ${extraClass}`}
      data-category={banner.category}
      role="button"
      tabIndex={0}
      onClick={() => handleClick(banner.category)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(banner.category)}
    >
      <img src={banner.image} alt={banner.alt} className="cat-banner-img" />
      <div className="cat-banner-overlay">
        <div className="cat-banner-text">
          <span className="cat-banner-sub">{banner.sub}</span>
          <h3 className="cat-banner-title">{banner.title}</h3>
          {banner.desc && <p className="cat-banner-desc">{banner.desc}</p>}
        </div>
        <button
          className="cat-banner-btn"
          onClick={(e) => { e.stopPropagation(); handleClick(banner.category); }}
        >
          Shop by category ›
        </button>
      </div>
    </div>
  );

  return (
    <section className="category-banners-section">
      <div className="container">
        <h2 className="section-title">Shop Appliances by Category</h2>
        <div className="category-banners-grid">

          {/* Left: Smart TVs */}
          <BannerCard banner={leftBanner} extraClass="cat-banner-large" />

          {/* Center: Laptops (tall) */}
          <BannerCard banner={tallBanner} extraClass="cat-banner-tall" />

          {/* Right: ACs + Washing Machines stacked */}
          <div className="cat-banner-right-col">
            {rightBanners.map(b => (
              <BannerCard key={b.category} banner={b} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

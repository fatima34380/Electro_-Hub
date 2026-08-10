'use client';

const categories = [
  {
    label: 'Smart TVs', category: 'TVs',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="2" y="3" width="20" height="15" rx="2"></rect>
        <line x1="12" y1="18" x2="12" y2="21"></line>
        <line x1="8" y1="21" x2="16" y2="21"></line>
      </svg>
    )
  },
  {
    label: 'Air Conditioners', category: 'ACs',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="2" y="4" width="20" height="10" rx="1"></rect>
        <line x1="6" y1="18" x2="18" y2="18"></line>
        <line x1="9" y1="21" x2="15" y2="21"></line>
        <line x1="5" y1="10" x2="5" y2="12"></line>
        <line x1="19" y1="10" x2="19" y2="12"></line>
        <path d="M12 14v2"></path>
      </svg>
    )
  },
  {
    label: 'Washing Machines', category: 'Washing Machines',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        <circle cx="12" cy="13" r="5"></circle>
        <line x1="7" y1="6" x2="10" y2="6"></line>
        <circle cx="15" cy="6" r="1"></circle>
      </svg>
    )
  },
  {
    label: 'Laptops', category: 'Laptops',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="2" y1="20" x2="22" y2="20"></line>
        <line x1="12" y1="20" x2="12" y2="17"></line>
      </svg>
    )
  },
  {
    label: 'Kitchen Tools', category: 'Kitchen',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    label: 'Smart Accessories', category: 'Accessories',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
      </svg>
    )
  },
];

export default function QuickCategories({ onCategoryChange }) {
  const handleClick = (category) => {
    onCategoryChange(category);
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="quick-categories-section">
      <div className="container">
        <div className="categories-bubble-wrapper">
          {categories.map(cat => (
            <div
              key={cat.category}
              className="category-bubble-card"
              data-category={cat.category}
              onClick={() => handleClick(cat.category)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleClick(cat.category)}
            >
              <div className="bubble-icon">{cat.icon}</div>
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

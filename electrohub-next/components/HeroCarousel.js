'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { slides } from '@/data/products';
import Image from 'next/image';

export default function HeroCarousel({ onCategoryChange }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  const goToSlide = useCallback((idx) => {
    setActiveSlide(idx);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  const handlePrev = () => { prevSlide(); resetTimer(); };
  const handleNext = () => { nextSlide(); resetTimer(); };
  const handleDot = (i) => { goToSlide(i); resetTimer(); };

  const handleShopNow = (category) => {
    onCategoryChange(category);
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-carousel-section">
      <div className="carousel-container" id="hero-carousel">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`carousel-slide${idx === activeSlide ? ' active' : ''}`}
            style={{ background: slide.bg }}
          >
            <div className="slide-content">
              <span className={`slide-tag${slide.tagClass ? ' ' + slide.tagClass : ''}`}>{slide.tag}</span>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description" dangerouslySetInnerHTML={{ __html: slide.description }} />
              <div className="slide-cta-row">
                <button
                  className="btn btn-primary shop-now-btn"
                  onClick={() => handleShopNow(slide.targetCategory)}
                >
                  {slide.btnText}
                </button>
                <span className="slide-extra-text">
                  {slide.priceLabel} <strong>{slide.price}</strong>
                </span>
              </div>
            </div>
            <div className="slide-image-container">
              <img src={slide.image} alt={slide.imageAlt} className="slide-img" />
            </div>
          </div>
        ))}

        <button className="carousel-control prev-control" onClick={handlePrev} aria-label="Previous Slide">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="carousel-control next-control" onClick={handleNext} aria-label="Next Slide">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${idx === activeSlide ? ' active' : ''}`}
              onClick={() => handleDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

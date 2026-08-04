import { useState, useEffect } from 'react';

const useHeroSlider = (slidesLength, intervalMs = 8000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slidesLength, intervalMs]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
  };

  return {
    currentSlide,
    handleNext,
    handlePrev
  };
};

export default useHeroSlider;

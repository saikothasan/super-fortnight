import { useState, useCallback } from 'react';

export const useCarousel = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  }, [length]);

  return {
    currentIndex,
    nextSlide,
    prevSlide
  };
};
import { useState, useRef, useEffect } from 'react';

export const portfolioImages = [
  process.env.PUBLIC_URL + "/portfolio/1.webp",
  process.env.PUBLIC_URL + "/portfolio/2.webp",
  process.env.PUBLIC_URL + "/portfolio/3.webp",
  process.env.PUBLIC_URL + "/portfolio/4.webp",
  process.env.PUBLIC_URL + "/portfolio/5.webp",
  process.env.PUBLIC_URL + "/portfolio/6.webp",
  process.env.PUBLIC_URL + "/portfolio/7.webp"
];

const usePortfolioInterval = (intervalDuration = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef(null);

  const startAutoInterval = () => {
    intervalRef.current = setInterval(goToNextImage, intervalDuration);
  };

  const clearAutoInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
      setTimeout(() => {
        setIsFading(false);
      }, 500);
    }, 500);
  };

  const goToPreviousImage = () => {
    clearAutoInterval();
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + portfolioImages.length) % portfolioImages.length
      );
      setTimeout(() => {
        setIsFading(false);
        startAutoInterval();
      }, 500);
    }, 500);
  };

  const generateDots = () => {
    return portfolioImages.map((image, index) => (
      <div
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => {
          clearAutoInterval();
          setCurrentIndex(index);
          startAutoInterval();
        }}
      />
    ));
  };

  useEffect(() => {
    startAutoInterval();
    return () => clearAutoInterval();
  }, []);

  const allPortfolios = portfolioImages.map((img, ind) => (
    <img key={ind} src={img} alt={`Portfolio ${ind}`} />
  ));

  return {
    currentImage: portfolioImages[currentIndex],
    currentIndex,
    isFading,
    goToNextImage,
    goToPreviousImage,
    generateDots,
    allPortfolios
  };
};

export default usePortfolioInterval;
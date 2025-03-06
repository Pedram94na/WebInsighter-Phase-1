import { useState, useRef, useEffect } from 'react';

export const portfolioImages = [
    "/portfolio/1.png",
    "/portfolio/2.png",
    "/portfolio/3.png",
    "/portfolio/4.png",
    "/portfolio/5.png",
    "/portfolio/6.png",
    "/portfolio/7.png"
  ];

const usePortfolioInterval = (intervalDuration = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
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
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
      setTimeout(() => setFade(false), 500);
    }, 500);
  };

  const goToPreviousImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + portfolioImages.length) % portfolioImages.length
      );
      setTimeout(() => setFade(false), 500);
    }, 500);
  };

  const generateDots = () => {
    return portfolioImages.map((image, index) => (
      <div
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ));
  };

  useEffect(() => {
    startAutoInterval();
    return () => clearAutoInterval();
  }, []);

  useEffect(() => {
    clearAutoInterval();
    startAutoInterval();
  }, [currentIndex]);

  const allPortfolios = portfolioImages.map((img, ind) => ( <img key={ind} src={img} alt={`Portfolio ${ind}`} />));
  
  return {
    currentImage: portfolioImages[currentIndex],
    currentIndex,
    fade,
    goToNextImage,
    goToPreviousImage,
    generateDots,
    allPortfolios
  };
};

export default usePortfolioInterval;

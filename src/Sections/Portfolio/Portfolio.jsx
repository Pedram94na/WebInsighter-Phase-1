import React from 'react';
import { Part } from '../../Components';
import usePortfolioInterval, { portfolioImages } from './portfolioInterval';
import useWindowSize from './portfolioWindowTracker';
import { popImage } from './portfolioImagePop';
import './portfolio.css';

export default function Portfolio() {
  const { width } = useWindowSize();
  const {
    currentImage,
    currentIndex,
    fade,
    goToNextImage,
    goToPreviousImage,
    generateDots,
    allPortfolios
  } = usePortfolioInterval();

  const isMobile = width < 480;

  return (
    <Part id="portfolio-part" title="Portfolio" data="" color="#2FC5A6">
      { !isMobile ? (
        <>
        <div className="portfolio_place-holder">
        <img
          src={process.env.PUBLIC_URL + "/Arrow.png"}
          className="portfolio-arrow left"
          onClick={goToPreviousImage}
          alt="Previous"
        />
        <div className="portfolio-list">
          <div className={`portfolio-grid ${fade ? 'fade-out' : 'fade-in'}`}>
            <img src={currentImage} alt="Portfolio" />
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/Arrow.png"}
          className="portfolio-arrow right"
          onClick={goToNextImage}
          alt="Next"
        />
      </div>

      <div className="portfolio-dots">
        {generateDots()}
      </div>
      </>
      ) : (
        <>
          <div className="portfolio_place-holder">
              <div className="portfolio-list">
              <div className={`portfolio-grid`} onClick={popImage}>
                {allPortfolios}
              </div>
            </div>
          </div>
        </>
      )}
    </Part>
  );
}

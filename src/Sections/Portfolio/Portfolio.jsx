import React, { useState, useEffect } from 'react';
import { Part } from '../../Components';
import "./portfolio.css";

export default function Portfolio() {
  const portfolioImages = [
    "/portfolio/1.png",
    "/portfolio/2.png",
    "/portfolio/3.png",
    "/portfolio/4.png",
    "/portfolio/5.png",
    "/portfolio/6.png",
    "/portfolio/7.png"
  ];

  const [currentPortfolio, setCurrentPortfolio] = useState(portfolioImages[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
  
      setTimeout(() => {
        setCurrentPortfolio((prev) => {
          const nextIndex = (portfolioImages.indexOf(prev) + 1) % portfolioImages.length;
          return portfolioImages[nextIndex];
        });
  
        setTimeout(() => setFade(false), 500);
      }, 500);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <Part id="portfolio-part" title="Portfolio" data="" color="#2FC5A6">
      <div className='portfolio_place-holder'>
        {/* <img
          src={process.env.PUBLIC_URL + "/Arrow.png"}
          className='portfolio-arrow left'
        /> */}
        <div className='portfolio-list'>
          <div className={`portfolio-grid ${fade ? 'fade-out' : 'fade-in'}`}>
            <img src={currentPortfolio} />
          </div>
        </div>
        {/* <img
          src={process.env.PUBLIC_URL + "/Arrow.png"}
          className='portfolio-arrow right'
        /> */}
      </div>
    </Part>
  );
}

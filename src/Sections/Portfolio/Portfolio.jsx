import React, { useState, useEffect } from 'react';
import { Part } from '../../Components';
import "./portfolio.css";

export default function Portfolio() {
  const colors = [
    ["#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FFFFFF", "#000000"],
    ["#FFFF00", "#33FFFF", "#5F33FF", "#F22F33", "#FF33FF", "#FF33FF"],
    ["#FF0210", "#F000FF", "#F2FF00", "#FFFF11", "#F3F3F3", "#112233"]
  ];

  const [currentColors, setCurrentColors] = useState(colors[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentColors((prevColors) => {
          const nextIndex = (colors.indexOf(prevColors) + 1) % colors.length;
          return colors[nextIndex];
        });
        setFade(false);
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
          <p>Name Of Brand</p>
          <div className={`portfolio-grid ${fade ? 'fade-out' : 'fade-in'}`}>
            {currentColors.map((color, index) => (
              <div key={index} className='portfolio-block' style={{ backgroundColor: color }} />
            ))}
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

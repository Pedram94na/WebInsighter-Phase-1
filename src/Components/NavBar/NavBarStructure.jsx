import React from 'react';

export default function NavBarStructure(props) {
  const scrollToSec = (id) => {
    let targetElement = document.getElementById(id);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 40;
      smoothScrollTo(topOffset, 800);
    }
  };

  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animationFrame = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextScrollPos = easeInOutQuad(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, nextScrollPos);

      if (timeElapsed < duration) {
        requestAnimationFrame(animationFrame);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animationFrame);
  };

  return (
    <div>
      <ul className="nav-bar_ul">
        {props.items.map((item, index) => (
          <li
            key={index}
            onMouseOver={(e) => (e.target.style.textShadow = `0px 0px 5px ${item.color}`)}
            onMouseLeave={(e) => (e.target.style.textShadow = 'unset')}
            onClick={() => scrollToSec(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

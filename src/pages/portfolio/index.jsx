import "./style.css"
import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="text-container">Bubbles</div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div
            className="interactive"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
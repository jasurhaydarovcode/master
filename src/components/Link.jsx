import React from 'react';
import '../css/blocks/link.css'; // Custom CSS file for animation

const Link = () => {
  return (
    <div className="relative flex items-center justify-center h-max py-10">
      <div className="circle relative w-64 h-64 flex items-center justify-center">
        <a href='' className="text-gray-200 font-mono text-lg">{'<Download CV/>'}</a>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="orbit"></div>
          <div className="orbit_two"></div>
        </div>
      </div>
    </div>
  );
};


export default Link

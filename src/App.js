import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import React, { useState, useEffect, useContext } from 'react';
import Skils from './components/skils';
import NavBar from './components/NavBar';
import Cubanimation from './components/cubanimation';
import ThreeJsScene from './components/Prackricle-bg';
import { ColorProvider } from './provider/color';


function App() {
  const [cursorPos, setCursorPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [targetPos, setTargetPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  // const { textColor } = useContext(ColorProvider);

  // useEffect(() => {
  //   document.documentElement.style.setProperty('--dynamic-color', textColor);
  // }, [textColor])

  useEffect(() => {
    // Kursorning yangi pozitsiyasini hisoblash
    const moveCursor = () => {
      // Animatsiya tezligi
      const easeAmount = 0.3;
      const dx = (targetPos.x - cursorPos.x) * easeAmount;
      const dy = (targetPos.y - cursorPos.y) * easeAmount;

      // Kursorning yangi pozitsiyasini o'rnatish
      setCursorPos(prev => ({
        x: prev.x + dx,
        y: prev.y + dy
      }));
    };

    // Animatsiyani davom ettirish uchun "requestAnimationFrame" dan foydalanish
    const animationFrameId = requestAnimationFrame(moveCursor);

    // Animatsiyani tozalash
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos, targetPos]); // cursorPos va targetPos o'zgarganda useEffect qayta ishga tushadi

  const handleMouseMove = (e) => {
    // Kursorning maqsadli pozitsiyasini yangilash
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    // Brauzer oynasidan chiqqanda kursor shaklini markazga qo'yish
    setTargetPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  };

  

  return (
    <div
      className="app-container relative w-full h-max overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'crosshair' }} // Sistemaning kursorini yashirish
    >
      {/* colorProvider */}
      <ColorProvider>
        <NavBar />
        <main>
          <Home />
          <Skils />
          <Projects />
          <Contacts />
        </main>
        {/* Cursor */}
        <div
          className="cursor-blob md:block hidden"
          style={{
            position: 'fixed', // Kursor har doim oynaning bir joyida turishini ta'minlash
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%)', // Kursor shaklini o'rtaga qo'yish
            pointerEvents: 'none', // Kursorning o'zi bilan interaktsiyani bloklash
            borderRadius: '50%', // Kursorning shakli
            mixBlendMode: 'difference' // Orqadagi rangga aks ta'sir qilish uslubi
          }}
        />

        {/* cube amination */}
        <Cubanimation />

        {/* three js background */}
        <ThreeJsScene />

      </ColorProvider>
    </div>

  );
}

export default App;

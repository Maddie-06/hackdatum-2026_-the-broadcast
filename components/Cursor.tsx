
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isOverButton, setIsOverButton] = useState(false);
  const [blink, setBlink] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);
  const blinkTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over button or interactive element
      const target = e.target as HTMLElement;
      const isButton = target.tagName === 'BUTTON' || 
                       target.closest('button') !== null ||
                       target.tagName === 'A' ||
                       target.closest('a') !== null;
      setIsOverButton(isButton);

      // Trigger blink effect when on button
      if (isButton && !blinkTimeout.current) {
        setBlink(true);
        blinkTimeout.current = window.setInterval(() => {
          setBlink(prev => !prev);
        }, 300);
      } else if (!isButton && blinkTimeout.current) {
        clearInterval(blinkTimeout.current);
        blinkTimeout.current = null;
        setBlink(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY.current);
      setScrollSpeed(Math.min(diff * 5, 100));
      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => setScrollSpeed(0), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (blinkTimeout.current) clearInterval(blinkTimeout.current);
    };
  }, []);

  return (
    <>
      {/* Add global styles for button hover effects */}
      <style>{`
        button:hover {
          cursor: none;
          filter: brightness(1.3);
        }
        a:hover {
          cursor: none;
        }
      `}</style>

      <div 
        className="fixed pointer-events-none z-[99999]"
        style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
      >
        {/* Main Crosshair - Normal state */}
        {!isOverButton && (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-[#F5EEDC] opacity-50" />
            <div className="absolute h-full w-[1px] bg-[#F5EEDC] opacity-50" />
            <div className="w-1 h-1 bg-[#E63946] rounded-full" />
          </div>
        )}

        {/* Red Blinking Cursor - When hovering button */}
        {isOverButton && (
          <div className={`relative w-6 h-6 flex items-center justify-center transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-40'}`}>
            <div className="w-2 h-2 bg-[#E63946] rounded-full" />
            <div className="absolute w-6 h-6 border-2 border-[#E63946] rounded-full" />
          </div>
        )}

        {/* Signal Strength Meter (Dynamic) - Only show when not on button */}
        {!isOverButton && (
          <div className="absolute left-6 top-0 flex flex-col gap-1 items-start">
            <span className="text-[8px] font-bold text-[#F5EEDC] uppercase tracking-tighter">SIGNAL</span>
            <div className="flex gap-[2px]">
              {[1, 2, 3, 4, 5].map((bar) => {
                const isActive = scrollSpeed > (bar - 1) * 20;
                return (
                  <div 
                    key={bar}
                    className={`w-1 transition-all duration-75 ${isActive ? 'bg-[#E63946]' : 'bg-[#457B9D] opacity-30'}`}
                    style={{ height: `${bar * 3 + 4}px` }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomCursor;

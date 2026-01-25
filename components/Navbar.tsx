import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Control Room', href: '#control-room' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Hosts', href: '#hosts' },
    { name: 'Problem Statement', href: '#problem-statement' },
    { name: 'Signal', href: '#signal' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${isScrolled ? 'py-5 bg-navy/90 backdrop-blur-md border-b border-white/5' : 'py-10 bg-transparent'}`}>
      {/* Changed max-w-7xl to max-w-[95%] or w-full to ensure they hit the "most" left/right edges */}
      <div className="w-full px-12 flex items-center justify-between">
        
        {/* LEFT MOST: Logo Section */}
        <div className="flex items-center gap-4 flex-1 justify-start">
          <div className="w-10 h-10 bg-signalRed flex items-center justify-center font-black italic text-white text-lg shrink-0">H</div>
          <span className="font-mono font-black tracking-tighter text-2xl text-cream whitespace-nowrap">HACKDATUM 2026</span>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cream/70 hover:text-signalRed transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT MOST: Status Indicators */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <div className="hidden lg:flex flex-col items-end font-mono text-[11px] text-cream/60 leading-tight font-bold uppercase">
            <span className="text-cream">UPLINK_STATUS: <span className="text-cream font-black">SECURE</span></span>
            <span>LATENCY: 12ms</span>
          </div>
          
          <div className="h-10 w-[1px] bg-white/20 hidden lg:block" />
          
          <div className="flex items-center gap-3 font-mono text-sm text-signalRed font-black animate-pulse tracking-widest shrink-0">
            <span className="w-3 h-3 rounded-full bg-signalRed shadow-[0_0_10px_#ff0000]" />
            ON AIR
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
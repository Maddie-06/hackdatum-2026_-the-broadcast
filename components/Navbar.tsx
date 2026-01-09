
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
    { name: 'Hosts', href: '#hosts' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Signal', href: '#signal' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${isScrolled ? 'py-4 bg-navy/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-signalRed flex items-center justify-center font-black italic text-white text-sm">H</div>
          <span className="font-mono font-black tracking-tighter text-xl text-cream">HACKDATUM 2026</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cream/60 hover:text-signalRed transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end font-mono text-[9px] text-cream/40 leading-none mr-4">
            <span>UPLINK_STATUS: SECURE</span>
            <span>LATENCY: 12ms</span>
          </div>
          <div className="h-10 w-[1px] bg-white/10 hidden lg:block" />
          <div className="flex items-center gap-2 font-mono text-xs text-signalRed font-bold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-signalRed" />
            ON AIR
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Play, Activity } from 'lucide-react';

interface HeroProps {
  scrollProgress: MotionValue<number>;
  onAction?: (title: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollProgress, onAction }) => {
  const scale = useTransform(scrollProgress, [0, 0.2], [1, 1.5]);
  const opacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollProgress, [0, 0.2], [0, -100]);

  // Working Countdown Logic
  const targetDate = new Date('February 14, 2026 09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="h-[200vh] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Abstract Signal Wave Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-[80vw] h-[80vw] border-[1px] border-signalRed rounded-full absolute" 
           />
           <motion.div 
             animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.2, 0.05] }}
             transition={{ duration: 6, repeat: Infinity, delay: 1 }}
             className="w-[100vw] h-[100vw] border-[1px] border-signalRed rounded-full absolute" 
           />
        </div>

        <motion.div style={{ scale, opacity, y }} className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="px-4 py-1 bg-signalRed text-white font-mono text-xs font-bold uppercase tracking-[0.2em]">Transmission 001</span>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-signalRed" />
              <span className="font-mono text-xs text-cream opacity-60">BITRATE: 12.4 GBPS</span>
            </div>
          </div>

          <h1 className="text-[12vw] md:text-[8vw] font-black leading-none mb-4 tracking-tighter text-cream uppercase drop-shadow-[0_10px_30px_rgba(230,57,70,0.3)]">
            HACKDATUM<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signalRed to-signalRed/80">2026</span>
          </h1>

          <p className="max-w-xl mx-auto text-xl md:text-2xl text-cream/70 font-light tracking-wide mb-12">
            The signal is coming in clear. Join us for a 48-hour broadcast of pure innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onAction?.('Tune In To The Frequency')}
              className="group relative px-10 py-5 bg-signalRed overflow-hidden transform transition hover:scale-105 active:scale-95 shadow-[0_0_0_0_rgba(230,57,70,0.4)] hover:shadow-[0_0_40px_10px_rgba(230,57,70,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <Play className="fill-white" />
                <span className="text-white font-bold text-lg tracking-widest uppercase">Tune In Now</span>
              </div>
            </button>
            
            <button 
              onClick={() => onAction?.('Start Transmission Initialization')}
              className="px-10 py-5 border-2 border-cream/20 hover:border-signalRed transition-all group hover:bg-signalRed transform hover:scale-105"
            >
              <span className="text-cream font-bold text-lg tracking-widest uppercase group-hover:text-white transition-colors">Start Transmission</span>
            </button>
          </div>
        </motion.div>

        {/* Countdown Ticker */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 flex justify-between items-center z-10">
           <div className="flex gap-12 font-mono">
              {[
                { label: 'DAYS', val: String(timeLeft.days).padStart(2, '0') },
                { label: 'HOURS', val: String(timeLeft.hours).padStart(2, '0') },
                { label: 'MINS', val: String(timeLeft.mins).padStart(2, '0') },
                { label: 'SECS', val: String(timeLeft.secs).padStart(2, '0') }
              ].map((t, idx) => (
                <div key={idx} className="group cursor-default">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl font-black text-signalOrange group-hover:text-signalRed transition-colors"
                  >
                    {t.val}
                  </motion.div>
                  <div className="text-[10px] opacity-40 uppercase tracking-widest">{t.label}</div>
                </div>
              ))}
           </div>
           <div className="hidden md:block text-right font-mono text-xs opacity-40">
              COORDINATES: 21.1458° N, 79.0882° E<br/>
              BROADCAST ORIGIN: NAGPUR, INDIA
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

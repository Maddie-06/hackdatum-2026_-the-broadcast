import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Signal, Users, Globe } from 'lucide-react';

const STATS = [
  { val: '24+', label: 'HOURS OF BROADCAST', icon: <Mic className="w-8 h-8" /> },
  { val: '10+', label: 'TECH TRACKS', icon: <Signal className="w-8 h-8" /> },
  { val: '500+', label: 'LIVE SPECTATORS', icon: <Users className="w-8 h-8" /> },
  { val: '20+', label: 'GUEST EXPERTS', icon: <Globe className="w-8 h-8" /> },
];

const Stats: React.FC = () => {
  return (
    /* REVERSED: Background changed to bg-navy */
    <section className="py-32 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* REVERSED: Icon box changed to bg-cream with text-navy */}
              <div className="w-20 h-20 bg-cream text-navy rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-black/50 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                {stat.icon}
              </div>

              {/* REVERSED: Value text changed to text-cream */}
              <h3 className="text-7xl font-black text-cream uppercase tracking-tighter mb-2">
                {stat.val}
              </h3>

              {/* MAINTAINED: Label remains signalRed but font-black makes it bolder */}
              <p className="font-mono text-sm font-black text-signalRed tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor - Subtle Navy-on-Navy effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none text-[25vw] font-black text-cream flex items-center justify-center leading-none">
        STATS
      </div>
    </section>
  );
};

export default Stats;
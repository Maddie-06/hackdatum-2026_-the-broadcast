
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
    <section className="py-32 px-6 bg-cream relative overflow-hidden">
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
              <div className="w-20 h-20 bg-navy text-cream rounded-full flex items-center justify-center mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                {stat.icon}
              </div>
              <h3 className="text-7xl font-black text-navy uppercase tracking-tighter mb-2">{stat.val}</h3>
              <p className="font-mono text-sm font-bold text-signalRed tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Icons */}
      <div className="absolute top-10 left-10 text-navy/5 -rotate-12 pointer-events-none">
        <Signal size={200} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-10 right-10 text-navy/5 rotate-12 pointer-events-none">
        <Mic size={200} strokeWidth={0.5} />
      </div>
    </section>
  );
};

export default Stats;

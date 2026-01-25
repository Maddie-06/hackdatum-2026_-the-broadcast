
import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Share2 } from 'lucide-react';

const TIERS = [
  { name: 'Network Tier', count: 1, height: 'h-48' },
  { name: 'Channel Tier', count: 3, height: 'h-32' },
  { name: 'Signal Tier', count: 6, height: 'h-24' },
];

interface SponsorsProps {
  onJoin?: () => void;
}

const Sponsors: React.FC<SponsorsProps> = ({ onJoin }) => {
  return (
    <section className="py-32 px-6 bg-navy relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <span className="text-signalOrange font-mono font-bold tracking-[0.3em] uppercase block mb-4">Support the Broadcast</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase text-cream tracking-tighter">Sponsor the <span className="text-signalRed">Signal</span></h2>
        </div>

        <div className="space-y-24">
          {TIERS.map((tier, tIdx) => (
            <div key={tIdx} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <h4 className="font-mono text-xs text-cream/40 uppercase tracking-[0.5em]">{tier.name}</h4>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
                {[...Array(tier.count)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className={`${tier.height} bg-white/5 border border-white/10 flex items-center justify-center group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-signalOrange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-[10px] text-cream/20 uppercase tracking-widest z-10">Carrier_Signal_{idx + 1}</span>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-signalRed rounded-full animate-pulse group-hover:scale-150 transition-transform" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onJoin}
            className="group relative px-12 py-6 bg-cream text-navy font-black text-xl uppercase tracking-widest transition-all shadow-[10px_10px_0px_#E63946] hover:shadow-[0px_0px_40px_rgba(230,57,70,0.4)] transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-signalOrange translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0 opacity-10" />
            <div className="relative flex items-center gap-4">
               <Share2 className="text-signalRed group-hover:scale-125 transition-transform" />
               <span>Join the Broadcast Team</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

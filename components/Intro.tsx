
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Calendar, MapPin, Radio } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section className="min-h-screen bg-navy py-32 relative overflow-hidden flex items-center justify-center">
      {/* 3D Slanted Panel */}
      <motion.div 
        initial={{ rotateY: -30, opacity: 0, x: -100 }}
        whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
      >
        <div className="bg-cream p-8 md:p-16 shadow-[20px_20px_0px_#E63946] border-l-[12px] border-signalOrange text-navy">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-navy text-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">Control Room Access</span>
                <div className="h-[2px] flex-1 bg-navy/10" />
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                Welcome to the<br/>
                <span className="text-signalRed">Control Room</span>
              </h2>

              <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90 mb-12">
                HackDATUM is not just a competition; it's a high-definition transmission of creativity. For two days, we seize the airwaves to build, hack, and broadcast the future. 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-6 bg-navy/5 border border-navy/10">
                  <div className="p-3 bg-navy text-cream rounded-sm">
                    <Calendar />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight">Broadcast Date</h4>
                    <p className="text-navy/70">February 14 - 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-navy/5 border border-navy/10">
                  <div className="p-3 bg-navy text-cream rounded-sm">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight">Studio Location</h4>
                    <p className="text-navy/70">GHRCE Campus, Studio A</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="aspect-video bg-navy relative overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/broadcast1/800/450" 
                  alt="Studio Monitor"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-signalRed rounded-full flex items-center justify-center animate-pulse cursor-pointer shadow-[0_0_20px_rgba(230,57,70,0.5)]">
                    <Radio className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/50">CAM_01 // LIVE_FEED</div>
              </div>

              <div className="bg-signalOrange/10 p-6 border-l-4 border-signalOrange">
                 <h3 className="font-black text-xl uppercase mb-2">Prime-Time Access</h3>
                 <p className="text-sm opacity-80 mb-4 font-medium italic">Join 500+ developers, designers, and creators in a 48-hour marathon of building.</p>
                 <div className="flex items-center gap-2 font-mono text-xs">
                    <div className="w-2 h-2 rounded-full bg-signalRed animate-pulse" />
                    <span>CAPACITY: 94% REACHED</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-navy opacity-[0.03] text-[30vw] font-black pointer-events-none select-none">
        DATUN
      </div>
    </section>
  );
};

export default Intro;

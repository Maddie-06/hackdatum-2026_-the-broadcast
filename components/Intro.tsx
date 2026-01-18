import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Activity, Radio } from 'lucide-react';

const Intro: React.FC = () => {
  const cardData = [
    {
      label: "Broadcast Date",
      value: "Feb 14 - 15, 2026",
      icon: <Calendar size={18} /> // Reduced icon size
    },
    {
      label: "Studio Location",
      value: "GHRCE Studio A",
      icon: <MapPin size={18} /> // Reduced icon size
    },
    {
      label: "Signal Freq",
      value: "102.6 MHz",
      icon: <Activity size={18} /> // Reduced icon size
    }
  ];

  return (
    <section className="min-h-screen bg-navy py-32 relative overflow-hidden flex items-center justify-center [perspective:2000px]">
      <motion.div 
        initial={{ rotateY: -20, opacity: 0, x: -50 }}
        whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="bg-cream p-8 md:p-16 shadow-[20px_20px_0px_#E63946] border-l-[12px] border-signalOrange text-navy overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            <div className="flex-[2] min-w-0"> 
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-navy text-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest shrink-0">
                    Control Room Access
                </span>
                <div className="h-[2px] flex-1 bg-navy/10" />
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                Welcome to the<br/>
                <span className="text-signalRed">Control Room</span>
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-90 mb-12 max-w-3xl">
                HackDATUM is not just a competition; it's a high-definition transmission of creativity. For two days, we seize the airwaves to build, hack, and broadcast the future. 
              </p>

              <div className="w-full mt-12 overflow-hidden py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  {cardData.map((card, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-6 lg:p-8 bg-navy/5 border border-navy/10 transition-all duration-300 hover:scale-[1.03] hover:bg-navy/[0.08] hover:border-navy/20 cursor-default overflow-hidden"
                    >
                      {/* REDUCED SIZE: Changed w-14 h-14 to w-10 h-10 */}
                      <div className="bg-navy text-cream rounded-sm shrink-0 flex items-center justify-center w-10 h-10">
                        {card.icon}
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-0.5 whitespace-nowrap opacity-60">
                          {card.label}
                        </h4>
                        <p className="text-navy font-mono text-xs lg:text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 flex flex-col gap-6 shrink-0">
              <div className="aspect-video bg-navy relative overflow-hidden group border border-navy/10">
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
              </div>

              <div className="bg-signalOrange/10 p-6 lg:p-8 border-l-4 border-signalOrange">
                 <h3 className="font-black text-lg lg:text-xl uppercase mb-2">Capacity Status</h3>
                 <div className="flex items-center gap-3 font-mono text-xs font-bold">
                    <div className="w-2.5 h-2.5 rounded-full bg-signalRed animate-pulse shadow-[0_0_8px_#E63946]" />
                    <span>94% REACHED</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
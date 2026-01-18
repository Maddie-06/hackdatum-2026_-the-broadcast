import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Radio, Zap, Coffee, Mic2 } from 'lucide-react';

const SCHEDULE_DATA = {
  day1: [
    { time: '09:00 AM', title: 'Transmission Begins', category: 'PRIME', icon: <Radio className="w-4 h-4" /> },
    { time: '11:00 AM', title: 'The Blueprint: Keynote', category: 'MAIN', icon: <Zap className="w-4 h-4" /> },
    { time: '01:00 PM', title: 'Power Down: Lunch', category: 'WORKSHOP', icon: <Coffee className="w-4 h-4" /> },
    { time: '02:30 PM', title: 'Signal Boost: Workshops', category: 'WORKSHOP', icon: <Zap className="w-4 h-4" /> },
    { time: '08:00 PM', title: 'Late Night Hack', category: 'PRIME', icon: <Radio className="w-4 h-4" /> },
  ],
  day2: [
    { time: '08:00 AM', title: 'Morning Recap', category: 'MAIN', icon: <Radio className="w-4 h-4" /> },
    { time: '10:00 AM', title: 'Code Freeze', category: 'PRIME', icon: <Zap className="w-4 h-4" /> },
    { time: '12:00 PM', title: 'Broadcast Pitches', category: 'MAIN', icon: <Zap className="w-4 h-4" /> },
    { time: '04:00 PM', title: 'Grand Finale', category: 'PRIME', icon: <Radio className="w-4 h-4" /> },
  ]
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <section className="py-32 px-6 bg-navy relative min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-cream tracking-tighter mb-8">
            Program <span className="text-signalOrange">Schedule</span>
          </h2>
          
          <div className="inline-flex bg-white/5 p-2 gap-2 border border-white/10 rounded-full">
            {(['day1', 'day2'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-10 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeDay === day ? 'bg-signalRed text-white shadow-lg shadow-signalRed/30' : 'text-cream/50 hover:text-cream'
                }`}
              >
                {day === 'day1' ? 'Day 01' : 'Day 02'}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 z-0">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-signalRed via-signalOrange to-signalRed relative"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16 md:space-y-24"
            >
              {SCHEDULE_DATA[activeDay].map((item, idx) => (
                <div key={idx} className="relative flex items-center min-h-[120px]">
                  
                  {/* Mic Symbol - Perfectly stuck to the line */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-navy border-2 border-signalRed rounded-full z-20 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  >
                    <Mic2 size={18} className="text-signalRed" />
                  </motion.div>

                  {/* Content Layout */}
                  <div className={`flex w-full items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* The Content Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className={`flex-1 pl-16 md:pl-0 ${
                        idx % 2 === 0 
                          ? 'md:text-right md:pr-20' 
                          : 'md:text-left md:pl-20'
                      }`}
                    >
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 mb-4 font-mono text-xs ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Clock className="w-3 h-3 text-signalOrange" />
                        <span className="text-signalOrange font-bold">{item.time}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-black text-cream uppercase mb-3 tracking-tighter leading-tight group-hover:text-signalRed transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className={`flex items-center gap-3 opacity-60 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-sm font-mono uppercase tracking-widest">{item.category}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-signalOrange" />
                        {item.icon}
                      </div>
                    </motion.div>

                    {/* Empty Side Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
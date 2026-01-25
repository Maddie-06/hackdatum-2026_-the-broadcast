
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Radio, Zap, Coffee } from 'lucide-react';

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
    <section className="py-32 px-6 bg-navy relative min-h-screen">
      <div className="max-w-4xl mx-auto">
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
          {/* Animated Timeline Line with Glowing Pulse */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-signalRed via-signalOrange to-signalRed relative"
            >
              {/* Sliding Glow Pulse */}
              <motion.div 
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-32 bg-signalRed/40 blur-xl"
              />
              <motion.div 
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-2 h-16 bg-white blur-sm"
              />
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {SCHEDULE_DATA[activeDay].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-navy border-[3px] border-signalRed rounded-full z-10 hidden md:block" 
                  />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-1 w-full md:w-auto ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-12 md:pl-0 group`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-navy border border-white/10 mb-4 font-mono text-xs group-hover:border-signalRed transition-colors ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <Clock className="w-3 h-3 text-signalOrange" />
                      <span className="text-signalOrange">{item.time}</span>
                    </div>
                    <h3 className="text-3xl font-black text-cream uppercase mb-2 tracking-tight group-hover:text-signalRed transition-colors">{item.title}</h3>
                    <div className={`flex items-center gap-3 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end'} opacity-50`}>
                      <span className="text-xs font-mono uppercase tracking-widest">{item.category}</span>
                      <div className="w-1 h-1 rounded-full bg-cream/40" />
                      {item.icon}
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 hidden md:block" />
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


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Radio } from 'lucide-react';

const QUESTIONS = [
  { q: "How do I tune in to HackDATUM?", a: "Applications open soon. Once accepted, you'll receive your unique broadcast frequency and credentials to join Studio A." },
  { q: "Is there a registration fee?", a: "The transmission is free for all selected teams. We provide the equipment, the signal, and the snacks." },
  { q: "What should I build?", a: "Anything that boosts the signal. We have tracks ranging from AI-driven broadcasts to decentralized communications." },
  { q: "Are individual creators welcome?", a: "Absolutely. You can broadcast solo or join a production team on Day 1 during our mixer session." },
];

const FAQItem = ({ question, answer, isOpen, toggle }: any) => (
  <div className="border-b border-white/10 last:border-0 overflow-hidden">
    <button 
      onClick={toggle}
      className="w-full py-8 flex items-center justify-between text-left group"
    >
      <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-signalOrange' : 'text-cream group-hover:text-signalRed'}`}>
        {question}
      </h3>
      <ChevronDown className={`w-6 h-6 text-signalRed transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="pb-8 text-cream/60 leading-relaxed text-lg max-w-2xl">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-[#0B132B]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-1 bg-signalRed" />
          <h2 className="text-5xl font-black uppercase text-cream tracking-tighter">Transmission <span className="text-signalOrange">Help</span></h2>
        </div>

        <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
          {QUESTIONS.map((item, idx) => (
            <FAQItem 
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === idx}
              toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-4 text-cream/40 font-mono text-xs tracking-widest uppercase">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>Support lines are open 24/7 during the event</span>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

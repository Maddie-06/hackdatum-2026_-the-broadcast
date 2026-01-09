
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Radio, Mic, Signal, Clock, Monitor, Users, Calendar, HelpCircle, ArrowRight, Share2, Play, Activity, X } from 'lucide-react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Hosts from './components/Hosts';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import OverlayEffects from './components/OverlayEffects';
import Navbar from './components/Navbar';

const TransmissionModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string }> = ({ isOpen, onClose, title }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/95 backdrop-blur-xl"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-cream w-full max-w-4xl max-h-[80vh] overflow-y-auto border-l-[12px] border-signalRed text-navy relative p-8 md:p-16"
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-navy/5 rounded-full transition-colors">
            <X size={32} />
          </button>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-signalRed animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-signalRed">Incoming Transmission</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">{title}</h2>
          
          <div className="space-y-6 text-lg md:text-xl font-medium opacity-80 mb-12">
            <p>You are now accessing the encrypted HackDATUM signal. This portal is currently being initialized for the 2026 broadcast season.</p>
            <p>Stay tuned as we prepare the most intense 48-hour production in technological history. Registration details, hardware requirements, and frequency assignments will be dispatched to your terminal shortly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 bg-navy text-cream">
                <h4 className="font-bold uppercase mb-2">Network Status</h4>
                <div className="flex items-center gap-4">
                  <Activity className="text-signalOrange animate-pulse" />
                  <span className="font-mono">ENCRYPTED // ACTIVE</span>
                </div>
             </div>
             <button onClick={onClose} className="bg-signalRed text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-signalRed/90 transition-colors">
                Return to Broadcast
             </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalState, setModalState] = useState<{ open: boolean, title: string }>({ open: false, title: '' });
  
  const openModal = (title: string) => setModalState({ open: true, title });
  const closeModal = () => setModalState({ ...modalState, open: false });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-navy selection:bg-signalRed selection:text-white">
      <OverlayEffects />
      <Navbar />

      {/* Persistent UI Elements */}
      <div className="fixed top-24 left-8 z-50 pointer-events-none hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-signalRed flex items-center justify-center rounded-sm">
            <Radio className="text-white animate-pulse" />
          </div>
          <div className="text-cream font-mono">
            <div className="text-xs uppercase opacity-70">Frequency</div>
            <div className="text-lg font-bold">102.6 MHZ</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 left-8 z-50 pointer-events-none hidden lg:block">
         <div className="flex flex-col gap-1">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="flex gap-1 items-end h-8">
               {[...Array(6)].map((_, j) => (
                 <motion.div 
                   key={j}
                   animate={{ height: `${Math.random() * 100}%` }}
                   transition={{ duration: 0.3, repeat: Infinity, repeatType: "mirror" }}
                   className="w-1 bg-signalOrange/40"
                 />
               ))}
             </div>
           ))}
           <div className="text-[10px] font-mono text-signalOrange/60 mt-1 tracking-tighter uppercase">Signal Monitor Output</div>
         </div>
      </div>

      <main className="relative z-10">
        <Hero scrollProgress={smoothProgress} onAction={openModal} />
        <div id="control-room"><Intro /></div>
        <div id="hosts"><Hosts /></div>
        <div id="schedule"><Schedule /></div>
        <div id="signal"><Stats /></div>
        <Sponsors onJoin={() => openModal("Production Partnership")} />
        <div id="faq"><FAQ /></div>
        <Footer />
      </main>

      {/* News Ticker (Global Bottom) - Slower speed (60s instead of 30s) */}
      <div className="fixed bottom-0 left-0 w-full z-[60] h-12 bg-signalRed overflow-hidden flex items-center">
        <div className="flex animate-marquee whitespace-nowrap font-mono text-sm font-bold text-white uppercase tracking-wider">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8">
              • HACKDATUM 2026: THE BROADCAST IS LIVE • NOW ACCEPTING APPLICATIONS • 24 HOURS OF INTENSE INNOVATION • ACM GHRCE STUDENT CHAPTER •
            </span>
          ))}
        </div>
      </div>

      <TransmissionModal isOpen={modalState.open} onClose={closeModal} title={modalState.title} />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 60s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default App;

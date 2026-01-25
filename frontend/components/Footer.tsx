
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-32 pb-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-7xl md:text-8xl font-black text-cream uppercase tracking-tighter leading-none mb-8">
              SIGNING<br/>OFF
            </h2>
            <p className="text-xl text-cream/50 max-w-md leading-relaxed">
              The signal fades, but the impact stays. Join the community and keep the innovation broadcasting long after the freeze.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-mono text-xs text-signalOrange uppercase tracking-[0.3em] mb-6">Frequencies</h4>
              <ul className="space-y-4 font-bold text-cream/70 uppercase text-sm tracking-widest">
                <li><a href="#" className="hover:text-signalRed transition-colors">Home Feed</a></li>
                <li><a href="#" className="hover:text-signalRed transition-colors">Live Schedule</a></li>
                <li><a href="#" className="hover:text-signalRed transition-colors">Hosts</a></li>
                <li><a href="#" className="hover:text-signalRed transition-colors">Apply</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-signalOrange uppercase tracking-[0.3em] mb-6">Channels</h4>
              <div className="flex flex-wrap gap-4">
                {[Twitter, Instagram, Linkedin, Github].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-signalRed hover:border-signalRed transition-all transform hover:-translate-y-1">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-mono text-xs text-signalOrange uppercase tracking-[0.3em] mb-6">Status</h4>
              <div className="p-4 bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span>SIGNAL STRENGTH</span>
                  <span className="text-signalRed">EXCELLENT</span>
                </div>
                <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    className="h-full bg-signalRed" 
                  />
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] text-cream/40">
                  <Activity className="w-3 h-3 text-signalOrange" />
                  ENCRYPTION: AES-256
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-8">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-signalRed rounded-full flex items-center justify-center">
                <span className="text-white font-black text-lg italic">H</span>
             </div>
             <p className="font-mono text-xs text-cream/30 uppercase tracking-widest">
               © 2026 ACM GHRCE STUDENT CHAPTER. ALL RIGHTS BROADCASTED.
             </p>
          </div>
          <div className="flex gap-8 font-mono text-[10px] text-cream/20 tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Broadcast Rights</a>
          </div>
        </div>
      </div>
      
      {/* Visual Glitch Fade-out at end of scroll */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-signalRed to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

// Added onAction to the interface
interface HostsProps {
  onAction?: (title: string) => void;
}

const HOSTS = [
  { 
    name: 'Dr. Sarah J.', 
    role: 'Senior AI Lead', 
    image: 'https://picsum.photos/seed/host1/400/500',
    bio: 'Pioneer in broadcast automation and neural networks. Led major AI integrations at global tech hubs.'
  },
  { 
    name: 'Marcus Vane', 
    role: 'Motion Designer', 
    image: 'https://picsum.photos/seed/host2/400/500',
    bio: 'Creator of high-fidelity visual experiences for prime-time broadcast. Master of spatial UI dynamics.'
  },
  { 
    name: 'Elena Frost', 
    role: 'CTO, TechCorp', 
    image: 'https://picsum.photos/seed/host3/400/500',
    bio: 'Systems architect specializing in massive-scale transmission protocols and cloud infrastructure.'
  },
  { 
    name: 'David Chen', 
    role: 'Cloud Architect', 
    image: 'https://picsum.photos/seed/host4/400/500',
    bio: 'Focused on low-latency data streaming and real-time edge computing for global broadcast networks.'
  },
];

// 1. Pass onAction into the HostCard
const HostCard: React.FC<{ host: any; idx: number; onAction?: (title: string) => void }> = ({ host, idx, onAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-navy h-[500px] w-full [perspective:1000px] group"
    >
      <motion.div 
        className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden bg-navy border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
          <img 
            src={host.image} 
            alt={host.name}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-signalRed text-white text-[10px] font-bold rounded-full shadow-[0_0_10px_rgba(230,57,70,0.5)]">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              LIVE
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-signalOrange font-mono text-xs uppercase mb-1 font-bold">{host.role}</p>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">{host.name}</h3>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-signalRed p-8 flex flex-col justify-center items-center text-center text-white">
          <div className="w-16 h-1 bg-white/40 mb-6" />
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{host.name}</h3>
          <p className="font-mono text-xs text-white/70 uppercase tracking-widest mb-6">{host.role}</p>
          <p className="text-sm font-medium leading-relaxed opacity-90 mb-8">{host.bio}</p>
          
          {/* 2. TRIGGER THE MODAL HERE */}
          <button 
            onClick={() => onAction?.(`Signal Profile: ${host.name}`)}
            className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 hover:bg-white hover:text-signalRed transition-all font-bold uppercase tracking-widest text-xs"
          >
            <Plus size={16} />
            See More Info
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hosts: React.FC<HostsProps> = ({ onAction }) => {
  return (
    <section className="py-32 px-6 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-signalOrange font-mono font-bold tracking-[0.3em] uppercase block mb-4">The Talent</span>
            <h2 className="text-6xl md:text-7xl font-black uppercase text-cream tracking-tight">Featured <span className="text-signalRed">Hosts</span></h2>
          </div>
          <p className="max-w-md text-cream/50 text-lg">
            Hover over our hosts to unlock their signal profiles and professional broadcast credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOSTS.map((host, idx) => (
            // 3. Pass the prop down to the card
            <HostCard key={idx} host={host} idx={idx} onAction={onAction} />
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-full h-full opacity-[0.02] pointer-events-none select-none text-[20vw] font-black text-cream flex items-center justify-center leading-none">
        TALENT
      </div>

      {/* Perspective Grid */}
      <div 
        className="absolute bottom-0 left-0 w-full h-96 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(245, 238, 220, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 238, 220, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom'
        }}
      />
    </section>
  );
};

export default Hosts;
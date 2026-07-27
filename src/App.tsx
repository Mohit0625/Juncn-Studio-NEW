import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import OurWorkSection from './components/OurWorkSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';

const GridBackground = ({ isDark }: { isDark: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300">
      {/* Background Accent Lines (Base Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 dark:opacity-25" />

      {/* Glowing Grid (Hover) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#D4FF00_1px,transparent_1px),linear-gradient(to_bottom,#D4FF00_1px,transparent_1px)] bg-[size:4rem_4rem] transition-opacity duration-300"
        style={{
          WebkitMaskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          opacity: mousePos.x !== -1000 ? 0.8 : 0,
        }}
      />
    </div>
  );
};
  
  export default function App() {
    const [isDark, setIsDark] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    useEffect(() => {
      setIsTransitioning(true);
      document.documentElement.style.backgroundColor = isDark ? '#0a0a0a' : '#ffffff';
      document.body.style.backgroundColor = isDark ? '#0a0a0a' : '#ffffff';
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }, [isDark]);
  
    return (
      <div className={isDark ? 'dark' : ''}>
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <GridBackground isDark={isDark} />
        </div>
        
        <div className="min-h-screen bg-transparent text-black dark:text-white selection:bg-[#D4FF00] selection:text-black font-sans relative z-10 flex flex-col justify-between p-6 md:p-10 transition-colors duration-300">
          {/* --- Top Navbar --- */}
        <header className="relative z-50 max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 bg-[#D4FF00] text-black font-black flex items-center justify-center rounded text-sm tracking-tighter">
              J
            </div>
            <span className="font-black text-xl tracking-tighter uppercase text-black dark:text-white">
              JUNCN<span className="text-zinc-500 font-normal">.STUDIO</span>
            </span>
          </div>

          {/* Nav Pills */}
          <nav className="hidden md:flex items-center gap-2 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm dark:shadow-none px-4 py-2 rounded-full text-xs font-mono transition-colors">
            <a href="#work" className="px-3 py-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">[ Work ]</a>
            <a href="#services" className="px-3 py-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">[ Services ]</a>
            <a href="#process" className="px-3 py-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">[ Process ]</a>
            <a href="#estimator" className="px-3 py-1 text-emerald-600 dark:text-[#D4FF00] font-bold">[ Estimator ]</a>
          </nav>

          {/* Action Utilities */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all text-xs"
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all text-xs"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="bg-[#D4FF00] text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center gap-1 shadow-[0_0_20px_rgba(212,255,0,0.2)]"
            >
              [ Let's Talk ⚡ ]
            </a>
          </div>
        </header>

        {/* --- Main Hero Content --- */}
        <main 
          className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 flex flex-col items-center justify-center text-center overflow-visible"
        >
          <div className="space-y-8 flex flex-col items-center">
            
            {/* Headline Area */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[92px] font-black uppercase tracking-tight leading-[0.9] text-black dark:text-white transition-colors">
              WE BUILD <span className="italic font-light text-zinc-500 dark:text-zinc-400 font-serif">WEBSITES</span> <br />
              THAT MAKE <br />
              OTHERS JEALOUS.
            </h1>
            
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-lg font-mono leading-relaxed transition-colors">
              We're crisp professionals with custom cursor physics, interacting through custom physics interaction.
            </p>
          </div>
        </main>

        {/* --- Bottom CTAs & Proof Bar --- */}
        <footer className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-emerald-400 dark:bg-[#D4FF00] text-black px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              [ VIEW SELECTED WORK ↗ ]
            </button>

            <button className="flex-1 sm:flex-none bg-white dark:bg-zinc-900 text-black dark:text-white border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm dark:shadow-none">
              [ INTERACTIVE ESTIMATOR ]
            </button>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-zinc-500 transition-colors">
            <div>[ <span className="text-black dark:text-white font-bold">100%</span> Custom Code ]</div>
            <div>[ <span className="text-black dark:text-white font-bold">99/100</span> Lighthouse Score ]</div>
          </div>
        </footer>

      </div>
      
      {/* Our Work Section */}
      <OurWorkSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Process Section */}
      <ProcessSection />
    </div>
  );
}
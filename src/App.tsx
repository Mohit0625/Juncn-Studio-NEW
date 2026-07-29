import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { TrustMetricsBar } from './components/TrustMetricsBar';
import OurWorkSection from './components/OurWorkSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import EstimatorSection from './components/EstimatorSection';
import ContactSection from './components/ContactSection';
import Logo from './components/Logo';
import FooterSection from './components/FooterSection';

const GridBackground = ({ isDark }: { isDark: boolean }) => {
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const requestRef = useRef<number>();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    
    const handleMouseLeave = () => {
      targetPos.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      // If initialized
      if (targetPos.current.x !== -1000 && currentPos.current.x === -1000) {
        currentPos.current = { x: targetPos.current.x, y: targetPos.current.y };
      }
      
      // If hidden
      if (targetPos.current.x === -1000) {
         currentPos.current = { x: -1000, y: -1000 };
      }

      // Lerp factor
      const easing = 0.15;
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * easing;
      currentPos.current.y += dy * easing;

      if (glowRef.current) {
        glowRef.current.style.WebkitMaskImage = `radial-gradient(circle 75px at ${currentPos.current.x}px ${currentPos.current.y}px, black 0%, transparent 100%)`;
        glowRef.current.style.maskImage = `radial-gradient(circle 75px at ${currentPos.current.x}px ${currentPos.current.y}px, black 0%, transparent 100%)`;
        glowRef.current.style.opacity = currentPos.current.x === -1000 ? "0" : "0.8";
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchend', handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchend', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300">
      {/* Background Accent Lines (Base Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 dark:opacity-25" />

      {/* Glowing Grid (Hover) */}
      <div 
        ref={glowRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#FDB913_1px,transparent_1px),linear-gradient(to_bottom,#FDB913_1px,transparent_1px)] bg-[size:2rem_2rem]"
        style={{ opacity: 0 }}
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
        
        {/* --- Top Navbar --- */}
        <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-transparent transition-colors duration-300">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between bg-white/25 dark:bg-zinc-900/25 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-full px-6 py-3 shadow-sm dark:shadow-none">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer outline-none"
            >
              <Logo className="h-[30px] w-auto" />
            </a>

            {/* Nav Pills */}
            <nav className="hidden md:flex items-center gap-2 text-xs font-mono transition-colors">
              <a href="#work" className="px-3 py-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">[ Work ]</a>
              <a href="#services" className="px-3 py-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">[ Services ]</a>
              <a href="#process" className="px-3 py-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">[ Process ]</a>
              <a href="#estimator" className="px-3 py-1 text-zinc-900 dark:text-[#FDB913] font-bold">[ Estimator ]</a>
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
                className="bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center gap-1 shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(253,185,19,0.2)]"
              >
                [ Let's Talk ⚡ ]
              </a>
            </div>
          </div>
        </header>

        <div className="min-h-screen bg-transparent text-black dark:text-white font-sans relative z-10 flex flex-col justify-between p-6 md:p-10 pt-32 md:pt-40 transition-colors duration-300">


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
        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
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
        </div>

      </div>
      
      <TrustMetricsBar />
      
      {/* Our Work Section */}
      <div id="work">
        <OurWorkSection />
      </div>
      
      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>
      
      {/* Process Section */}
      <div id="process">
        <ProcessSection />
      </div>
      
      {/* Estimator Section */}
      <div id="estimator">
        <EstimatorSection />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      <FooterSection />
    </div>
  );
}
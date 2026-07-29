import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    tagline: "ANALYSIS & AUDIT",
    description: "We analyze your business goals, target audience, and market positioning."
  },
  {
    number: "02",
    title: "Planning",
    tagline: "ARCHITECTURE & SEO",
    description: "Creating strategic wireframes, site maps, and SEO foundations."
  },
  {
    number: "03",
    title: "Design",
    tagline: "UI & VISUAL IDENTITY",
    description: "Crafting visually engaging, high-fidelity UI designs based on your brand."
  },
  {
    number: "04",
    title: "Development",
    tagline: "PERFORMANT CODE",
    description: "Writing clean, performant, mobile-first code using modern frameworks."
  },
  {
    number: "05",
    title: "Launch",
    tagline: "QA & DEPLOYMENT",
    description: "Rigorous speed testing, QA, and a smooth deployment process."
  },
  {
    number: "06",
    title: "Support",
    tagline: "OPTIMIZATION & BACKUPS",
    description: "Ongoing maintenance, backups, and strategic performance reviews."
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      className="relative w-full bg-transparent text-black dark:text-white pt-8 pb-24 px-6 md:px-12 font-sans overflow-hidden transition-colors duration-300"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-900 dark:text-[#FDB913] font-bold uppercase tracking-widest">
              <span>[ 03 // OUR METHODOLOGY ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[0.95]">
              THE EXECUTABLE <br className="hidden md:block" /><span className="text-zinc-500 dark:text-zinc-100 font-['Instrument_Serif'] italic font-normal">FLOW</span>.
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-xs sm:text-sm font-mono leading-relaxed pb-2">
            [ HOVER OVER ANY NODE TO EXECUTE PHASE INSPECTION ]
          </p>
        </div>

        {/* --- 6 CIRCLES HORIZONTAL FLOW --- */}
        <div className="relative my-16 py-8">
          
          {/* Base Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />

          {/* Active Filled Progress Line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-zinc-900 dark:bg-[#FDB913] -translate-y-1/2 z-0 shadow-[0_0_12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_12px_#FDB913]"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Nodes Container */}
          <div className="relative z-10 flex justify-between items-center w-full">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative flex flex-col items-center cursor-pointer group"
                >
                  {/* Step Title Label above node */}
                  <span className={`absolute -top-10 text-xs font-mono font-bold uppercase transition-all duration-300 hidden md:block whitespace-nowrap ${
                    isActive ? "text-zinc-900 dark:text-[#FDB913] -translate-y-1" : "text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                  }`}>
                    {step.title}
                  </span>

                  {/* Interactive Circle Node */}
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      borderColor: isActive ? "var(--active-color)" : "var(--inactive-color)",
                      backgroundColor: isActive ? "var(--active-color)" : "var(--bg-color)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      // Using custom properties to handle dark mode seamlessly with Framer Motion
                      '--active-color': 'var(--accent)',
                      '--inactive-color': 'var(--border)',
                      '--bg-color': 'var(--bg)'
                    } as any}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm md:text-lg transition-shadow duration-300 ${
                      isActive ? "shadow-[0_0_25px_rgba(0,0,0,0.4)] dark:shadow-[0_0_25px_rgba(253,185,19,0.6)] text-white dark:text-black" : "text-zinc-400 dark:text-zinc-600 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 group-hover:text-black dark:group-hover:text-white"
                    } [--accent:#18181b] dark:[--accent:#FDB913] [--border:#e5e5e5] dark:[--border:#27272a] [--bg:#ffffff] dark:[--bg:#0a0a0a]`}
                  >
                    {step.number}
                  </motion.div>

                  {/* Dynamic Pointer Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePointer"
                      className="absolute -bottom-6 w-2 h-2 bg-zinc-900 dark:bg-[#FDB913] rotate-45"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DYNAMIC DESCRIPTION STAGE --- */}
        <div className="mt-12 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-8 md:p-12 relative min-h-[220px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900/10 dark:bg-[#FDB913]/10 border border-zinc-900/30 dark:border-[#FDB913]/30 text-zinc-900 dark:text-[#FDB913]">
                    PHASE {processSteps[activeStep].number}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 tracking-wider">
                    {processSteps[activeStep].tagline}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-['Cabinet_Grotesk'] mb-3">
                  {processSteps[activeStep].title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
              </div>

              {/* Status / Command Spec Widget */}
              <div className="border-l border-neutral-200 dark:border-neutral-800 pl-6 hidden md:block">
                <p className="text-xs font-mono text-neutral-500 mb-1">// STATUS</p>
                <div className="flex items-center gap-2 font-mono text-sm text-zinc-900 dark:text-[#FDB913]">
                  <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-[#FDB913] animate-ping" />
                  READY_FOR_EXECUTION
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

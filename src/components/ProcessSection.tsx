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
      className="relative w-full bg-transparent text-black dark:text-white py-24 px-6 md:px-12 font-sans overflow-hidden border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#000000] dark:bg-[#D4FF00] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
                03 // OUR METHODOLOGY
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[0.95]">
              THE EXECUTABLE <span className="text-[#000000] dark:text-[#D4FF00] font-['Instrument_Serif'] italic font-normal">FLOW</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-sm text-sm font-mono leading-relaxed">
            [ HOVER OVER ANY NODE TO EXECUTE PHASE INSPECTION ]
          </p>
        </div>

        {/* --- 6 CIRCLES HORIZONTAL FLOW --- */}
        <div className="relative my-16 py-8">
          
          {/* Base Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-200 dark:bg-neutral-800 -translate-y-1/2 z-0" />

          {/* Active Filled Progress Line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-[#000000] dark:bg-[#D4FF00] -translate-y-1/2 z-0 shadow-[0_0_12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_12px_#D4FF00]"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Nodes Container */}
          <div className="relative z-10 flex justify-between items-center w-full">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep >= index;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative flex flex-col items-center cursor-pointer group"
                >
                  {/* Step Title Label above node */}
                  <span className={`absolute -top-10 text-xs font-mono font-bold uppercase transition-all duration-300 hidden md:block whitespace-nowrap ${
                    isActive ? "text-[#000000] dark:text-[#D4FF00] -translate-y-1" : "text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                  }`}>
                    {step.title}
                  </span>

                  {/* Interactive Circle Node */}
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      borderColor: isActive || isPassed ? "var(--active-color)" : "var(--inactive-color)",
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
                      isActive ? "shadow-[0_0_25px_rgba(0,0,0,0.4)] dark:shadow-[0_0_25px_rgba(212,255,0,0.6)] text-white dark:text-black" : "text-neutral-500 dark:text-neutral-400 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-hover:text-black dark:group-hover:text-white"
                    } [--accent:#000000] dark:[--accent:#D4FF00] [--border:#e5e5e5] dark:[--border:#262626] [--bg:#ffffff] dark:[--bg:#0a0a0a]`}
                  >
                    {step.number}
                  </motion.div>

                  {/* Dynamic Pointer Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePointer"
                      className="absolute -bottom-6 w-2 h-2 bg-[#000000] dark:bg-[#D4FF00] rotate-45"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DYNAMIC DESCRIPTION STAGE --- */}
        <div className="mt-12 bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 relative min-h-[220px] backdrop-blur-md flex flex-col justify-center">
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
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#000000]/10 dark:bg-[#D4FF00]/10 border border-[#000000]/30 dark:border-[#D4FF00]/30 text-[#000000] dark:text-[#D4FF00]">
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
                <div className="flex items-center gap-2 font-mono text-sm text-[#000000] dark:text-[#D4FF00]">
                  <span className="w-2 h-2 rounded-full bg-[#000000] dark:bg-[#D4FF00] animate-ping" />
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

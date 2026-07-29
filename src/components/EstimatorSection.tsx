import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scope options with minimum and maximum estimated pricing
const ESTIMATOR_OPTIONS = [
  {
    id: 'webdev',
    title: 'CUSTOM WEB DEVELOPMENT',
    category: 'CORE BUILD',
    minPrice: 8000,
    maxPrice: 15000,
    description: 'Bespoke Next.js/React architecture, fast loading speed, and responsive layout.'
  },
  {
    id: '3dwebgl',
    title: '3D & EXPERIMENTAL WEBGL',
    category: 'INTERACTION',
    minPrice: 5000,
    maxPrice: 10000,
    description: 'Three.js canvas effects, custom particle shaders, and dynamic 3D scenes.'
  },
  {
    id: 'uiux',
    title: 'UI/UX & DESIGN SYSTEM',
    category: 'DESIGN CRAFT',
    minPrice: 4000,
    maxPrice: 8000,
    description: 'High-fidelity wireframes, interactive Figma prototypes, and component libraries.'
  },
  {
    id: 'ecommerce',
    title: 'HEADLESS E-COMMERCE',
    category: 'STOREFRONT',
    minPrice: 7000,
    maxPrice: 14000,
    description: 'Shopify Plus / custom checkout setup, product builders, and API integrations.'
  },
  {
    id: 'branding',
    title: 'BRAND IDENTITY & STRATEGY',
    category: 'POSITIONING',
    minPrice: 3000,
    maxPrice: 6000,
    description: 'Typography guidelines, motion identity, color system, and brand assets.'
  },
  {
    id: 'seo',
    title: 'SEO & SPEED TUNING',
    category: 'OPTIMIZATION',
    minPrice: 2000,
    maxPrice: 4000,
    description: '99+ Lighthouse speed tuning, structural sitemaps, and search optimization.'
  }
];

export default function EstimatorSection() {
  // Selected Scope Options
  const [selectedIds, setSelectedIds] = useState<string[]>(['webdev', 'uiux']);

  // Toggle selection
  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Calculate live price totals
  const totalMin = selectedIds.reduce((sum, id) => {
    const item = ESTIMATOR_OPTIONS.find((opt) => opt.id === id);
    return sum + (item ? item.minPrice : 0);
  }, 0);

  const totalMax = selectedIds.reduce((sum, id) => {
    const item = ESTIMATOR_OPTIONS.find((opt) => opt.id === id);
    return sum + (item ? item.maxPrice : 0);
  }, 0);

  return (
    <section className="relative w-full text-black dark:text-white py-24 px-6 md:px-10">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        {/* --- Top Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          <div>
            {/* Section Tag (Section 04 / 4th Section) */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-900 dark:text-[#FDB913] font-bold uppercase tracking-widest mb-3">
              <span>[ 04 // ESTIMATE YOUR SCOPE ]</span>
            </div>

            {/* Typography matching Hero & Services styling */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[0.95]">
              PROJECT <span className="font-['Instrument_Serif'] italic font-normal text-zinc-500 dark:text-zinc-400">CALCULATOR</span>.
            </h2>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs sm:text-sm max-w-md leading-relaxed">
            Select the modules required for your build to calculate an instant itemized estimate range before starting a conversation.
          </p>
        </div>

        {/* --- Main Estimator Layout Grid --- */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: Interactive Module Selection Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center font-mono text-xs text-zinc-500 pb-2">
              <span>[ SELECT MODULES TO INCLUDE ]</span>
              <span>{selectedIds.length} SELECTED</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {ESTIMATOR_OPTIONS.map((option) => {
                const isSelected = selectedIds.includes(option.id);

                return (
                  <div
                    key={option.id}
                    onClick={() => toggleOption(option.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-zinc-100 dark:bg-zinc-900/90 border-zinc-900 dark:border-[#FDB913] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[6px_6px_0px_0px_rgba(253,185,19,0.15)]'
                        : 'bg-zinc-50 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {/* Checkbox indicator */}
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-zinc-900 dark:bg-[#FDB913] border-zinc-900 dark:border-[#FDB913] text-white dark:text-black'
                              : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-transparent'
                          }`}
                        >
                          ✓
                        </div>

                        <h3
                          className={`text-lg sm:text-xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] transition-colors ${
                            isSelected ? 'text-zinc-900 dark:text-[#FDB913]' : 'text-zinc-800 dark:text-white'
                          }`}
                        >
                          {option.title}
                        </h3>
                      </div>

                      {/* Estimate Pill */}
                      <span className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 px-3 py-1.5 rounded-lg whitespace-nowrap">
                        ₹{option.minPrice.toLocaleString()} - ₹{option.maxPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="pl-8 flex items-center justify-between gap-4">
                      <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs leading-relaxed">
                        {option.description}
                      </p>
                      <span className="text-[10px] font-mono text-zinc-900 dark:text-[#FDB913] uppercase tracking-wider hidden sm:block">
                        #{option.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Real-Time Scope Receipt Panel (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-md space-y-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
              
              {/* Receipt Top Header */}
              <div className="flex justify-between items-center font-mono text-xs pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-zinc-900 dark:text-[#FDB913] font-bold">[ ITEMIZED SCOPE RECEIPT ]</span>
                <span className="text-zinc-500">JUNCN.ESTIMATOR</span>
              </div>

              {/* Itemized Line Items List */}
              <div className="space-y-3 min-h-[160px] max-h-[260px] overflow-y-auto pr-1">
                <AnimatePresence>
                  {selectedIds.map((id) => {
                    const item = ESTIMATOR_OPTIONS.find((opt) => opt.id === id);
                    if (!item) return null;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center justify-between font-mono text-xs py-1 border-b border-zinc-200/50 dark:border-zinc-800/50"
                      >
                        <span className="text-zinc-700 dark:text-zinc-300 font-bold truncate max-w-[200px]">
                          • {item.title}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">
                          ₹{item.minPrice.toLocaleString()} - ₹{item.maxPrice.toLocaleString()}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Calculated Price Range Display */}
              <div className="pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                  ESTIMATED TOTAL BUDGET RANGE
                </span>
                <div className="text-3xl sm:text-4xl font-black font-['Cabinet_Grotesk'] text-zinc-900 dark:text-[#FDB913] tracking-tight">
                  ₹{totalMin.toLocaleString()} – ₹{totalMax.toLocaleString()} <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 font-normal">INR</span>
                </div>
              </div>

              {/* Direct Lock-In CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-3 bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black px-6 py-4 rounded-xl text-xs font-black uppercase tracking-wider border-2 border-zinc-900 dark:border-black hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                >
                  <span>[ LOCK IN THIS ESTIMATE ]</span>
                  <span className="font-mono text-sm">↗</span>
                </a>
              </div>

              {/* Disclaimer Footer */}
              <p className="text-[10px] font-mono text-zinc-500 text-center leading-normal pt-2">
                * Estimates are calculated on average project complexity. Final pricing is confirmed after formal technical scoping.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

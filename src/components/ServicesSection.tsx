import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample Services Data
const SERVICES = [
  {
    id: '01',
    title: 'CUSTOM WEB DEVELOPMENT',
    subtitle: 'WEBFLOW / NEXT.JS / REACT',
    description: 'We craft high-performance, custom websites with clean code architectures, zero bloated templates, and lightning-fast load speeds.',
    deliverables: ['Custom Next.js/React Builds', 'Webflow Enterprise Systems', 'Headless CMS Integration', '99+ Lighthouse Optimization'],
    tag: 'CORE SERVICE'
  },
  {
    id: '02',
    title: 'UI/UX & KINETIC DESIGN',
    subtitle: 'PRODUCT & WEB INTERACTION',
    description: 'Interface design engineered to captivate and convert. We blend bold neo-brutalist visuals with intuitive, frictionless user flows.',
    deliverables: ['Design Systems & UI Kits', 'Interactive Prototypes', 'Micro-Animations & Motion', 'Wireframing & UX Research'],
    tag: 'DESIGN CRAFT'
  },
  {
    id: '03',
    title: '3D & EXPERIMENTAL WEBGL',
    subtitle: 'THREE.JS / SHADERS / CANVAS',
    description: 'Immersive 3D web experiences that leave a lasting impression. Interactive objects, dynamic particle shaders, and spatial layouts.',
    deliverables: ['Three.js & Canvas Effects', 'Custom Shader Animations', 'Interactive 3D Product Viewers', 'WebGL Performance Tuning'],
    tag: 'NEXT-GEN'
  },
  {
    id: '04',
    title: 'E-COMMERCE EXPERIENCES',
    subtitle: 'SHOPIFY PLUS / HEADLESS',
    description: 'High-converting online storefronts designed to scale. Built with seamless checkout integrations and bespoke product configurators.',
    deliverables: ['Custom Shopify Liquid/Headless', 'Conversion Rate Optimization (CRO)', 'Payment & ERP Integrations', 'Custom Product Builders'],
    tag: 'HIGH GROWTH'
  },
  {
    id: '05',
    title: 'BRAND IDENTITY & STRATEGY',
    subtitle: 'POSITIONING / VISUAL DIRECTION',
    description: 'Defining the creative soul of modern digital brands. From bold typography systems to complete digital design guidelines.',
    deliverables: ['Brand Guidelines & Style Guides', 'Typography & Color Systems', 'Motion & Logo Assets', 'Creative Copywriting Direction'],
    tag: 'BRANDING'
  }
];

export default function ServicesSection() {
  // State to track which service bar is hovered (defaults to first item)
  const [hoveredId, setHoveredId] = useState<string | null>('01');

  return (
    <section className="relative w-full text-black dark:text-white pt-24 pb-8 px-6 md:px-10">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* --- LEFT SIDE: Sticky Section Header --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-12 space-y-8 z-10">
          
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-900 dark:text-[#FDB913] font-bold uppercase tracking-widest">
            <span>[ 02 // WHAT WE DO ]</span>
          </div>

          {/* Headline using Cabinet Grotesk + Instrument Serif */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[0.95]">
            SERVICES <br />
            WE <span className="font-['Instrument_Serif'] italic font-normal text-zinc-500 dark:text-zinc-400">OFFER</span>.
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm max-w-md leading-relaxed">
            We don't do cookie-cutter templates. Every build is handcrafted from code to canvas, tailored specifically to elevate your brand position and drive real metrics.
          </p>

          {/* Direct Action CTA */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider border-2 border-transparent dark:border-black hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              <span>[ NEED A CUSTOM SCOPE? ]</span>
              <span className="font-mono">↗</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center gap-6 font-mono text-xs text-zinc-500">
            <div>[ <strong className="text-black dark:text-white font-bold">100%</strong> Bespoke Builds ]</div>
            <div>[ <strong className="text-black dark:text-white font-bold">FULL-STACK</strong> Execution ]</div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Interactive Accordion Bars --- */}
        <div className="lg:col-span-7 space-y-4">
          {SERVICES.map((service) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isHovered
                    ? 'bg-white dark:bg-zinc-900/90 border-zinc-900 dark:border-[#FDB913] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_0px_0px_rgba(253,185,19,0.15)]'
                    : 'bg-zinc-50 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {/* Accordion Bar Header */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* ID Tag */}
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded transition-colors ${
                        isHovered
                          ? 'bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black'
                          : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                      }`}
                    >
                      [{service.id}]
                    </span>

                    {/* Title */}
                    <h3
                      className={`text-xl sm:text-2xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] transition-colors ${
                        isHovered ? 'text-zinc-900 dark:text-[#FDB913]' : 'text-black dark:text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Indicator Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border transition-all ${
                      isHovered
                        ? 'bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black border-zinc-900 dark:border-[#FDB913] rotate-45'
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700'
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* Expandable Content Body */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-zinc-200 dark:border-zinc-800/80 space-y-6">
                        {/* Subtitle & Description */}
                        <div>
                          <span className="text-[10px] font-mono text-zinc-900 dark:text-[#FDB913] uppercase tracking-wider block mb-1">
                            {service.subtitle}
                          </span>
                          <p className="text-zinc-600 dark:text-zinc-300 font-mono text-xs sm:text-sm leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                        </div>

                        {/* Deliverables Grid */}
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                            [ KEY DELIVERABLES ]
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 px-3 py-2 rounded-lg"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-[#FDB913]" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- Bottom Status Line --- */}
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center items-start justify-between gap-4 font-mono text-xs text-zinc-500 pt-4 mt-16 border-t border-zinc-200 dark:border-zinc-800/80">
        <div>[ SCROLL DOWN TO EXPLORE PROCESS ]</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-[#FDB913]" />
          <span className="text-black dark:text-white font-bold">5 CORE SERVICES</span>
        </div>
      </div>
    </section>
  );
}

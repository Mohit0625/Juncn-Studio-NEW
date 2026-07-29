import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sample Data for 8 Projects
const PROJECTS = [
  {
    id: '01',
    title: 'INKEVERSE',
    category: 'TATTOO STUDIO',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://inkverse-tattoo.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Creative', 'Portfolio', 'UI/UX'],
    link: 'https://inkverse-tattoo.vercel.app/'
  },
  {
    id: '02',
    title: 'HARBORESTONE',
    category: 'REAL ESTATE',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://harborstone-real-estate.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Property', 'Listing', 'Next.js'],
    link: 'https://harborstone-real-estate.vercel.app/'
  },
  {
    id: '03',
    title: 'ARTICFLOW',
    category: 'HVAC SERVICES',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://artic-flow-hvac.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Business', 'Corporate', 'Webflow'],
    link: 'https://artic-flow-hvac.vercel.app/'
  },
  {
    id: '04',
    title: 'DR. SARAH AHMED',
    category: 'DOCTOR PORTFOLIO',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://doctor-demo-sigma.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Medical', 'Personal', 'React'],
    link: 'https://doctor-demo-sigma.vercel.app/'
  },
  {
    id: '05',
    title: 'LENS & LIGHT',
    category: 'PHOTOGRAPHY PORTFOLIO',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://lens-photo.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Gallery', 'Visuals', 'Design'],
    link: 'https://lens-photo.vercel.app/'
  },
  {
    id: '06',
    title: 'AURA FLOW',
    category: 'SAMPLE PRODUCT',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://auraflow-product.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['E-Commerce', '3D', 'WebGL'],
    link: 'https://auraflow-product.vercel.app/'
  },
  {
    id: '07',
    title: 'MACHINERY CENTRE',
    category: 'B2B MACHINERY',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://www.machinerycentre.in/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['B2B', 'Enterprise', 'Catalogue'],
    link: 'https://www.machinerycentre.in/'
  },
  {
    id: '08',
    title: 'ORRO DIGITAL',
    category: 'WEB AGENCY',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://orrodigital.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Agency', 'Creative', 'React'],
    link: 'https://orrodigital.vercel.app/'
  }
];

export default function OurWorkSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        // Calculate the maximum distance we can scroll horizontally
        // It's the total width of the track minus the container width
        // We add some padding (40px) to ensure the last card isn't completely flush with the edge
        const range = trackRef.current.scrollWidth - window.innerWidth + 80;
        setScrollRange(Math.max(0, range));
      }
    };
    
    updateScrollRange();
    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  // Tracks vertical scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Maps vertical scroll (0% to 100%) to horizontal translation in pixels
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative h-[400vh] text-black dark:text-white">
      {/* 
        Sticky Viewport Container:
        No extra background color/pattern applied so it naturally shows the main canvas background behind it.
      */}
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden px-6 md:px-10 py-10">
        
        {/* --- Top Header Area (Fixed while scrolling) --- */}
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 z-20 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">

          <div>
            {/* Category Tag matching Hero style */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-900 dark:text-[#FDB913] font-bold uppercase tracking-widest mb-3">
              <span>[ 01 // SELECTED PORTFOLIO ]</span>
            </div>

            {/* Typography matching Hero styling */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[0.95]">
              OUR <span className="font-['Instrument_Serif'] italic font-normal text-zinc-500 dark:text-zinc-400">FINEST</span> WORK.
            </h2>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm max-w-md leading-relaxed">
            A curated showcase of websites that push boundaries. Built with pixel precision, motion mechanics, and conversion strategy.
          </p>
        </div>

        {/* --- Horizontal Scroll Track --- */}
        <div className="relative flex-1 flex items-center my-auto">
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-8 pl-4 pr-24">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[420px] w-[320px] sm:w-[440px] flex-shrink-0 bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden p-6 flex flex-col justify-between hover:border-black dark:hover:border-[#FDB913] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
              >
                {/* Background Visual Thumbnail */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                </div>

                {/* Card Top Information */}
                <div className="relative z-10 flex justify-between items-center font-mono text-xs">
                  <span className="bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black px-2.5 py-1 rounded font-bold">
                    [{project.id}]
                  </span>
                  <span className="text-zinc-500 font-bold">{project.year}</span>
                </div>

                {/* Card Bottom Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#FDB913] tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] text-black dark:text-white group-hover:text-[#FDB913] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Micro Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Hover Arrow Indicator */}
                <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-black/60 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white opacity-0 group-hover:opacity-100 group-hover:bg-zinc-900 dark:group-hover:bg-[#FDB913] group-hover:text-white dark:group-hover:text-black group-hover:border-zinc-900 dark:group-hover:border-[#FDB913] transition-all duration-300 font-mono">
                  ↗
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* --- Bottom Status Line --- */}
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center items-start justify-between gap-4 font-mono text-xs text-zinc-500 pt-4 mt-16 border-t border-zinc-200 dark:border-zinc-800/80">
          <div>[ SCROLL DOWN TO EXPLORE PROJECTS ]</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-[#FDB913]" />
            <span className="text-black dark:text-white font-bold">8 SELECTED BUILDS</span>
          </div>
        </div>

      </div>
    </section>
  );
}

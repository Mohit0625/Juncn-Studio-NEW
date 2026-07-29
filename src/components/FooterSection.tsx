import React from 'react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full text-black dark:text-white pt-20 pb-12 px-6 md:px-10 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        {/* --- Top Footer Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Mission Statement (Cols 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-none">
              JUNCN<span className="font-['Instrument_Serif'] italic font-normal text-zinc-500 dark:text-zinc-400">.STUDIO</span>
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm max-w-sm leading-relaxed">
              Crafting high-performance digital experiences, bespoke motion mechanics, and cutting-edge web interfaces.
            </p>

            {/* Direct Email Link */}
            <div className="pt-2">
              <a
                href="mailto:hello@juncn.studio"
                className="font-mono text-sm sm:text-base font-bold text-black dark:text-white hover:text-zinc-900 dark:hover:text-[#FDB913] transition-colors underline decoration-zinc-900 dark:decoration-[#FDB913] underline-offset-8"
              >
                HELLO@JUNCN.STUDIO
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Cols 6-8) */}
          <div className="md:col-span-3 space-y-4 font-mono text-xs">
            <span className="text-zinc-500 uppercase tracking-widest block font-bold">
              [ INDEX ]
            </span>
            <ul className="space-y-2.5">
              {['WORK', 'SERVICES', 'PROCESS', 'ESTIMATOR', 'CONTACT'].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#FDB913] transition-colors uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-[#FDB913] transition-colors">0{idx+1} //</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Coordinates (Cols 9-12) */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <span className="text-zinc-500 uppercase tracking-widest block font-bold">
              [ SOCIAL NETWORK ]
            </span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'TWITTER / X', url: 'https://twitter.com' },
                { name: 'GITHUB', url: 'https://github.com' },
                { name: 'LINKEDIN', url: 'https://linkedin.com' },
                { name: 'INSTAGRAM', url: 'https://instagram.com' },
                { name: 'DRIBBBLE', url: 'https://dribbble.com' },
                { name: 'READ.CV', url: 'https://read.cv' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-300 hover:text-white dark:hover:text-black hover:bg-zinc-900 dark:hover:bg-[#FDB913] hover:border-zinc-900 dark:hover:border-[#FDB913] transition-all flex items-center justify-between group"
                >
                  <span className="font-bold text-[11px]">{social.name}</span>
                  <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-white dark:group-hover:text-black">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- GIANT WATERMARK TEXT --- */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/50 overflow-hidden">
          <h1 className="text-[14vw] font-black uppercase tracking-tighter leading-none text-zinc-100 dark:text-zinc-900/60 hover:text-zinc-200 dark:hover:text-zinc-800 transition-colors select-none font-['Cabinet_Grotesk'] text-center">
            JUNCN<span className="font-['Instrument_Serif'] italic font-normal text-zinc-200 dark:text-zinc-800">.STUDIO</span>
          </h1>
        </div>

        {/* --- Bottom Status & Legal Bar --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
          <div>
            © {currentYear} JUNCN STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>[ SYSTEM: 100% OPERATIONAL ]</span>
            <span>[ LOCAL: 28°N 77°E ]</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#privacy" className="hover:text-zinc-900 dark:hover:text-[#FDB913] transition-colors text-zinc-500">[ PRIVACY ]</a>
            <a href="#terms" className="hover:text-zinc-900 dark:hover:text-[#FDB913] transition-colors text-zinc-500">[ TERMS ]</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

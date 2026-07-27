import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WEB DEVELOPMENT',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full text-black dark:text-white py-24 px-6 md:px-10">
      
      {/* Container Wrapper */}
      <div className="max-w-6xl w-full mx-auto space-y-12">
        
        {/* --- Top Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          <div>
            {/* Section Tag (Section 04 / 5th Section) */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#000000] dark:text-[#FDB913] font-bold uppercase tracking-widest mb-3">
              <span>[ 05 // INITIATE TRANSMISSION ]</span>
            </div>

            {/* Typography matching Hero & Services styling */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[0.95]">
              START A <span className="font-['Instrument_Serif'] italic font-normal text-zinc-500 dark:text-zinc-400">PROJECT</span>.
            </h2>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs sm:text-sm max-w-md leading-relaxed">
            Fill out the sentence below to scope your project. No clutter, no endless form fields—just straight to execution.
          </p>
        </div>

        {/* --- Mad-Libs Interactive Sentence Form --- */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Interactive Sentence Container */}
            <div className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] leading-[1.4] sm:leading-[1.5] text-zinc-800 dark:text-zinc-200">
              
              <span>HEY JUNCN, MY NAME IS </span>
              <input
                type="text"
                required
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="inline-block bg-transparent border-b-2 border-zinc-900 dark:border-[#FDB913] text-zinc-900 dark:text-[#FDB913] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-500 dark:focus:border-white px-2 py-1 font-mono text-xl sm:text-3xl md:text-4xl uppercase w-[220px] sm:w-[320px] transition-colors"
              />

              <span> AND MY EMAIL IS </span>
              <input
                type="email"
                required
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="inline-block bg-transparent border-b-2 border-zinc-900 dark:border-[#FDB913] text-zinc-900 dark:text-[#FDB913] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-500 dark:focus:border-white px-2 py-1 font-mono text-xl sm:text-3xl md:text-4xl normal-case w-[260px] sm:w-[380px] transition-colors"
              />

              <span>. I AM LOOKING TO BUILD </span>
              <div className="inline-block relative my-1">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="appearance-none bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-[#FDB913] font-mono text-base sm:text-2xl md:text-3xl uppercase px-4 py-2 rounded-xl focus:outline-none focus:border-zinc-900 dark:focus:border-[#FDB913] cursor-pointer pr-10 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 transition-all"
                >
                  <option value="WEB DEVELOPMENT">A CUSTOM WEBSITE</option>
                  <option value="3D & WEBGL">A 3D / WEBGL EXPERIENCE</option>
                  <option value="UI/UX DESIGN">A PRODUCT UI/UX SYSTEM</option>
                  <option value="E-COMMERCE">AN E-COMMERCE STORE</option>
                  <option value="BRANDING">A BRAND IDENTITY</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-900 dark:text-[#FDB913] font-mono text-xs pointer-events-none">
                  ▼ 
                </span>
              </div>

              <span> . PROJECT DETAILS OR EXTRA NOTES GO HERE . . .</span>
            </div>

            {/* Additional Details Textarea (Optional) */}
            <div className="space-y-2 pt-4">
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                [ EXTRA NOTES / PROJECT BRIEF ]
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your goals, timeline, or links to existing specs..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-[#FDB913] transition-colors resize-none"
              />
            </div>

            {/* Bottom Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-[#FDB913]" />
                <span>[ AVERAGE RESPONSE TIME: &lt; 24 HOURS ]</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-wider border-2 border-zinc-900 dark:border-black hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm active:translate-x-[2px] active:translate-y-[2px]"
              >
                <span>[ TRANSMIT BRIEF ]</span>
                <span className="font-mono text-sm">↗</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-12 rounded-2xl border border-zinc-900 dark:border-[#FDB913] bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur-md space-y-6 text-center max-w-2xl mx-auto"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black flex items-center justify-center font-mono font-bold text-xl mx-auto">
              ✓
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight font-['Cabinet_Grotesk'] text-zinc-900 dark:text-white">
              TRANSMISSION <span className="text-zinc-500 dark:text-[#FDB913]">RECEIVED</span>.
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 font-mono text-xs sm:text-sm leading-relaxed">
              Thank you, <span className="text-zinc-900 dark:text-[#FDB913]">{formData.name}</span>. We have logged your request for <span className="text-zinc-900 dark:text-white">{formData.service}</span> and will reach out to <span className="text-zinc-900 dark:text-[#FDB913]">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white underline uppercase tracking-wider pt-4"
            >
              [ SUBMIT ANOTHER INQUIRY ]
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}

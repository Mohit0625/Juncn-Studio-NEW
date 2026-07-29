import React from 'react';

export function TrustMetricsBar() {
  const metrics = [
    { value: '2021', label: 'FOUNDED IN' },
    { value: '20+', label: 'PROJECTS DELIVERED' },
    { value: '15+', label: 'INDUSTRIES SERVED' },
    { value: '100%', label: 'MOBILE RESPONSIVE' },
  ];

  return (
    <div className="w-full py-10 border-y border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((item, idx) => (
          <div key={idx} className="space-y-1 font-mono">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-['Cabinet_Grotesk'] text-zinc-900 dark:text-[#FDB913] tracking-tight">
              {item.value}
            </div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest">
              [ {item.label} ]
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

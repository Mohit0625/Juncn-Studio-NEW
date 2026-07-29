const fs = require('fs');
const filePath = 'src/components/OurWorkSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update card background
content = content.replace(/bg-zinc-900\/90 border border-zinc-800/g, 'bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800');
// Update hover border
content = content.replace(/hover:border-\[#FDB913\]/g, 'hover:border-black dark:hover:border-[#FDB913]');

// Update year text
content = content.replace(/text-zinc-400 font-bold">\{project.year\}/g, 'text-zinc-500 font-bold">{project.year}');

// Update title text
content = content.replace(/text-white group-hover:text-\[#FDB913\]/g, 'text-black dark:text-white group-hover:text-[#FDB913]');

// Update micro tags
content = content.replace(/bg-zinc-950\/80 border border-zinc-800/g, 'bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800');
content = content.replace(/text-zinc-300/g, 'text-zinc-600 dark:text-zinc-300');

// Update border top in micro tags
content = content.replace(/border-t border-zinc-800\/80/g, 'border-t border-zinc-200 dark:border-zinc-800/80');

// Update the badge
// It's currently: bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black
content = content.replace(/bg-zinc-900 dark:bg-\[#FDB913\] text-white dark:text-black/g, 'bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black');
// Actually it's already this, so it will look good on light card!

// Update hover button
// absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/60 border border-zinc-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#FDB913] group-hover:text-black group-hover:border-[#FDB913] transition-all duration-300 font-mono
content = content.replace(/bg-black\/60 border border-zinc-700/g, 'bg-white/90 dark:bg-black/60 border border-zinc-200 dark:border-zinc-700');
content = content.replace(/text-white opacity-0/g, 'text-black dark:text-white opacity-0');

fs.writeFileSync(filePath, content, 'utf8');

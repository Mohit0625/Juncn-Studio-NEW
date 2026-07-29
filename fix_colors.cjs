const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace emerald-600 with zinc-900
    content = content.replace(/text-emerald-600/g, 'text-zinc-900');
    
    // Replace bg-emerald-400 with bg-zinc-900 text-white
    content = content.replace(/bg-emerald-400 dark:bg-\[#FDB913\] text-black/g, 'bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black');
    
    // In App.tsx Navbar CTA: bg-[#D4FF00] dark:bg-[#FDB913] text-black
    content = content.replace(/bg-\[#D4FF00\] dark:bg-\[#FDB913\] text-black/g, 'bg-zinc-900 dark:bg-[#FDB913] text-white dark:text-black');
    
    // Replace remaining #D4FF00 with #FDB913 (for OurWorkSection and grids)
    content = content.replace(/#D4FF00/g, '#FDB913');
    
    // Also, there are duplicate classes in OurWorkSection like:
    // hover:border-[#FDB913] dark:hover:border-[#FDB913] -> hover:border-[#FDB913]
    content = content.replace(/hover:border-\[#FDB913\] dark:hover:border-\[#FDB913\]/g, 'hover:border-[#FDB913]');
    content = content.replace(/bg-\[#FDB913\] dark:bg-\[#FDB913\]/g, 'bg-[#FDB913]');
    content = content.replace(/text-\[#FDB913\] dark:text-\[#FDB913\]/g, 'text-[#FDB913]');
    content = content.replace(/group-hover:text-\[#FDB913\] dark:group-hover:text-\[#FDB913\]/g, 'group-hover:text-[#FDB913]');
    content = content.replace(/group-hover:bg-\[#FDB913\] dark:group-hover:bg-\[#FDB913\]/g, 'group-hover:bg-[#FDB913]');
    content = content.replace(/group-hover:border-\[#FDB913\] dark:group-hover:border-\[#FDB913\]/g, 'group-hover:border-[#FDB913]');
    content = content.replace(/selection:bg-\[#FDB913\] dark:selection:bg-\[#FDB913\]/g, 'selection:bg-[#FDB913]');

    fs.writeFileSync(filePath, content, 'utf8');
}

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = fs.statSync(dirFile).isDirectory()
                ? walkSync(dirFile, filelist)
                : filelist.concat(dirFile);
        } catch (err) {}
    });
    return filelist;
}

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
files.forEach(replaceInFile);

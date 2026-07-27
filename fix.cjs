const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We already replaced some, but there are leftovers.
    // dark:focus:border-[#D4FF00]
    content = content.replace(/dark:focus:border-\[#D4FF00\]/g, 'dark:focus:border-[#FDB913]');
    
    // hover:border-[#D4FF00] -> this should be hover:border-[#D4FF00] dark:hover:border-[#FDB913]
    content = content.replace(/hover:border-\[#D4FF00\](?!\s*dark:)/g, 'hover:border-[#D4FF00] dark:hover:border-[#FDB913]');
    
    // group-hover:text-[#D4FF00] -> group-hover:text-[#D4FF00] dark:group-hover:text-[#FDB913]
    content = content.replace(/group-hover:text-\[#D4FF00\](?!\s*dark:)/g, 'group-hover:text-[#D4FF00] dark:group-hover:text-[#FDB913]');
    // Wait, OurWorkSection.tsx:154 has: group-hover:text-[#D4FF00] dark:text-[#FDB913]
    content = content.replace(/group-hover:text-\[#D4FF00\] dark:text-\[#FDB913\]/g, 'group-hover:text-[#D4FF00] dark:group-hover:text-[#FDB913] text-white dark:text-white'); // wait, let's just do it manually for OurWorkSection.tsx
    
    // let's just replace all remaining #D4FF00 in dark: contexts or add dark: contexts if missing
    
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

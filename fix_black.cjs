const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Do not touch grid gradients or things that don't look like utility classes
    content = content.replace(/bg-\[#000000\]/g, 'bg-zinc-900');
    content = content.replace(/text-\[#000000\]/g, 'text-zinc-900');
    content = content.replace(/border-\[#000000\]/g, 'border-zinc-900');
    
    // Fix the variables in ProcessSection
    content = content.replace(/\[--accent:#000000\]/g, '[--accent:#18181b]'); // zinc-900 hex

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

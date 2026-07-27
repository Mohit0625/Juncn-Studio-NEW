const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace dark:something-[#D4FF00]
    content = content.replace(/dark:([a-zA-Z\-]+)-\[#D4FF00\]/g, 'dark:$1-[#FDB913]');
    
    // Replace dark:[--accent:#D4FF00]
    content = content.replace(/dark:\[--accent:#D4FF00\]/g, 'dark:[--accent:#FDB913]');
    
    // Replace rgb inside dark:shadow
    content = content.replace(/dark:shadow-\[([^\]]+)rgba\(212,255,0,(.*?)\)\]/g, 'dark:shadow-[$1rgba(253,185,19,$2)]');
    
    // Replace hex inside dark:shadow
    content = content.replace(/dark:shadow-\[([^\]]+)#D4FF00\]/g, 'dark:shadow-[$1#FDB913]');

    // For occurrences without dark:, we need to append dark: variants
    // BUT only if it doesn't already have one!
    // E.g. bg-[#D4FF00] followed by dark:bg-[#something] shouldn't happen, but let's be careful.
    
    content = content.replace(/bg-\[#D4FF00\](\/([0-9]+))?/g, (match, p1) => {
        // if this was part of a dark: class, we already changed it in the first pass!
        // wait, the regex for dark is dark:bg-[#FDB913]. 
        // Oh, wait, the first pass replaced dark:bg-[#D4FF00] to dark:bg-[#FDB913].
        // This second pass will match bg-[#D4FF00] if it's not prefixed with dark:. 
        // Let's use a negative lookbehind if JS supports it, which it does.
        return match;
    });
    
    content = content.replace(/(?<!dark:)bg-\[#D4FF00\](?!\/)/g, 'bg-[#D4FF00] dark:bg-[#FDB913]');
    content = content.replace(/(?<!dark:)text-\[#D4FF00\]/g, 'text-[#D4FF00] dark:text-[#FDB913]');
    content = content.replace(/(?<!dark:selection:)selection:bg-\[#D4FF00\]/g, 'selection:bg-[#D4FF00] dark:selection:bg-[#FDB913]');
    
    // Also, there are shadows that are not prefixed with dark:, we want them to have dark: version
    content = content.replace(/shadow-\[0_0_20px_rgba\(212,255,0,0\.2\)\]/g, 'shadow-[0_0_20px_rgba(212,255,0,0.2)] dark:shadow-[0_0_20px_rgba(253,185,19,0.2)]');

    fs.writeFileSync(filePath, content, 'utf8');
}

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = fs.statSync(dirFile).isDirectory()
                ? walkSync(dirFile, filelist)
                : filelist.concat(dirFile);
        } catch (err) {
            if (err.code === 'ENOENT' || err.code === 'EACCES') return;
        }
    });
    return filelist;
}

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(replaceInFile);
console.log('Replaced in ' + files.length + ' files');

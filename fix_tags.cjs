const fs = require('fs');
let content = fs.readFileSync('src/components/OurWorkSection.tsx', 'utf8');

// I'll replace the first <div that was changed and closing div.
content = content.replace(/<\/div>\n            \}\)\)\}\n          <\/motion.div>/, '</a>\n            ))}\n          </motion.div>');

// Check if I used `<a`
const match = content.match(/<a[\s\S]*?className="group relative h-\[420px\]/);
if (match) {
   // it was replaced correctly initially, let's just make sure the closing tag matches.
   // But wait, the script above might have failed if it was:
   //           </div>
   //         ))}
   //       </motion.div>
}
fs.writeFileSync('src/components/OurWorkSection.tsx', content);


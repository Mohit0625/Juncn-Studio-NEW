const fs = require('fs');
let content = fs.readFileSync('src/components/OurWorkSection.tsx', 'utf8');

// find the last </div> before ))}
const index = content.lastIndexOf('</div>\n            ))}');
if (index !== -1) {
    content = content.substring(0, index) + '</a>\n            ))}' + content.substring(index + '</div>\n            ))}'.length);
}

fs.writeFileSync('src/components/OurWorkSection.tsx', content);

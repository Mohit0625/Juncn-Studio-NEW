const fs = require('fs');

let content = fs.readFileSync('src/components/OurWorkSection.tsx', 'utf8');

const newProjectsArray = `const PROJECTS = [
  {
    id: '01',
    title: 'INKEVERSE',
    category: 'TATTOO STUDIO',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop',
    tags: ['Creative', 'Portfolio', 'UI/UX'],
    link: 'https://inkverse-tattoo.vercel.app/'
  },
  {
    id: '02',
    title: 'HARBORESTONE',
    category: 'REAL ESTATE',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    tags: ['Property', 'Listing', 'Next.js'],
    link: 'https://harborstone-real-estate.vercel.app/'
  },
  {
    id: '03',
    title: 'ARTICFLOW',
    category: 'HVAC SERVICES',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop',
    tags: ['Business', 'Corporate', 'Webflow'],
    link: 'https://artic-flow-hvac.vercel.app/'
  },
  {
    id: '04',
    title: 'DR. SARAH AHMED',
    category: 'DOCTOR PORTFOLIO',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop',
    tags: ['Medical', 'Personal', 'React'],
    link: 'https://doctor-demo-sigma.vercel.app/'
  },
  {
    id: '05',
    title: 'LENS & LIGHT',
    category: 'PHOTOGRAPHY PORTFOLIO',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    tags: ['Gallery', 'Visuals', 'Design'],
    link: 'https://lens-photo.vercel.app/'
  },
  {
    id: '06',
    title: 'AURA FLOW',
    category: 'SAMPLE PRODUCT',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['E-Commerce', '3D', 'WebGL'],
    link: 'https://auraflow-product.vercel.app/'
  },
  {
    id: '07',
    title: 'MACHINERY CENTRE',
    category: 'B2B MACHINERY',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    tags: ['B2B', 'Enterprise', 'Catalogue'],
    link: 'https://www.machinerycentre.in/'
  },
  {
    id: '08',
    title: 'ORRO DIGITAL',
    category: 'WEB AGENCY',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Agency', 'Creative', 'React'],
    link: 'https://orrodigital.vercel.app/'
  }
];`;

content = content.replace(/const PROJECTS = \[[\s\S]*?\];/, newProjectsArray);

// Change <div className="group relative h-[420px]... > to <a href={project.link} target="_blank" rel="noopener noreferrer" className="group relative h-[420px]... >
content = content.replace(/<div\s+key=\{project\.id\}\s+className="group/g, '<a\n                key={project.id}\n                href={project.link}\n                target="_blank"\n                rel="noopener noreferrer"\n                className="group');
content = content.replace(/<\/div>\n            \}\)\)\}\n          <\/motion.div>/, '</a>\n            ))}\n          </motion.div>');

// Also need to update the text that says "7 SELECTED BUILDS" to "8 SELECTED BUILDS"
content = content.replace(/7 SELECTED BUILDS/g, '8 SELECTED BUILDS');
// Update comment
content = content.replace(/\/\/ Sample Data for 7 Projects/, '// Sample Data for 8 Projects');

fs.writeFileSync('src/components/OurWorkSection.tsx', content);


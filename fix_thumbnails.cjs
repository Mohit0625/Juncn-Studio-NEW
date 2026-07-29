const fs = require('fs');

let content = fs.readFileSync('src/components/OurWorkSection.tsx', 'utf8');

const newProjectsArray = `const PROJECTS = [
  {
    id: '01',
    title: 'INKEVERSE',
    category: 'TATTOO STUDIO',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://inkverse-tattoo.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Creative', 'Portfolio', 'UI/UX'],
    link: 'https://inkverse-tattoo.vercel.app/'
  },
  {
    id: '02',
    title: 'HARBORESTONE',
    category: 'REAL ESTATE',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://harborstone-real-estate.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Property', 'Listing', 'Next.js'],
    link: 'https://harborstone-real-estate.vercel.app/'
  },
  {
    id: '03',
    title: 'ARTICFLOW',
    category: 'HVAC SERVICES',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://artic-flow-hvac.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Business', 'Corporate', 'Webflow'],
    link: 'https://artic-flow-hvac.vercel.app/'
  },
  {
    id: '04',
    title: 'DR. SARAH AHMED',
    category: 'DOCTOR PORTFOLIO',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://doctor-demo-sigma.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Medical', 'Personal', 'React'],
    link: 'https://doctor-demo-sigma.vercel.app/'
  },
  {
    id: '05',
    title: 'LENS & LIGHT',
    category: 'PHOTOGRAPHY PORTFOLIO',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://lens-photo.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Gallery', 'Visuals', 'Design'],
    link: 'https://lens-photo.vercel.app/'
  },
  {
    id: '06',
    title: 'AURA FLOW',
    category: 'SAMPLE PRODUCT',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://auraflow-product.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['E-Commerce', '3D', 'WebGL'],
    link: 'https://auraflow-product.vercel.app/'
  },
  {
    id: '07',
    title: 'MACHINERY CENTRE',
    category: 'B2B MACHINERY',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://www.machinerycentre.in/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['B2B', 'Enterprise', 'Catalogue'],
    link: 'https://www.machinerycentre.in/'
  },
  {
    id: '08',
    title: 'ORRO DIGITAL',
    category: 'WEB AGENCY',
    year: '2024',
    image: 'https://api.microlink.io/?url=https://orrodigital.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    tags: ['Agency', 'Creative', 'React'],
    link: 'https://orrodigital.vercel.app/'
  }
];`;

content = content.replace(/const PROJECTS = \[[\s\S]*?\];/, newProjectsArray);

fs.writeFileSync('src/components/OurWorkSection.tsx', content);


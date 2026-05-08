const fs = require('fs');
let code = fs.readFileSync('src/components/sections/Properties.tsx', 'utf-8');

const galleryImages = {
  Residential: [
    '"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"'
  ],
  Commercial: [
    '"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"'
  ],
  Industrial: [
    '"https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"'
  ]
};

let match;
const regex = /category:\s*"([^"]+)",[\s\S]*?type:\s*"([^"]+)"\n\s*}/g;
let modifiedCode = code;

while ((match = regex.exec(code)) !== null) {
  let category = match[1];
  let originalBlock = match[0];
  if (!originalBlock.includes('gallery:')) {
    let images = galleryImages[category] || galleryImages['Residential'];
    let newBlock = originalBlock.replace(/type:\s*"([^"]+)"/, `type: "$1",\n    gallery: [${images.join(', ')}]`);
    modifiedCode = modifiedCode.replace(originalBlock, newBlock);
  }
}

fs.writeFileSync('src/components/sections/Properties.tsx', modifiedCode);

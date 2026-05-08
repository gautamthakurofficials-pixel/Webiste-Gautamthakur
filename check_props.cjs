const fs = require('fs');

const code = fs.readFileSync('src/components/sections/Properties.tsx', 'utf-8');
const propertiesMatch = code.match(/const PROPERTIES = \[([\s\S]*?)\];/);
if (propertiesMatch) {
  console.log("Found PROPERTIES array");
  let missingImage = 0;
  let emptyGallery = 0;
  
  // Just count how many "image:" strings are in this block
  const imageMatches = propertiesMatch[1].match(/image:\s*".*?"/g);
  console.log("Number of images: ", imageMatches ? imageMatches.length : 0);
  
  const galleryMatches = propertiesMatch[1].match(/gallery:\s*\[.*\]/g);
  console.log("Number of galleries: ", galleryMatches ? galleryMatches.length : 0);
} else {
  console.log("PROPERTIES not found");
}


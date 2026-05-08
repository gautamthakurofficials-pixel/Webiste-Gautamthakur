const fs = require('fs');
const code = fs.readFileSync('src/components/sections/Properties.tsx', 'utf-8');
const match = code.match(/const CITIES = \[([\s\S]*?)\];/);
if (match) {
  const images = match[1].match(/image:\s*".*?"/g);
  console.log("CITIES images count:", images ? images.length : 0);
}

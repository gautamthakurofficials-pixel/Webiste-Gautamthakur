const fs = require('fs');
console.log("Chandigarh:", fs.statSync('public/chandigarh-cover.jpg').size);
console.log("Dehradun:", fs.statSync('public/dehradun-cover.jpg').size);

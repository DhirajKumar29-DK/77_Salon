const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace 'font-playfair italic' with 'font-antic'
  // Also replace 'font-playfair' and 'font-garamond' with 'font-antic'
  let newContent = content
    .replace(/font-playfair italic/g, 'font-antic')
    .replace(/font-playfair/g, 'font-antic')
    .replace(/font-garamond/g, 'font-antic');
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Updated:', file);
  }
});

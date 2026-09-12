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
  // Match href="/book", href="/book?..."
  const regex1 = /href=[\"\'\`]\/book(\?[^\"\'\`]*)?[\"\'\`]/g;
  // Match href={`/book?...`}
  const regex2 = /href=\{\`\/book(\?[^\`]*)\`\}/g;
  
  const newContent = content.replace(regex1, 'href="/contact"').replace(regex2, 'href="/contact"');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Updated:', file);
  }
});

const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../assets');
const target = path.resolve(__dirname, '../dist/assets');

fs.cpSync(source, target, { recursive: true });
console.log('Copied assets to dist/assets');

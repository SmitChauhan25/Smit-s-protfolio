const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'prisma-studio', 'dist');
const dest = path.join(__dirname, 'dist');

if (fs.existsSync(src)) {
  fs.cpSync(src, dest, { recursive: true });
  console.log('✓ Successfully copied prisma-studio/dist to root dist/');
} else {
  console.error('✗ Source dist directory not found:', src);
  process.exit(1);
}

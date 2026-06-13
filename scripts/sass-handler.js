const path = require('path');
const fs = require('fs');
const sass = require('sass');

const args = process.argv.slice(2);

const result = sass.compile(args[0], {
  style: 'expanded',
  loadPaths: [path.resolve('node_modules')],
  importers: [{
    canonicalize(url) {
      if (url.startsWith('~')) {
        const resolved = path.resolve('node_modules', url.slice(1));
        return new URL('file://' + resolved);
      }
      return null;
    },
    load(canonicalUrl) {
      const fp = canonicalUrl.pathname.startsWith('/') ? canonicalUrl.pathname : '/' + canonicalUrl.pathname;
      return { contents: fs.readFileSync(fp, 'utf8'), syntax: 'scss' };
    }
  }]
});

const writeFileRecursive = function(filePath, buffer) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, buffer);
};

writeFileRecursive(args[1], result.css);

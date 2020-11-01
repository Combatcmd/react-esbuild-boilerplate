const { build, cliopts } = require('estrella');
const Path = require('path');

build({
  entry: 'src/index.jsx',
  outfile: 'public/app.js',
  bundle: true,
  sourcemap: true,
  format: 'cjs',
  define: { 'process.env.NODE_ENV': 'development' },
});

cliopts.watch &&
  require('serve-http').createServer({
    port: 8181,
    pubdir: Path.join(__dirname, 'public'),
  });

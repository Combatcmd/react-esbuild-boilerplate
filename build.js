const { build, cliopts } = require('estrella');
const Path = require('path');

build({
  entry: 'src/index.jsx',
  outfile: 'public/app.js',
  bundle: true,
  minify: true,
  sourcemap: true,
  format: 'esm',
  define: {
    'process.env.NODE_ENV': cliopts.watch ? 'development' : 'production',
  },
  loader: {
    '.js': 'jsx',
  },
});

cliopts.watch &&
  require('serve-http').createServer({
    port: 8181,
    pubdir: Path.join(__dirname, 'public'),
  });

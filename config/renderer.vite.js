const { join } = require('path');
const vue = require('@vitejs/plugin-vue');
const { chrome } = require('./electron-dep-versions');
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  root: join(process.cwd(), './src/renderer'),
  alias: {
    '@/': join(process.cwd(), './src/renderer') + '/',
  },
  plugins: [vue()],
  build: {
    target: `chrome${chrome}`,
    polyfillDynamicImport: false,
    base: '/',
    outDir: '../../dist/source/renderer',
    assetsDir: '.',
    rollupOptions: {
      external: require('./external-packages').default,
      plugins: [
        {
          name: '@rollup/plugin-cjs2esm',
          transform(code, filename) {
            if (filename.includes('/node_modules/')) {
              return code;
            }

            const cjsRegexp = /(const|let|var)[\n\s]+(\w+)[\n\s]*=[\n\s]*require\(["|'](.+)["|']\)/g;
            const res = code.match(cjsRegexp);
            if (res) {
              // const Store = require('electron-store') -> import Store from 'electron-store'
              code = code.replace(cjsRegexp, `import $2 from '$3'`);
            }
            return code;
          },
        },
      ],
    },
    // publicPath,
  },
};

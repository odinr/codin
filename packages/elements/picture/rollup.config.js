/**
 * @license
 */

import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const config = (module=true) => {
  const conf = {
    name: 'picture',
    input: 'picture.js',
    output: {
      file: module ? 'dist/picture.mjs' : 'dist/picture.bundled.js',
      format: module ? 'esm' : 'umd',
    },
    onwarn(warning) {
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      terser({
        warnings: true,
        mangle: {
          module: module,
        },
      }),
      filesize({
        showBrotliSize: true,
      }),
    ],
  };
  if (module) {
    conf.plugins.push(babel({
      presets: [['@babel/preset-env', {
        modules: false,
        targets: {esmodules: true},
      }]],
    }));
  } else {
    conf.plugins.push(babel({
      presets: [['@babel/preset-env', {
        modules: false,
      }]],
    }));
    conf.plugins.push(resolve());
  }
  return conf;
};

export default [config(true), config(false)];

import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const config = (module=true) => {
  const conf = {
    input: 'index.js',
    output: {
      file: `dist/intersection.${module?'mjs':'js'}`,
      format: module ? 'es' : 'iife',
      name: 'cwcIntersection',
      exports: 'named'
    },
    plugins: [
      terser({
        warnings: true,
        module: module,
      }),
      filesize(),
      babel({
        presets: [['@babel/preset-env', {
          targets: {esmodules: module},
        }]],
      })
    ],
  };
  module || conf.plugins.push(resolve());
  return conf;
};

export default [config(false), config(true)];

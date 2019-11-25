import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import preset from "@babel/preset-env";
import { terser } from "rollup-plugin-terser";
import camelCase from "lodash.camelcase";
import progress from "rollup-plugin-progress";
import filesize from "rollup-plugin-filesize";

const pkg = require(`${process.cwd()}/package.json`);

export default {
  input: pkg.main,
  output: {
    name: camelCase(pkg.name),
    format: "esm",
    file: pkg.browser
  },
  plugins: [
    progress({ clearline: false }),
    filesize({ showMinifiedSize: false }),
    resolve(),
    babel({ presets: [[preset, { targets: { esmodules: true } }]] }),
    terser()
  ]
};

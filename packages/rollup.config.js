import resolve from "rollup-plugin-node-resolve";
import camelCase from "lodash.camelcase";
import progress from "rollup-plugin-progress";
import filesize from "rollup-plugin-filesize";

import { terser } from "rollup-plugin-terser";

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
    terser({
      output: {
        comments: false
      },
      compress: { drop_console: true }
    })
  ]
};

import {
  IsExternal,
  RollupFileOptions
} from 'rollup';

const path = require('path');
const colors = require('colors');

const terser = require('rollup-plugin-terser').terser;
const filesize = require('rollup-plugin-filesize');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

export interface PackageJson {
  name: string;
  main: string;
  dependencies?: string[];
}

export type CwcConfigBuildFormat = 'es' | 'iife' | 'umd';

export interface CwcConfigBuild {
  format: CwcConfigBuildFormat;
  name?: string;
  file?: string;
  external?: IsExternal|string[]|undefined;
  babel?: any;
  compress?: Boolean;
}

export interface BuildConfig {
  builds: CwcConfigBuild[];
}

export interface BuildOptions {
  output?: string;
  path?: string;
  compress?: Boolean;
  verbose?: Boolean;
}

export function isExternal(dependencies: string[]): IsExternal {
  const dependencyPackages = Object.keys(dependencies);
  return (id: string) => !!dependencyPackages.find((dep) => id.includes(dep));
}

export function createBuildConfigs(pkg: PackageJson, config: BuildConfig, options: BuildOptions): RollupFileOptions[] {
  const createOptions = createRollupOption(pkg, options);
  return config.builds.map(createOptions);
}

function createRollupOption(pkg: PackageJson, options: BuildOptions) {
  const basePath = options.path || process.cwd();
  const outputfile = (filename: string, dir: string = 'dist') => path.resolve(basePath, dir, filename);
  return function(build: CwcConfigBuild): RollupFileOptions {
    const {format, name, file, external} = build;
    const build_name = name || pkg.name.replace(/@\w*\//, '').replace('-', '');
    const dir = options.output || 'dist';
    return {
      input: pkg.main || 'index.js',
      output: {
        format,
        name: build_name,
        file: file ? outputfile(file, dir) : outputfile(`${build_name}.${format}.js`, dir),
        exports: 'named'
      },
      external: external === undefined && (format === 'es' && pkg.dependencies)
        ? isExternal(pkg.dependencies)
        : external,
      plugins: getPlugins(build, options),
    };
  };
}

function getPlugins(build: CwcConfigBuild, options: BuildOptions) {
  const {format} = build;
  const {compress, verbose} = options;
  const plugins = [
    resolve(),
    // verbose && filesize(),
    compress && terser({ warnings: true, module: true }),
    babel(build.babel  || {
      presets: [['@babel/preset-env', {
        targets: {esmodules: format === 'es'},
      }]],
    }),
  ];
  return plugins;
}



export default createBuildConfigs;

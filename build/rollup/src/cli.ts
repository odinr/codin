#!/usr/bin/env node
import {
 rollup,
 RollupFileOptions,
 RollupSingleFileBuild,
 OutputChunk
} from 'rollup';

import {
 createBuildConfigs,
 BuildConfig,
 CwcConfigBuild,
} from './rollup.config';

import {
 ReadPkgUp
} from './_type';

export interface RuntimeOptions {
 path: string;
 verbose: Boolean;
}

const colors = require('colors');
const fileSize = require('filesize');
const boxen = require('boxen');
const {
 resolve,
 dirname,
 relative
} = require('path');

const configFile = 'cwc.config.js';
const defaultBuilds: CwcConfigBuild[] = [
 { format: 'es' },
 { format: 'iife' },
];

function getConfig({path, verbose}: RuntimeOptions) {
 const file = resolve(path, configFile);
 try {
  const config = require(resolve(path, configFile)).default;
  config.builds = config.builds || defaultBuilds;
  return config;
 } catch (error) {
  verbose && console.log(colors.magenta('!', file));
  return {builds: defaultBuilds};
 }
}

function logBundle(build: RollupFileOptions, bundle: RollupSingleFileBuild) {
 const modules = bundle.modules.map((m) => {
  return {
   file: m.id,
   size: Buffer.byteLength(m.originalCode),
  };
 });
 return (chunk: OutputChunk) => {

  console.log();
  console.log('#', resolve(process.cwd(), build.input), build.output.format);
  bundle.imports.forEach((m) => console.log(colors.blue('-', m)));
  modules.forEach(({file, size}) => {
   console.log(colors.green.dim('+', file), colors.dim(fileSize(size)));
  });

  console.log(
   colors.yellow.bold(build.output.file),
   colors.dim.bold(fileSize(modules.reduce((sum, {size}) => sum + size, 0))),
   colors.bold('=>', fileSize(Buffer.byteLength(chunk.code)))
  );
 };
}

function createBundle(res: ReadPkgUp) {
 const path = dirname(res.path);
 const options = {
  path: dirname(res.path),
  compress: true,
  verbose: true,
 };
 const config = getConfig(options);
 const output = (build: RollupFileOptions) => (bundle: RollupSingleFileBuild) => {
  build.output && bundle.write(build.output).then(options.verbose && logBundle(build, bundle));
 };
 const build = (o: RollupFileOptions) => rollup(o).then(output(o));
 createBuildConfigs(res.pkg, config, options).forEach(build);
}

require('read-pkg-up')().then(createBundle);

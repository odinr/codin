"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const colors = require('colors');
const terser = require('rollup-plugin-terser').terser;
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
function isExternal(dependencies) {
    const dependencyPackages = Object.keys(dependencies);
    return (id) => !!dependencyPackages.find((dep) => id.includes(dep));
}
exports.isExternal = isExternal;
function createBuildConfigs(pkg, config, options) {
    const createOptions = createRollupOption(pkg, options);
    return config.builds.map(createOptions);
}
exports.createBuildConfigs = createBuildConfigs;
function createRollupOption(pkg, options) {
    const basePath = options.path || process.cwd();
    const outputfile = (filename, dir = 'dist') => path.resolve(basePath, dir, filename);
    return function (build) {
        const { format, name, file, external } = build;
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
function getPlugins(build, options) {
    const { format } = build;
    const { compress, verbose } = options;
    const plugins = [
        resolve(),
        compress && terser({ warnings: true, module: true }),
        babel(build.babel || {
            presets: [['@babel/preset-env', {
                        targets: { esmodules: format === 'es' },
                    }]],
        }),
    ];
    return plugins;
}
exports.default = createBuildConfigs;
//# sourceMappingURL=rollup.config.js.map
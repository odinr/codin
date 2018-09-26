import { ModuleFormat, IsExternal, RollupFileOptions } from 'rollup';
export declare function isExternal(dependencies: string[]): IsExternal;
export interface PackageJsonRollup {
    [index: string]: string | undefined;
    es?: string;
    umd?: string;
    iife?: string;
}
export interface PackageJson {
    name: string;
    main: string;
    rollup: PackageJsonRollup;
    dependencies?: string[];
}
export declare function createConfig(pkg: PackageJson, format: ModuleFormat): RollupFileOptions;
export default function (): RollupFileOptions[];

import { PackageJson } from "./rollup.config";

declare module 'rollup-plugin-*';

declare interface ReadPkgUp {
 pkg: PackageJson,
 path: string
}
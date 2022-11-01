import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import typescript from '@rollup/plugin-typescript';

const plugins = [
  nodeResolve(),
  css(),
  terser(),
  typescript()
];

export default [
  {
    input: 'src/fontawesome-svg-loader.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      name: 'awesomeLoader'
    },
    plugins: plugins
  }
];

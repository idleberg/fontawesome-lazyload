import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';

const plugins = [
  nodeResolve(),
  postcss(),
  terser(),
  typescript()
];

export default [
  {
    input: 'src/fontawesome-svg-loader.ts',
    output: {
      dir: 'dist',
      format: 'iife',
      name: 'awesomeLoader'
    },
    plugins: plugins
  }
];

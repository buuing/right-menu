import path from 'path'

import ts from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import styles from 'rollup-plugin-styles'

import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

import eslint from '@rollup/plugin-eslint'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.jsdelivr,
      format: 'umd',
      name: 'RightMenu',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    eslint({
      include: ['src/**/*.js', 'src/**/*.ts'],
    }),
    styles(),
    ts({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      extensions: ['.js', '.ts'],
      declaration: true,
    }),
    json(),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    livereload(),
    serve({
      open: true,
      port: 11000,
      openPage: '/examples/index.html',
      contentBase: './',
    }),
  ],
}

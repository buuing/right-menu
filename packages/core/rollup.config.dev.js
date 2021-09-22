import path from 'path'
import ts from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import styles from 'rollup-plugin-styles';
// import eslint from '@rollup/plugin-eslint'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `${pkg.browser}.js`,
      format: 'umd',
      name: 'RightMenu',
      sourcemap: true,
    },
    {
      file: `${pkg.module}.js`,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    styles(),
    ts({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      extensions: ['.js', '.ts']
    }),
    resolve({
      jsnext: true, 
      main: true 
    }),
    commonjs(),
    json(),
    // eslint({
    //   throwOnError: true,
    //   throwOnWarning: true,
    //   include: ['src/**'],
    //   exclude: ['node_modules/**']
    // }),
    babel({ exclude: 'node_modules/**' }),
    livereload(),
    serve({
      open: true,
      openPage: '/examples/index.html',
      contentBase: './'
    }),
  ]
}

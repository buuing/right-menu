import path from 'path'
import typescript from 'rollup-plugin-typescript2'
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
      format: 'es',
      name: 'RightMenu',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      extensions: ['.js', '.ts']
    }),
    json(),
    // styles(),
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

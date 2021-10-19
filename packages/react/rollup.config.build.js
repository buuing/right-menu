import path from 'path'
import pkg from './package.json'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import ts from 'rollup-plugin-typescript2'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default  {
  input: './src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      globals: {
        "react": "React"
      }
    }
  ],
  plugins: [
    ts({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
      check: true,
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    json()
  ],
  external: ['react']
}

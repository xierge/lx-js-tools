/*
 * @Date: 2023-05-31 16:55:13
 * @LastEditors: 李鹏玺 2899952565@qq.com
 * @LastEditTime: 2023-05-31 17:26:29
 * @FilePath: /lx-js-tools/rollup.config.mjs
 * @description:
 */
import rollupTypescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser';
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
        file: "dist/bundle.esm.js",
        format: "es",
      },
  ],
  plugins:[
    rollupTypescript(),
    terser()
  ]
};

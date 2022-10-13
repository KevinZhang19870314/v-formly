import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";

const config = {
  input: "./src/formly.js",
  output: {
    file: "./lib/v-formly.umd.js",
    exports: "named",
    format: "umd",
    name: "v-formly",
    globals: {
      vue: "Vue",
    },
  },
  external: ["ajv", "vue", "core-js", "ant-design-vue", /@babel\/runtime/],
  plugins: [
    nodeResolve(),
    postcss(),
    vue(),
    alias({
      entries: {
        ["@"]: path.resolve(__dirname, "src"),
      },
    }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: "runtime",
    }),
    commonjs(),
    uglify(),
  ],
};

export default config;

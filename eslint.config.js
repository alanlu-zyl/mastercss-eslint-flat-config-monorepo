import css from "@master/eslint-config-css/flat";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  css,
  // Legacy config
  ...compat.config({
    overrides: [
      {
        files: ["*.vue"],
        parser: "vue-eslint-parser",
      },
    ],
  }),
];

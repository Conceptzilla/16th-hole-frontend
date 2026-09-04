import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "coverage/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Art-directed compositions rely on CSS-controlled native image elements.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;

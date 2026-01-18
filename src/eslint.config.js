import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      // your custom rules here
    },
  },
];

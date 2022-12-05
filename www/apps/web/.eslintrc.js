module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  extends: ["next", "next/core-web-vitals", "custom"],
  rules: {
    "@next/next/no-html-link-for-pages": "error",
    "react/jsx-key": "error",
  },
}

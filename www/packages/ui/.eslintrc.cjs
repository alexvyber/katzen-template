module.exports = {
  parserOptions: {
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    // "plugin:import/recommended"
    // "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", "ts", "tsx"],
    },
  },
  plugins: ["react-refresh", "import"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react*",
            group: "builtin",
          },
          {
            pattern: "@/*",
            group: "internal",
            position: "after",
          },
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["react*"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    // "sort-imports": [
    //   "error",
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    //     allowSeparatedGroups: false,
    //   },
    // ],
  },
  // extends: ["plugin:prettier/recommended"],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 11,
    // ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
      // experimentalObjectRestSpread: true,
    }
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ["prettier", "react", "import"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    _: "readonly",
    "?.": "readonly"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  // add your custom rules here
  ignorePatterns: ["./assets/js/app.js", "**/js/*.js"],
  rules: {
    "no-debugger": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": ["off", {}],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ],
    "import/no-unresolved": [0, { commonjs: false, amd: false }],
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/export": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "import/no-anonymous-default-export": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline"
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      0,
      { components: ["Link", "a"], aspects: ["invalidHref"] }
    ],
    "import/order": "off",
    "react/jsx-key": "off"
  }
};

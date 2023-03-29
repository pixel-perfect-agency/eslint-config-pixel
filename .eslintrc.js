module.exports = {
    parserOptions: { tsconfigRootDir: __dirname },
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "plugin:eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
                quoteProps: "consistent",
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/ban-types": "error",
        "react/hook-use-state": "warn",
        "react/self-closing-comp": [
            "warn",
            {
                component: true,
                html: true,
            },
        ],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
};

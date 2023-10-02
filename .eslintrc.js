module.exports = {
    parserOptions: { project: './tsconfig.json' },
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                quoteProps: 'consistent',
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        'react/hook-use-state': 'warn',
        'react/self-closing-comp': [
            'warn',
            {
                component: true,
                html: true,
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['./*'],
                        message:
                            'Please use absolute imports instead. Take a look at the paths in tsconfig.json for available options.',
                    },
                ],
            },
        ],
    },
};

const glob = require('glob')

const globPattern = './packages/**/tsconfig.json'

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: glob.sync(globPattern)
    },
    plugins: ['@typescript-eslint', 'import'],
    settings: {
        'import/extensions': ['.ts'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
            typescript: {
                directory: globPattern
            }
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // Turns off all rules that are unnecessary or might conflict with Prettier
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
        // Ends here
    ],
    rules: {
        'prettier/prettier': 'warn',

        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'], // TODO: maybe turn off
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': ['error', { allowAsParameter: true }],
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true
            }
        ],
        '@typescript-eslint/camelcase': 'off', // TODO: turn on

        'import/no-unresolved': 2,
        'import/named': 2,
        'import/default': 2,
        'import/namespace': 2,
        'import/export': 2,

        'import/no-named-as-default': 1,
        'import/no-named-as-default-member': 1,
        'import/no-duplicates': 1,
        'import/first': 1,
        'import/order': [
            1,
            {
                groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
                'newlines-between': 'never'
            }
        ],
        'import/no-useless-path-segments': 2,
        'import/no-self-import': 2,
        'import/no-absolute-path': 2,
        'import/no-commonjs': 2,
        'import/no-amd': 2,
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: true,
                peerDependencies: false,
                optionalDependencies: false
            }
        ],

        'import/exports-last': 1,
        'import/group-exports': 1,
        // 'import/no-default-export': 2,
        'import/no-mutable-exports': 2,
        'import/no-named-default': 2,

        // Best Practices (https://eslint.org/docs/rules/#best-practices)
        curly: ['warn', 'all'],
        'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
        eqeqeq: ['warn', 'always'],
        'guard-for-in': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'wrap-iife': ['error', 'inside'],
        yoda: ['error', 'never', { exceptRange: true }],

        // Stylistic Issues (https://eslint.org/docs/rules/#stylistic-issues)
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    // ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-unneeded-ternary': 'error',
        'operator-assignment': ['error', 'always'],
        'prefer-object-spread': 'error',
        'spaced-comment': ['warn', 'always', { block: { balanced: true } }],

        // ECMAScript 6 (https://eslint.org/docs/rules/#ecmascript-6)
        'arrow-body-style': ['error', 'as-needed'],
        'no-confusing-arrow': ['error', { allowParens: true }],
        'no-var': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error'
    }
}

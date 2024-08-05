import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    { files: ['src/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.node } },
    {
        rules: {
            // 'no-console': 'warn',
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            eqeqeq: 'error',
            'no-var': 'error',
            'no-unused-vars': 'error',
            'no-use-before-define': 'error'
        }
    },
    pluginJs.configs.recommended
];

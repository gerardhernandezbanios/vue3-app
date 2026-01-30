// eslint.config.cjs
// Minimal bridge: reexport legacy config if present
// If tienes .eslintrc.cjs, esto intentará usarla; si no, define reglas básicas.
let legacy = {};
try {
  legacy = require('./.eslintrc.cjs');
} catch (e) {
  // no legacy config found, fallback to minimal flat config
}

if (Object.keys(legacy).length === 0) {
  module.exports = [
    {
      ignores: ['dist/**', 'node_modules/**'],
    },
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.vue'],
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      plugins: {
        vue: require('eslint-plugin-vue'),
        '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      },
      rules: {
        'no-console': 'warn',
        'vue/multi-word-component-names': 'off',
      },
    },
  ];
} else {
  // Si legacy es un objeto de configuración (eslintrc), reexportamos algunas claves útiles.
  // Nota: no todas las opciones legacy se traducen 1:1 al formato flat; esto es un puente.
  module.exports = [
    {
      ignores: legacy.ignorePatterns || ['dist/**', 'node_modules/**'],
    },
    {
      files: ['**/*.js', '**/*.ts', '**/*.vue'],
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      plugins: {
        vue: require('eslint-plugin-vue'),
        '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      },
      rules: legacy.rules || {
        'no-console': 'warn',
        'vue/multi-word-component-names': 'off',
      },
    },
  ];
}

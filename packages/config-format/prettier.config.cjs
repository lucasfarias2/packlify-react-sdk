module.exports = {
  trailingComma: 'es5',
  printWidth: 120,
  arrowParens: 'avoid',
  singleQuote: true,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  pluginSearchDirs: false,
};

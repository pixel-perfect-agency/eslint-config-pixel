module.exports = {
    bracketSpacing: true,
    bracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    tabWidth: 4,
    printWidth: 100,
    quoteProps: 'consistent',
    importOrder: ['^react$', '^next$', '<THIRD_PARTY_MODULES>', '^~(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};

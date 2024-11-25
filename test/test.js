const { getSymbols } = require('../src/index');

describe('getSymbols', () => {
    test('symbols value', () => {
        const symbols = getSymbols();
        expect(symbols).toEqual({
            dollar: '$',
            euro: '€',
            yen: '¥',
            pound: '£',
            infinity: '∞',
            copyright: '©',
            trademark: '™'
        });
    });

    test('symbols code', () => {
        const symbols = getSymbols();
        expect(Object.keys(symbols)).toEqual([
            'dollar',
            'euro',
            'yen',
            'pound',
            'infinity',
            'copyright',
            'trademark'
        ]);
    });
});
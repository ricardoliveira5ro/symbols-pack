const defaultSymbols = {
    dollar: '$',
    euro: '€',
    yen: '¥',
    pound: '£',
    infinity: '∞',
    copyright: '©',
    trademark: '™'
};

function getSymbols() {
    return { ...defaultSymbols };
}

module.exports = { getSymbols };
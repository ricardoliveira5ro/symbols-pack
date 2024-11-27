const { currency, symbols, brackets, math, punctuation, letters, arrows } = require('./symbols')

function getSymbols() {
    return { 
        ...currency,
        ...symbols,
        ...brackets,
        ...math,
        ...punctuation,
        ...letters,
        ...arrows
    };
}

module.exports = { getSymbols };
# Symbols & Special Characters Pack

### The Problem

Sometimes our keyboard doesn't have all the keys we need, or the layout is different from what we're accustomed to. This often forces us to search online just to copy a symbol or special character

### The solution

With this package, you can easily access a wide range of symbols and special characters as plain text and use them directly in your project.

### Installation

```
npm install @ricardo5ro/symbols-pack
```

### Usage

```
const { getSymbols } = require('@ricardo5ro/symbols-pack');

const symbols = getSymbols();

console.log(symbols.dollar); // Output: $
console.log(symbols.copyright); // Output: ©
```

### Supported Symbols

You can find the complete list of available symbols [here](./src/index.js)

### Contributing

Contributions are welcome to help expand the list of symbols and special characters!

* Fork the repository
* Create a new branch and make your changes
* Submit a pull request with a description

### License

MIT License

module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off" // Turning off this rule to allow output in console for this example script
    }
};
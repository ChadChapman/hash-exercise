const constants = require('./constants')

const hash = (inputString) => {
    let h = 7n // n -> BigInt
    const letters = constants.hashAttributes.letters;
    for (let i = 0; i < inputString.length; i++) {
        h = h * 37n + BigInt(letters.indexOf(inputString[i]));
    }
    return h;
}

module.exports = {
    hash
};

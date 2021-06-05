const hashFunction = require('./hash-function');
const hashFinder = require('./hash-finder');
// import {hash} from 'hash-function.js';
// write tests to invoke hash() on a variety of strings

const hashTestInputOutput = {
    677842960118: 'gleeful',
    1317985395605002507: ''
}

// const hashOutput = hashFunction('gleeful')
// const hashOutput = hashFunction.hash('677842960118')
//
// console.log(hashOutput.toString());

const myArgs = process.argv.slice(2);
console.log({myArgs})

try {
    const hashedBigInt = BigInt(myArgs[0])
    // console.log({hashedBigInt})
    const charsVal = myArgs[2]
    // console.log({charsVal})
    const originalString = hashFinder.bruteForce(hashedBigInt, charsVal)
    console.log(`Is this your original string? --> ${originalString}`)
} catch (e) {
    console.error(e)
}

process.exit(0)

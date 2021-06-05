const hashFinder = require('./hash-finder');

const myArgs = process.argv.slice(2);

try {
    const hashedBigInt = BigInt(myArgs[0])
    const charsVal = myArgs[2]
    const originalString = hashFinder.bruteForce(hashedBigInt, charsVal)
    console.log(`Is this your original string? --> ${originalString}`)
} catch (e) {
    console.error(e)
}

process.exit(0)

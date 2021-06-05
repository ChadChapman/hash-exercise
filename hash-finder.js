const hashFunction = require('./hash-function');
const constants = require('./constants');

const letters = constants.hashAttributes.letters;

const attemptStringFactory = (humanReadableString, loopCount, charCountArg) => {
        let attemptString = `${humanReadableString}${letters[loopCount]}`;
        let resultString = '';
        try {
            const newArrayLength = charCountArg - attemptString.length;
            // now add the rest as the [letters[0]]
            const backfillArray = new Array(newArrayLength)
                .fill(letters[0])
            resultString = attemptString.concat(backfillArray.join(''))
        } catch (e) {
            console.log(e)
        }
        return resultString;

}
/*
    try every combo, so start with something like [letters[0]].length === charCountArg
    then increment as attempts fail to return a match
    once a match is found, return that attempt
 */
const bruteForce = (hashedValue, charCountArg) => {
    let loopCount;
    let humanReadableString = '';
    let seedString = '';
    while (humanReadableString.length < charCountArg) {
        loopCount = 0;
        // make the comparison and keep going through each char possibility in `letters`
        while (hashedValue > hashFunction.hash(attemptStringFactory(humanReadableString, loopCount, charCountArg)) && loopCount < letters.length) {
            loopCount++;
            seedString = attemptStringFactory(humanReadableString, loopCount, charCountArg)
        }
        // so now move along the array of possibilities
        humanReadableString += letters[loopCount-1]
    }
    console.log({seedString})
    // make the comparison for this result to verify the hashed value
    if (hashedValue !== hashFunction.hash(seedString)) {
        // notify the user it wasn't a match, then exit(1) or similar
        console.error('no hash results found matching those arguments')
        process.exit(1)
    }
    return seedString;
}

module.exports = {
    bruteForce
}
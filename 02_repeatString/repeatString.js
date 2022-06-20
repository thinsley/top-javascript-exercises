const repeatString = function(inputString, loopRepetitions) {
    let finalString = '';
    for(let i=0; i<loopRepetitions; i++) {
        finalString += inputString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;

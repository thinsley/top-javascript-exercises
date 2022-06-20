const reverseString = function(inputString) {
    inputStringLength = inputString.length;
    finalString = '';
    for(let i=inputStringLength; i>=0; i--) {
        finalString += inputString.charAt(i);
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;

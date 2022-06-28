const palindromes = function (stringToTest) {
    let lowerString = stringToTest.toLowerCase();
    let lowerStringArray = lowerString.split("").filter(letter => letter != "!" && letter != "," && letter != ".");
    let reverseString = lowerStringArray.reverse().join("");
    let challengeString = lowerStringArray.join("");
    console.log(challengeString, reverseString);
    if (challengeString == reverseString) {
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

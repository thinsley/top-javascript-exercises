const sumAll = function(firstNumber, secondNumber) {
    let lowerBound;
    let upperBound;
    //Put arguments in the right order
    if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number') {
        return 'ERROR';
    }
    else if(firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    }
    else if (firstNumber < secondNumber) {
        lowerBound = firstNumber;
        upperBound = secondNumber;
    }
    else if (firstNumber > secondNumber) {
        lowerBound = secondNumber;
        upperBound = firstNumber;
    }
    else {
        return "ERROR";
    }

    let finalNumber = 0;
    for(let i=lowerBound; i<=upperBound; i++) {
        finalNumber += i;
    }
    return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;

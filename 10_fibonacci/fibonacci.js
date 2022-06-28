const fibonacci = function (input) {
    if (input < 0) return 'OOPS';
    else if (typeof input == "string") {
        let stringInt = parseInt(input);
        let sum = 0, previousOne = 0, previousTwo = 1;
        for (let n = 0; n < stringInt - 1; n++) {
            sum = previousOne + previousTwo;
            previousOne = previousTwo;
            previousTwo = sum;
        }
        return previousTwo;
    }
    else {
        let sum = 0, previousOne = 0, previousTwo = 1;
        for (let n = 0; n < input - 1; n++) {
            sum = previousOne + previousTwo;
            previousOne = previousTwo;
            previousTwo = sum;
        }
        return previousTwo;
    }
};

// Do not edit below this line
module.exports = fibonacci;

const leapYears = function(inputYear) {
    const testYear = inputYear;

    if((testYear % 4 == 0 && testYear % 100 != 0) || testYear % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

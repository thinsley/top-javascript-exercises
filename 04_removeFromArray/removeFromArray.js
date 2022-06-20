const removeFromArray = function(inputArray, removalElement) {
    finalArray = [];
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i] != removalElement) {
            finalArray.push(inputArray[i]);
        }
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;

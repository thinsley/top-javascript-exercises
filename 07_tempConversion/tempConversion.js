const ftoc = function(inputTempF) {
  let finalTempC = Math.round(((inputTempF - 32)*5/9) * 10)/ 10;
  return finalTempC;
};

const ctof = function(inputTempC) {
  let finalTempF = Math.round(((inputTempC / 5)* 9 + 32) * 10)/ 10;
  return finalTempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

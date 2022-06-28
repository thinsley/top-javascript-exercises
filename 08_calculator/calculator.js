const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first-second;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let product = 1;
	array.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(integer) {
	let answer = 1;
  for (let i=integer; i>0; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	result = 0;
  for(let i=0; i < array.length; i++){
    result = result + array[i];
  } return result;
};

const multiply = function(array) {
  result = 1;
  for (let i=0; i < array.length; i++){
    result = result * array[i];
  } return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  } else if (a > 0){
  return a * factorial(a - 1);
  };
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

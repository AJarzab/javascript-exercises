const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (list) {
  let sum = 0;
  list.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (list) {
  let multiplyScore = 1;
  list.forEach((element) => {
    multiplyScore *= element;
  });
  return multiplyScore;
};

const power = function (pow, exp) {
  const formula = pow ** exp;
  return formula;
};

const factorial = function (num) {
  let result = 1;
  if (num === 0) {
    return 1;
  } else {
    for (let index = 1; index < num + 1; index++) {
      result *= index;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

var add = function(number1, number2,number3,number4) {
  return number1 + number2 -number3*number4;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var number3 = parseInt(prompt("Enter another number:"));
var number4 = parseInt(prompt("Enter another number:"));


alert(add(number1, number2, number3, number4));

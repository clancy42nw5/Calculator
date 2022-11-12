const integer = document.querySelector('.integer');
const operators = document.querySelector('.operators');
const baseFunc = document.querySelector('.baseFunc');
const display = document.querySelector('.display');

const newDisplay = function(x) {
    display.textContent = x;
}

const add = function(x, y) {
    let z = (x+y);
    return z;
}

const subtract = function(x, y) {
	let z = (x-y);
    return z;
}

const multiply = function(x, y) {
    let z = (x*y);
    return z;
}

const divide = function(x, y) {
	let z = (x/y);
    return z;
}

const clear = function() {
    let z = 0;
    return z;
}

userInput = 0

/*

userInput = (x * 10 + y) = x
bankedNumber = 0
operator()

As the user enters numbers the inputting() function operates.

When the user selects an operator, the number is pushed to variable "bankedNumber".
Display bankedNumber.

When an operator is pressed, it must calculate the current number by the last number
in the array using the current operator (which is addition by default).

Whe equals is pressed, the function() uses that operator on the last index
in the array, returning the new number to be pushed to the array.

If a FLOAT is returned, it should be rounded to the nearest 10th degree.

*/
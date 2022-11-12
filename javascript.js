const display = document.querySelector('.display');

let userInput = 0
let bankedNumber = 0

const intButtons = document.querySelectorAll('.integer');
intButtons.forEach((button) => {
    button.addEventListener('click', () => {
        x = button.textContent;
        if (userInput == 0) {
            userInput = x;
            changeDisplay(userInput);
        } else {
            userInput = userInput * 1;
            console.log(userInput)
            userInput += x;
            changeDisplay(userInput);
        } 
    });
});

/*
const funcButtons = document.querySelectorAll('.operators');
funcButtons.forEach((button) => {
    button.addEventListener('click', () => {

    })
})
*/

const percentButton = document.querySelectorAll('#percent');
percentButton.forEach((button) => {
    button.addEventListener('click', () => {
        userInput = userInput / 100;
        changeDisplay(userInput);
    })
})

const clearAllButton = document.querySelectorAll('#AC');
clearAllButton.forEach((button) => {
    button.addEventListener('click', () => {
        userInput = 0
        bankedNumber = 0
        changeDisplay(userInput);
    })
})

const changeDisplay = function(x) {
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

/*
userInput = (x * 1 + y) = x
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
const display = document.querySelector('.display');

let userInput = 0
let bankedNumber = 0
let operator = add

const intButtons = document.querySelectorAll('.integer');
intButtons.forEach((button) => {
    button.addEventListener('click', () => {
        x = button.textContent;
        if (userInput == 0) {
            userInput = x;
            changeDisplay(userInput);
        } else {
            userInput = userInput * 10;
            userInput += Number(x);
            changeDisplay(userInput);
        } 
    });
});

const funcButtons = document.querySelectorAll('.operators');
funcButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "equals") {
            if (operator === null) {
                changeDisplay(userInput);
            } else {
                bankedNumber = operation(bankedNumber, userInput);
                changeDisplay(bankedNumber);
                //userInput = 0;
                //operator = null;
            }
        } else if (bankedNumber == 0) {
            bankedNumber = userInput;
            userInput = 0;
            operator = button.id
        } else {
            bankedNumber = operation(bankedNumber, userInput);
            changeDisplay(bankedNumber);
            userInput = 0;
            operator = button.id;
        }
    })
})

const percentButton = document.querySelectorAll('#percent');
percentButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (bankedNumber > 0) {
            bankedNumber = bankedNumber / 100;
            changeDisplay(bankedNumber);
        } else
        userInput = userInput / 100;
        changeDisplay(userInput);
    })
})

function decimalCheck(n) {
   var result = (n - Math.floor(n)) !== 0; 
   return (result);
}

const decimalButton = document.querySelectorAll('#decimalPoint');
decimalButton.forEach((button) => {
    button.addEventListener('click', () => {
        if ((decimalCheck(userInput) == true)) {
            userInput = userInput;
        } else {
            userInput = parseFloat(userInput);
            console.log(userInput)
            changeDisplay(parseFloat(userInput));
        }
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

const clearButton = document.querySelectorAll('#C');
clearButton.forEach((button) => {
    button.addEventListener('click', () => {
        userInput = 0
        changeDisplay(userInput);
    })
})

const changeDisplay = function(x) {
    display.textContent = x;
}

function operation(x, y) {
    if (operator === "add") {
        let result = (Number(x) + Number(y));
        return result;
    } else if (operator === "subtract") {
        let result = (Number(x) - Number(y));
        return result;
    } else if (operator === "multiply") {
        let result = (Number(x) * Number(y));
        return result;
    } else if (operator === "divide") {
            let result = (Number(x) / Number(y));
            return result;
        }
    }
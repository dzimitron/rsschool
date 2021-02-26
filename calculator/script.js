const numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearBtns = document.querySelectorAll(".clear-btn"),
    decimalBtn = document.getElementById("decimal"),
    result = document.getElementById("result"),
    display = document.getElementById("display");

let memoryNewNumber,
    memoryCurrentNumber = 0,
    memoryPendingOperation = "";


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", e => numberPress(e.target.textContent));
}    

const numberPress = (number) => {
    if (memoryNewNumber) {
        display.value = number;
        memoryNewNumber = false;
    } else display.value === "0" ? display.value = number : display.value += number;
    display.value = display.value.substring(0, 16);
};


for (let i = 0; i < operations.length; i++) {
    let operator = operations[i];
    operator.addEventListener("click", e => operatorPress(e.target.textContent));
}

const operatorPress = (operator) => {
    let localOperationMemory = display.value;

    if(memoryNewNumber && memoryPendingOperation !== "=") {
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        switch (memoryPendingOperation) {
            case '+':
                memoryCurrentNumber += +localOperationMemory;
                break;
            case '-':
                memoryCurrentNumber -= +localOperationMemory;
                break;
            case '*':
                memoryCurrentNumber *= +localOperationMemory;
                break;
            case '/':
                memoryCurrentNumber /= +localOperationMemory;
                break;
            default: 
                memoryCurrentNumber = +localOperationMemory;   
        }
        display.value = memoryCurrentNumber;
        memoryPendingOperation = operator;
    }
};


const decimal = () => {
    let localDecimalMemory = display.value;
    
    if (memoryNewNumber) {
        localDecimalMemory = "0.";
        memoryNewNumber = false;
    } else if (localDecimalMemory.indexOf(".") === -1) {
            localDecimalMemory += ".";
        }
    display.value = localDecimalMemory;
};

decimalBtn.addEventListener("click", decimal);


for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener("click", e => clear(e.target.textContent));
}

const clear = (id) => {
    if (id === "ce") {
        display.value = "0";
        memoryNewNumber = true;
    } else if (id === "c") {
        display.value = "0"; 
        memoryNewNumber = true;
        memoryCurrentNumber = 0;
        memoryPendingOperation = "";
    }
};

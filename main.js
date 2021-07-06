const numberButtons = document.querySelectorAll('.value');
const operationButtons = document.querySelectorAll('.operation');
const mathProprieties = document.querySelectorAll('.math-function');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('.deletion');
const topScreen = document.querySelector('.top-output');
const downScreen = document.querySelector('.bottom-output');
const equalButton = document.querySelector('.enter');
const turnOnButton = document.querySelector('.turn-on');
const turnOffButton = document.querySelector('.turn-off');

class Calculator {
  constructor(topScreen, downScreen) {
    this.topScreen = topScreen;
    this.downScreen = downScreen;
    this.clear();
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumbers(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case 'x':
        computation = prev * current;
        break;
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '➗':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  display() {
    this.downScreen.textContent = this.currentOperand;
    if (this.operation != null) {
      this.topScreen.textContent = `${this.previousOperand} ${this.operation}`;
    } else {
      this.topScreen.textContent = '0';
    }
  }

  turnOn() {
    this.currentOperand = '0.';
  }

  turnOff() {
    this.currentOperand = '';
    this.previousOperand = '';
  }
}

const calculator = new Calculator(topScreen, downScreen);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumbers(button.textContent);
    calculator.display();
  });
});

operationButtons.forEach((operation) => {
  operation.addEventListener('click', () => {
    calculator.chooseOperation(operation.textContent);
    calculator.display();
  });
});

equalButton.addEventListener('click', () => {
  calculator.compute();
  calculator.display();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.display();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.display();
});

turnOnButton.addEventListener('click', () => {
  calculator.turnOn();
  calculator.display();
});

turnOffButton.addEventListener('click', () => {
  calculator.turnOff();
  calculator.display();
});

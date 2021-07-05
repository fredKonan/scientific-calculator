const numberButtons = document.querySelectorAll('.value');
const operationButtons = document.querySelectorAll('.operation');
const mathProprieties = document.querySelectorAll('.math-function');
const clearButton = querySelector('#clear');
const deleteButton = querySelector('.deletion');
const topScreen = document.querySelector('.top-output');
const downScreen = document.querySelector('.bottom-output');

class Calculator {
  constructor(topScreen, downScreen) {
    this.topScreen = topScreen;
    this.downScreen = downScreen;
  }
  clear() {
    this.topScreen.textContent = '';
    this.downScreen.textContent = '';
    this.operation = undefined;
  }

  appendNumbers(number) {
    this.number = number;
  }

  chooseOperation(operation) {}

  compute() {}

  display() {
    this.topScreen.textContent = this.number;
  }
}

const calculator = new Calculator(topScreen, downScreen);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumbers(button.textContent);
    calculator.display();
  });
});

clearButton.addEventListener('click', () => {
  calculator.clear();
});



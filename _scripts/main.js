class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand =
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }


}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = docuement.querySelectorAll('[data-operation]');
const equalsButton = docuement.querySelector('[data-equals]');
const deleteButton = docuement.querySelector('[data-delete]');
const allClearButton = docuement.querySelector('[data-all-clear]');
const previousOperandTextElement = docuement.querySelector('[data-previous-operand]');
const currentoperationTextElement = document.querySelector('[data-current-operand]');

const Calculator = new Calculator(previousOperandTextElement, currentoperationTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
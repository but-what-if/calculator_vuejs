//import Calculator from 'Calculator.vue'
'use strict'

let calculatorApp = new Vue({
    el: '#calculator-app',
    data: {
        previousValue: null,
        currentValue: '',
        operatorClicked: false,
        result: '',
    },
    methods: {
        clear() {
            this.currentValue = '';
            this.result = '';
        },
        append(num) {
            if(this.operatorClicked) {
                this.currentValue = '';
                this.operatorClicked = false;
            };
            this.currentValue = `${this.currentValue}${num}`;
        },
        dot() {
            if(this.currentValue.indexOf('.') === -1) {
                this.append('.');
            }
        }, 
        setPreviuosValue() {
            this.previousValue = this.currentValue;
            this.operatorClicked = true;
        },
        add() {
            this.operation = (x, y) => x + y;
            this.setPreviuosValue();
        },
        minus() {
            this.operation = (x, y) => x - y;
            this.setPreviuosValue();
        },
        multiply() {
            this.operation = (x, y) => x * y;
            this.setPreviuosValue();
        },
        devide() {
            this.operation = (x, y) => x / y;
            this.setPreviuosValue();
        },
        answer() {
            this.result = `${this.operation(
                parseFloat(this.previousValue), 
                parseFloat(this.currentValue)
            )}`;
            this.currentValue = parseFloat(this.result);
        },
        power() {
            this.currentValue *= this.currentValue;
            this.result = this.currentValue;
        },
        sqrtValue() {
            this.currentValue = Math.sqrt(this.currentValue);
            this.result = this.currentValue;
        },
        percent() {
            this.currentValue = this.currentValue / 100;
            this.result = this.currentValue;
        },
        plusMinus() {
            this.currentValue = this.currentValue.charAt(0) === -1 ? 
                this.currentValue.slice(1) : `-${this.currentValue}`;
            
        },
        backspace() {
            this.currentValue = this.currentValue.slice(0, -1);
            this.result = this.result.slice(0, -1);
        },
        module() {
            if(this.currentValue.charAt(0) === '-') {
                this.currentValue = this.currentValue.substr(1);
            }
        },
        numberPI() {
            this.currentValue = Math.PI;
        }
    }
})
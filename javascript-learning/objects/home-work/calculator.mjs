class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Nelze dělit nulou!");
        }
        return a / b;
    }
}

const calculator = new Calculator();

console.log("Sečíst 14 + 41 = " + calculator.add(14, 41));
console.log("Odečíst 174 - 32 = " + calculator.subtract(174, 32));
console.log("Násobit 47 * 50 = " + calculator.multiply(47, 50));
console.log("Dělit 125 / 7 = " + calculator.divide(125, 7));
function sum (a, b) {
    return a + b;
    
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function division (a, b) {
    if (b == 0){
        return "Invalid divisor is 0";
    }
    return a / b;
}

function sqrt (a){
    if (a < 0){
        return "Invalid cannot do square root of negative number";
    }
    return Math.sqrt(a);
}

function pow (a, n){
    return Math.pow(a, n);
}

console.log("Sum: " + sum(10, 5));
console.log("Subtraction: " + subtract(10, 5));
console.log("Multiplication: " + multiply(10, 5));
console.log("Division: " + division(10, 5));
console.log("Division: " + division(10, 0));
console.log("Square root: " + sqrt(25));
console.log("Square root: " + sqrt(-10));
console.log("Power: " + pow(2, 4));

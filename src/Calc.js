//function adds 2 numbers
function add(num1, num2) {
    return num1 + num2;

}

//function adds all numbers entered
function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;

}

//function multiplies 2 numbers
function multiply(num1, num2) {

    return num1 * num2;

}

//function multiplies 2 numbers
function multiplyAll() {
    var sum = 1;
    for (var i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;

}
"use strict";
var greet;
greet = function (name, greeting) {
    console.log(name + " says '" + greeting + "'");
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
logDetails({ name: 'ninja', age: 999999999999 });

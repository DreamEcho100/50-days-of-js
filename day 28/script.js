var toWeirdCase = function (str) {
    return str
        .split('')
        .map(function (letter, index) {
        return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    })
        .join('');
};
console.log("The weird case of " + 'This' + " is " + toWeirdCase('This') + ".");
console.log("The weird case of " + 'This is a test' + " is " + toWeirdCase('This is a test') + ".");
console.log("The weird case of " + 'A test case' + " is " + toWeirdCase('A test case') + ".");

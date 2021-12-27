var factorial = function (num) {
    var numCopy = num < 0 ? num * -1 : num;
    var i;
    var result = 2;
    if (numCopy <= 2)
        return numCopy;
    for (i = 3; i <= numCopy; i++) {
        result *= i;
    }
    return result;
};
var n = 5;
console.log('The factorial of ' + n + ' is ' + factorial(n));

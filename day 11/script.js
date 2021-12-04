var fibonacci = function (n) {
    var _a;
    if (n < 2)
        return 1;
    var prev = 0;
    var current = 1;
    // let temp: number = 1;
    var i;
    for (i = 2; i <= n; i++) {
        // temp = prev + current;
        // prev = current;
        // current = temp;
        _a = [current, prev + current], prev = _a[0], current = _a[1];
    }
    return current;
};
console.log("fibonacci value at position 5: " + fibonacci(5));
console.log("fibonacci value at position 9: " + fibonacci(9));
console.log("fibonacci value at position 25: " + fibonacci(25));

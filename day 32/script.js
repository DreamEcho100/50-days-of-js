var gcd = function (a, b) {
    var _a;
    // let r;
    while (0 !== b) {
        // r = a % b;
        // a = b;
        // b = r;
        _a = [b, a % b], a = _a[0], b = _a[1];
    }
    return a;
};
var a = 2154;
var b = 458;
console.log('The GCD of ' + a + ' ', b + ' is ' + gcd(a, b));

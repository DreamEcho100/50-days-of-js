/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
var convertDigitsToAskedBase = function (digits, baseA, baseB) {
    return parseInt(digits.map(function (item) { return parseInt(item, baseA); }).join(''))
        .toString(baseB)
        .split('')
        .map(function (item) { return parseInt(item, baseB); });
};
console.log(convertDigitsToAskedBase([5, 8], 10, 16)); // [3, 10]

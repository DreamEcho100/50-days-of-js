var nthlargest = function (arr, highest) {
    return arr.sort(function (a, b) { return a - b; }).reverse()[highest - 1];
};
var arr = [43, 56, 23, 89, 88, 90, 99, 652];
var highest = 4;
console.log(nthlargest(arr, highest));

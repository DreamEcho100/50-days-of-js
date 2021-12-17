var findOdd = function (arr) {
    var collection = {};
    var item;
    arr.forEach(function (num) {
        return collection[num] ? collection[num]++ : (collection[num] = 1);
    });
    for (item in collection) {
        if (collection[item] % 2 !== 0)
            return parseInt(item);
    }
};
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

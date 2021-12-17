var findEvenIndex = function (arr) {
    // const equalIndex: number = 0;
    var leftSum = 0;
    var rightSum = 0;
    var i;
    var j;
    for (i = 1; i < arr.length - 1; i++) {
        leftSum = 0;
        rightSum = 0;
        for (var j_1 = 0; j_1 < i; j_1++)
            leftSum += arr[j_1];
        for (var j_2 = i + 1; j_2 < arr.length; j_2++)
            rightSum += arr[j_2];
        if (leftSum === rightSum)
            return i;
    }
    return -1;
};
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3

var set = function (arrOfNum) {
    var existingItems = {};
    var uniqueArray = [];
    arrOfNum.forEach(function (item) {
        if (!existingItems[item]) {
            uniqueArray.push(item);
            existingItems[item] = true;
        }
    });
    return uniqueArray;
};
var arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log("result is + " + JSON.stringify(set(arrOfNum)));
// consoe.log(set([1, 2, 2, 4, 5, 6, 6]));
// consoe.log(set([1, 1, 1, 1, 1]));

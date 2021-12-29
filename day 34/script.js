var mostFreq = function (numArr) {
    var existingItemsCount = {};
    var highestOccurrenceArray = [];
    var highestOccurrence = 0;
    numArr.forEach(function (item) {
        existingItemsCount[item.toString()] =
            existingItemsCount[item.toString()] + 1 || 1;
        if (highestOccurrence < existingItemsCount[item.toString()]) {
            highestOccurrence = existingItemsCount[item.toString()];
        }
    });
    var item;
    for (item in existingItemsCount) {
        if (existingItemsCount[item] === highestOccurrence) {
            highestOccurrenceArray.push(item + " " + highestOccurrence);
        }
    }
    return highestOccurrenceArray[0];
};
var arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log('result is + ' + JSON.stringify(mostFreq(arrOfNum)));
console.log(mostFreq([1, 2, 2, 4, 5, 6, 6]));
console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

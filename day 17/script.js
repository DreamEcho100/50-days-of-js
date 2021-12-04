/**
 *
 * @param {number[]} inputArray Array of numbers
 */
var longestConsecutiveSequence = function (inputArray) {
    var sortedInputArray = inputArray.sort(function (a, b) { return a - b; });
    var i, j;
    var max;
    var found = false;
    var consecutiveSequence = {};
    for (i = 0; i < sortedInputArray.length; i++) {
        consecutiveSequence[sortedInputArray[i]] = 0;
        for (j = i; j < sortedInputArray.length - 1; j++) {
            if (sortedInputArray[j] === sortedInputArray[j + 1] ||
                sortedInputArray[j] + 1 === sortedInputArray[j + 1]) {
                consecutiveSequence[sortedInputArray[i]] =
                    consecutiveSequence[sortedInputArray[i]] + 1;
            }
            else {
                if (!max ||
                    consecutiveSequence[max] < consecutiveSequence[sortedInputArray[i]]) {
                    max = consecutiveSequence[sortedInputArray[i]] + sortedInputArray[i];
                    found = true;
                }
                break;
            }
        }
        if (!found &&
            (!max ||
                consecutiveSequence[max] < consecutiveSequence[sortedInputArray[i]])) {
            max = consecutiveSequence[sortedInputArray[i]] + sortedInputArray[i];
        }
    }
    return max;
};
console.log(longestConsecutiveSequence([1, 2, 3, 4]));
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

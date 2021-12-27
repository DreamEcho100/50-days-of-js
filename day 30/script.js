var wave = function (str) {
    var arrCopy;
    var result = [];
    str.split("").forEach(function (item, index, arr) {
        if (item === " ")
            return;
        arrCopy = arr.slice();
        arrCopy[index] = item.toUpperCase();
        result.push(arrCopy.join(''));
    });
    return result;
};
console.log(wave("hello"));
console.log(wave("two words"));
console.log(wave(" gap"));

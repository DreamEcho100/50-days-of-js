var getCount = function (str) {
    var vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };
    return str
        .split('')
        .reduce(function (prevSum, currLetter) {
        return vowels[currLetter.toLowerCase()] ? prevSum + 1 : prevSum;
    }, 0);
};
console.log(getCount('abracadabra'));
console.log(getCount('THe Strings are SOO COOL'));
console.log(getCount('There exists only 5 vowels'));

var uniqueInOrder = function (iterable) {
    var _a;
    if (Array.isArray(iterable) || typeof iterable === 'string') {
        var prevChar = iterable[0];
        var currentChar = iterable[0];
        var uniqueChars = [iterable[0]];
        var uniqueCharsIndex = 1;
        var i = void 0;
        for (i = 1; i < iterable.length; i++) {
            // prevChar = currentChar;
            // currentChar = iterable[i];
            _a = [currentChar, iterable[i]], prevChar = _a[0], currentChar = _a[1];
            if (prevChar !== currentChar &&
                uniqueChars[uniqueCharsIndex] !== currentChar) {
                uniqueChars[uniqueCharsIndex] = currentChar;
                uniqueCharsIndex++;
            }
        }
        return uniqueChars;
    }
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

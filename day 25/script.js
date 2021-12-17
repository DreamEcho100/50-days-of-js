var spinWords = function (str) { return str
    .split(' ')
    .map(function (item) { return item.length >= 5 ?
    item
        .split('')
        .reverse()
        .join('') :
    item; })
    .join(' '); };
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Seriously this is the last one"));

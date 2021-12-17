const spinWords = (str: string): string => str
  .split(' ')
  .map(item => item.length >= 5 ?
    item
      .split('')
      .reverse()
      .join('') :
    item
  )
  .join(' ');

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Seriously this is the last one"));

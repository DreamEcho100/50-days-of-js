const num = 3849;

// const reverseGivenInteger = (num) => {
// 	const numStringified = num.toString();
// 	let numStringifiedReversed = '';

// 	let i;
// 	for (i = numStringified.length - 1; i > 0; i++) {
// 		numStringifiedReversed += numStringified[i];
// 	}

// 	return parseInt(numStringifiedReversed);
// };

const reverseGivenInteger = (num) =>
	parseInt(num.toString().split('').reverse().join(''));

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);

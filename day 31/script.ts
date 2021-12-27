const factorial = (num: number) => {
	const numCopy: number = num < 0 ? num * -1 : num;
	let i: number;
	let result: number = 2;

	if (numCopy <= 2) return numCopy;

	for (i = 3; i <= numCopy; i++) {
		result *= i;
	}

	return result;
};

let n = 5;
console.log('The factorial of ' + n + ' is ' + factorial(n));

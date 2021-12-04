const fibonacci = (n: number): number => {
	if (n < 2) return 1;

	let prev: number = 0;
	let current: number = 1;
	// let temp: number = 1;

	let i: number;
	for (i = 2; i <= n; i++) {
		// temp = prev + current;
		// prev = current;
		// current = temp;

		[prev, current] = [current, prev + current];
	}

	return current;
};

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
console.log(`fibonacci value at position 9: ${fibonacci(9)}`);
console.log(`fibonacci value at position 25: ${fibonacci(25)}`);

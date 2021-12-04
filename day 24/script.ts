const expandedForm = (num: number): string =>
	num
		.toString()
		.split('')
		.map(
			(item, index, arr) =>
				parseInt(item) * Math.pow(10, arr.length - index - 1)
		)
		.join('+');

console.log(expandedForm(12)); // 10+2
console.log(expandedForm(42)); // 40+2
console.log(expandedForm(734)); // 700+30+4

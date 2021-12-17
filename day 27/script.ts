const getCount = (str: string): number => {
	const vowels: { [key: string]: true } = {
		a: true,
		e: true,
		i: true,
		o: true,
		u: true,
	};

	return str
		.split('')
		.reduce(
			(prevSum, currLetter) =>
				vowels[currLetter.toLowerCase()] ? prevSum + 1 : prevSum,
			0
		);
};

console.log(getCount('abracadabra'));
console.log(getCount('THe Strings are SOO COOL'));
console.log(getCount('There exists only 5 vowels'));

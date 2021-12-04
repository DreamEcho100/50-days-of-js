const uniqueInOrder = <T>(iterable: T[] | string) => {
	if (Array.isArray(iterable) || typeof iterable === 'string') {
		let prevChar: T | string = iterable[0];
		let currentChar: T | string = iterable[0];
		const uniqueChars: (T | string)[] = [iterable[0]];
		let uniqueCharsIndex: number = 1;
		let i: number;

		for (i = 1; i < iterable.length; i++) {
			// prevChar = currentChar;
			// currentChar = iterable[i];
			[prevChar, currentChar] = [currentChar, iterable[i]];
			if (
				prevChar !== currentChar &&
				uniqueChars[uniqueCharsIndex] !== currentChar
			) {
				uniqueChars[uniqueCharsIndex] = currentChar;
				uniqueCharsIndex++;
			}
		}

		return uniqueChars;
	}
};

console.log(uniqueInOrder<string>('AAAABBBCCDAABBB'));
console.log(uniqueInOrder<string>('ABBCcAD'));
console.log(uniqueInOrder<number>([1, 2, 2, 3, 3]));

const str = 'XeroX';

function getTheGapInLetter(str, character) {
	const firstOccurrence = str.indexOf(character);
	const lastOccurrence = str.lastIndexOf(character);

	if (firstOccurrence === -1 && lastOccurrence === -1) return -1;
	if (
		firstOccurrence !== -1 &&
		lastOccurrence === -1 &&
		lastOccurrence !== -1 &&
		firstOccurrence === -1
	)
		return 0;

	let i,
		counter = 0;
	for (i = firstOccurrence; i < lastOccurrence; i++) {
		counter++;
	}

	return counter;
}

console.log(`Gap between the X's: ${getTheGapInLetter(str, 'X')} in ${str}`);
console.log(getTheGapInLetter('Xamarin', 'X'));
console.log(getTheGapInLetter('F(X) !== G(X) !== F(X)', 'X'));

/*
const str = 'XeroX';

function getTheGapX(str) {
	const character = 'X';
	const firstOccurrence = str.indexOf(character);
	const lastOccurrence = str.lastIndexOf(character);

	if (firstOccurrence === -1 && lastOccurrence === -1) return -1;
	if (
		firstOccurrence !== -1 &&
		lastOccurrence === -1 &&
		lastOccurrence !== -1 &&
		firstOccurrence === -1
	)
		return 0;

	let i,
		counter = 0;
	for (i = firstOccurrence; i < lastOccurrence; i++) {
		counter++;
	}

	return counter;
}

console.log(`Gap between the X's: ${getTheGapX(str)} in ${str}`);
console.log(getTheGapX('Xamarin'));
console.log(getTheGapX('F(X) !== G(X) !== F(X)'));
*/

const mostFreq = <T>(numArr: T[]): string => {
	const existingItemsCount: { [key: string]: number } = {};
	const highestOccurrenceArray: string[] = [];
	let highestOccurrence: number = 0;

	numArr.forEach((item) => {
		existingItemsCount[item.toString()] =
			existingItemsCount[item.toString()] + 1 || 1;

		if (highestOccurrence < existingItemsCount[item.toString()]) {
			highestOccurrence = existingItemsCount[item.toString()];
		}
	});

	let item;
	for (item in existingItemsCount) {
		if (existingItemsCount[item] === highestOccurrence) {
			highestOccurrenceArray.push(`${item} ${highestOccurrence}`);
		}
	}

	return highestOccurrenceArray[0];
};

const arrOfNum: number[] = [1, 2, 2, 4, 5, 6, 6];

console.log('result is + ' + JSON.stringify(mostFreq(arrOfNum)));
console.log(mostFreq<number>([1, 2, 2, 4, 5, 6, 6]));
console.log(
	mostFreq<number | string>([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
);

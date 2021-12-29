const set = (arrOfNum: number[]): number[] => {
	const existingItems: { [key: string]: boolean } = {};
	const uniqueArray: number[] = [];

	arrOfNum.forEach((item) => {
		if (!existingItems[item]) {
			uniqueArray.push(item);
			existingItems[item] = true;
		}
	});

	return uniqueArray;
};

const arrOfNum: number[] = [1, 2, 2, 4, 5, 6, 6];

console.log('result is + ' + JSON.stringify(set(arrOfNum)));

// consoe.log(set([1, 2, 2, 4, 5, 6, 6]));
// consoe.log(set([1, 1, 1, 1, 1]));

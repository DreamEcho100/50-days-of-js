const findEvenIndex = (arr: number[]): number => {
	// const equalIndex: number = 0;
	let leftSum: number = 0;
	let rightSum: number = 0;
	let i: number;
	let j: number;

	for (i = 1; i < arr.length - 1; i++) {
		leftSum = 0;
		rightSum = 0;

		for (let j = 0; j < i; j++) leftSum += arr[j];
		for (let j = i + 1; j < arr.length; j++) rightSum += arr[j];

		if (leftSum === rightSum) return i;
	}

	return -1;
};

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3

/*
const findEvenIndex = (arr: number[]): number => {
	// const equalIndex: number = 0;
	let leftSum: number = 0;
	let rightSum: number = 0;
	let i: number;
	let j: number;

	for (i = 1; i < arr.length - 1; i++) {
		leftSum += arr[i - 1];
		rightSum = 0;

		for (j = i; j < arr.length - 1; j++) {
			rightSum += arr[j + 1];
		}

		if (leftSum === rightSum) {
			return i;
		}
	}
	return -1;
};

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
*/

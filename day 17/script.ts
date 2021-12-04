/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray: number[]): number => {
	const sortedInputArray: number[] = inputArray.sort((a, b) => a - b);
	let i: number, j: number;
	let max: number;
	let found: boolean = false;
	const consecutiveSequence: { [key: string]: number } = {};

	for (i = 0; i < sortedInputArray.length; i++) {
		consecutiveSequence[sortedInputArray[i]] = 0;

		for (j = i; j < sortedInputArray.length - 1; j++) {
			if (
				sortedInputArray[j] === sortedInputArray[j + 1] ||
				sortedInputArray[j] + 1 === sortedInputArray[j + 1]
			) {
				consecutiveSequence[sortedInputArray[i]] =
					consecutiveSequence[sortedInputArray[i]] + 1;
			} else {
				if (
					!max ||
					consecutiveSequence[max] < consecutiveSequence[sortedInputArray[i]]
				) {
					max = consecutiveSequence[sortedInputArray[i]] + sortedInputArray[i];
					found = true;
				}
				break;
			}
		}

		if (
			!found &&
			(!max ||
				consecutiveSequence[max] < consecutiveSequence[sortedInputArray[i]])
		) {
			max = consecutiveSequence[sortedInputArray[i]] + sortedInputArray[i];
		}
	}

	return max;
};

console.log(longestConsecutiveSequence([1, 2, 3, 4]));
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

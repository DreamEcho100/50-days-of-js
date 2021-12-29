const nthlargest = (arr: number[], highest: number) => {
	return arr.sort((a, b) => a - b).reverse()[highest - 1];
};

const arr: number[] = [43, 56, 23, 89, 88, 90, 99, 652];
const highest: number = 4;

console.log(nthlargest(arr, highest));

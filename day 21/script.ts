/*
const unionOfArrays = <T1, T2>(arr1: T1[], arr2: T2[]) => {
	const newArr: (T1 | T2)[] = [];
	const tempObj: { [key: string]: boolean } = {};
	const newTempArr: (T1 | T2)[] = [...arr1, ...arr2];
	let i: number;
	let tempString: string;

	for (i = 0; i < newTempArr.length; i++) {
		tempString = JSON.stringify(newTempArr[i]);
		if (!tempObj[tempString]) {
			newArr.push(newTempArr[i]);
			tempObj[tempString] = true;
		}
	}

	return newArr;
};
*/

const unionOfArrays = <T1, T2>(arr1: T1[], arr2: T2[]) => [
	...new Set([...arr1, ...arr2]),
];

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);

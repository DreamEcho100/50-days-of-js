const wave = (str: string): string[] => {
	let arrCopy: string[];
	const result: string[]  = [];

	str.split("").forEach((item, index, arr) => {
		if (item === " ") return;
		arrCopy = arr.slice();
		arrCopy[index] = item.toUpperCase();
		result.push(arrCopy.join(''));
	});
	
	return result;
}

console.log(wave("hello"));
console.log(wave("two words"));
console.log(wave(" gap"));

/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB): number =>
	parseInt(digits.map((item) => parseInt(item, baseA)).join(''))
		.toString(baseB)
		.split('')
		.map((item) => parseInt(item, baseB));

console.log(convertDigitsToAskedBase([5, 8], 10, 16)); // [3, 10]

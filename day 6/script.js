const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

// const truncateWithWordLimit = (str, wordLimit) => {
// 	const strArr = str.split(' ');

// 	return strArr.slice(0, wordLimit).join(' ');
// };

const truncateWithWordLimit = (str, wordLimit) =>
	str.split(' ').slice(0, wordLimit).join(' ');

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);

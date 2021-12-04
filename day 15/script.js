const isPangram = (input) =>
	new Set(input.replace(/[\W_]/g, '').toLowerCase().split('')).size === 26;
const str = 'The quick brown fox jumps over the lazy dog';
const str2 = 'The quick brown fox jumps over the dog';
console.log(`"${str}": ${isPangram(str)}`);
console.log(`"${str2}": ${isPangram(str2)}`);

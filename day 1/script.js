const randomNumberGeneratorInRange = (rangeStart, rangeEnd) =>
	rangeStart + Math.random() * rangeEnd;

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);

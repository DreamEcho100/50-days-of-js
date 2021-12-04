const totalGrains = (input: number | bigint = 64): bigint => {
	let total: bigint = 0n;
	let i;

	for (i = 0; i < input; i++) {
		total += grainsOn(i + 1);
	}

	return total;
};

const grainsOn = (input: number): bigint => BigInt(2 ** (input - 1)); // BigInt(Math.pow(2, (input - 1)));

console.log(`Grains on 5th square: ${grainsOn(5)}`);
console.log(`Total grains upto 5th square: ${totalGrains(5)}`);

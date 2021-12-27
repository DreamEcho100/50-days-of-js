const accum = (str: string): string =>
	str
		.split('')
		.map(
			(character, index) =>
				`${character.toUpperCase()}${character.toLowerCase().repeat(index)}`
		)
		.join('-');

console.log(accum('ZpglnRxqenU'));
console.log(accum('NyffsGeyylB'));
console.log(accum('MjtkuBovqrU'));

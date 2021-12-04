const resistorsColorsValues = {
	black: 0,
	brown: 1,
	red: 2,
	orange: 3,
	yellow: 4,
	green: 5,
	blue: 6,
	violet: 7,
	grey: 8,
	white: 9,
};

const colorCode = (color: string): number | undefined => {
	return resistorsColorsValues[color.toLowerCase()];
};

console.log(colorCode('blue'));
console.log(colorCode('white'));

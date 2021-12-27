const gcd = (a, b) => {
	// let r;
	while (0 !== b) {
		// r = a % b;
		// a = b;
		// b = r;
		[a, b] = [b, a % b];
	}
	return a;
};

const a = 2154;
const b = 458;

console.log('The GCD of ' + a + ' ', b + ' is ' + gcd(a, b));

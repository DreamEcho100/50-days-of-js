const number1 = '+91 9876543210';
const number2 = '+919876543210';
const number3 = '09876543210';
const number4 = '9876543210';
const number5 = '99876543210';

const validateMobile = (number) => {
	if (isNaN(parseInt(number.replace(/[\+\-\s]/, '')))) return false;

	return /^([\+]91|0)[\s]{0,1}\d{10}/.test(number)
		? true
		: number.length === 10;
};

console.log(
	`is '${number1}' with length of '${
		number1.length
	}' a valid Indian mobile number: ${validateMobile(number1)}`
);
console.log(
	`is '${number2}' with length of '${
		number2.length
	}' a valid Indian mobile number: ${validateMobile(number2)}`
);
console.log(
	`is '${number3}' with length of '${
		number3.length
	}' a valid Indian mobile number: ${validateMobile(number3)}`
);
console.log(
	`is '${number4}' with length of '${
		number4.length
	}' a valid Indian mobile number: ${validateMobile(number4)}`
);
console.log(
	`is '${number5}' with length of '${
		number5.length
	}' a valid Indian mobile number: ${validateMobile(number5)}`
);

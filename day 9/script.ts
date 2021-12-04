const obj = { key: 1 };

// const isEmpty = (obj: { [key: string]: any }): boolean => Object.keys(obj).length === 0;
const isEmpty = (obj: { [key: string]: any }): boolean => {
	let objHasNoKeys: boolean = true;
	let key: keyof typeof obj;

	for (key in obj) {
		objHasNoKeys = false;
		break;
	}

	return objHasNoKeys;
};

console.log(`is empty object: ${isEmpty(obj)}`);

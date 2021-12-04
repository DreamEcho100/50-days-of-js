type ArrayType = { field: string; operator: string /* [key: string]: any*/ }[];

const array: ArrayType = [
	{ field: 'id', operator: 'eq' },
	{ field: 'cStatus', operator: 'eq' },
	{ field: 'money', operator: 'eq' },
];

const filterField = 'money';

const removeArrayElement = (filterField: string): ArrayType =>
	array.filter((item) => item.field !== filterField);

console.log(
	`filtered array: ${JSON.stringify(removeArrayElement(filterField))}`
);

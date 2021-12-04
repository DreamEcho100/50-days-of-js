var array = [
    { field: 'id', operator: 'eq' },
    { field: 'cStatus', operator: 'eq' },
    { field: 'money', operator: 'eq' },
];
var filterField = 'money';
var removeArrayElement = function (filterField) {
    return array.filter(function (item) { return item.field !== filterField; });
};
console.log("filtered array: " + JSON.stringify(removeArrayElement(filterField)));

var obj = { key: 1 };
// const isEmpty = (obj: { [key: string]: any }): boolean => Object.keys(obj).length === 0;
var isEmpty = function (obj) {
    var objHasNoKeys = true;
    var key;
    for (key in obj) {
        objHasNoKeys = false;
        break;
    }
    return objHasNoKeys;
};
console.log("is empty object: " + isEmpty(obj));

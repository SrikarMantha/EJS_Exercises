function arrayToList(array) {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list;
}
console.log(arrayToList([1, 2, 3, 4]));

function listToArray(list) {
    let a = [];
    for (let node = list; node; node = node.rest) {
        a.push(node.value)
    }
    return a;
}
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));

function prepend(element, list) {
    return { element, rest: list }
}
console.log(prepend(10, prepend(20, prepend(30, null))));
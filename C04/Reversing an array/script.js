function reverseArray(array) {
    let b = [];
    for (let value of array) {
        b.unshift(value);
    }
    return b;
}
console.log(reverseArray([1, 2, 4, 6, 8]));

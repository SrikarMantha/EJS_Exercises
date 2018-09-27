function range(start, end) {
    let a = [];
    for (i = start; i <= end; i++) {
        a.push(i);
    }
    return a;
}

function sum(a) {
    let b = 0;
    for (let value of a) {
        b += value;
    }
    return b;
}
console.log(range(1, 12));
console.log(sum(range(1, 5)));
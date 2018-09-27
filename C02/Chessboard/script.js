let a = "";
for (y = 0; y < 8; y++) {
    for (x = 0; x < 8; x++) {
        if ((x + y) % 2 == 0) {
            a += " ";
        }
        else {
            a += "#";
        }
    }
    a += "\n";
}
console.log(a);
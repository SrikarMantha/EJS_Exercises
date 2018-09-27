function countB(string) {
    let count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "B" || string[i] == "b") {
            count += 1;
        }
    }
    console.log(count);
}
countB("Bumblebee");


function countChar(input, char) {
    let a = 0;
    for (j = 0; j < input.length; j++) {
        if (input[j] == char) {
            a += 1;
        }
    }
    console.log(a);
}
countChar("assassination", "s")

// countB alternate
/*
function countBs(input) {
  return countChar(input, "B");
}
*/
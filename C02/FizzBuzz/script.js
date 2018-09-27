let a = 0;
for (i = 1; i <= 100; i++) {
    a += 1;
    if (a % 3 == 0 && a % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (a % 3 == 0) {
        console.log("Fizz");
    }
    else if (a % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(a);
    }
}


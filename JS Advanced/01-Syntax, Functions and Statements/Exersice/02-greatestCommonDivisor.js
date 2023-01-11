function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
gcd(15, 5)

/*Write a function that takes two positive numbers as input and compute the greatest common divisor.
The input comes as two positive integer numbers.
The output should be printed on the console. */
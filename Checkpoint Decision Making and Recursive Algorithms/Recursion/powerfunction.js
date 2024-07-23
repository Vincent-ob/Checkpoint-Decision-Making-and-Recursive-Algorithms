function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        return 1 / power(base, -exponent);
    }
}

console.log(power(2, 3)); 
console.log(power(5, -2));
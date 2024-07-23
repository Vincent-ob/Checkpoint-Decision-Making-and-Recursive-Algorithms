function clothingAdvice(temperature, isRaining) {
    if (temperature < 50) {
        if (isRaining) {
            return 'Wear a warm, waterproof coat.';
        } else {
            return 'Wear a warm coat.';
        }
    } else if (temperature >= 50 && temperature < 70) {
        if (isRaining) {
            return 'Wear a light coat and carry an umbrella.';
        } else {
            return 'Wear a light jacket.';
        }
    } else {
        if (isRaining) {
            return 'Wear a rain jacket.';
        } else {
            return 'Wear something cool and comfortable.';
        }
    }
}

console.log(clothingAdvice(45, true));
console.log(clothingAdvice(60, false)); 
console.log(clothingAdvice(75, true)); 
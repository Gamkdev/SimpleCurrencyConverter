function sum(numbers) {
    let suma = 0;
for (let i = 0; i < (numbers.length - 1); i++ ) {
    if (numbers[i] == 0) {
        break;
    }
    suma += numbers[i];
}
return suma;
}
const squareList = arr => {
    // Only change code below this line
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
    // Only change code above this line
};
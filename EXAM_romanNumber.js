function convertToRoman(num) {
    let romanNum = '';

    while (num > 0) {
        if (num < 4) {
            romanNum += 'I';
            num -= 1;
        } else if (num === 4) {
            romanNum += 'IV';
            num -= 4;
        } else if (num === 5) {
            romanNum += 'V';
            num -= 5;
        } else if (num >= 5 && num < 9) {
            romanNum += 'V';
            num -= 5;
        } else if (num === 9) {
            romanNum += 'IX';
            num -= 9;
        } else if (num >= 10 && num < 40) {
            romanNum += 'X';
            num -= 10;
        } else if (num >= 40 && num < 50) {
            romanNum += 'XL';
            num -= 40;
        } else if (num >= 50 && num < 90) {
            romanNum += 'L';
            num -= 50;
        } else if (num >= 90 && num < 100) {
            romanNum += 'XC';
            num -= 90;
        } else if (num >= 100 && num < 400) {
            romanNum += 'C';
            num -= 100;
        } else if (num >= 400 && num < 500) {
            romanNum += 'CD';
            num -= 400;
        } else if (num >= 500 && num < 900) {
            romanNum += 'D';
            num -= 500;
        } else if (num >= 900 && num < 1000) {
            romanNum += 'CM';
            num -= 900;
        } else if (num >= 1000) {
            romanNum += 'M';
            num -= 1000;
        } else {
            console.log('ERROR');
            num -= 1
        }
    }
    return romanNum;
}
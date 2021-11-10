function palindrome(str) {
    let polishedStr = str.replace(/\W+|_/g, '').toLowerCase();
    let reversedStr = polishedStr.split('').reverse().join('');
    if (polishedStr != reversedStr) {
        return false;
    }
    return true;
}

palindrome("eye");
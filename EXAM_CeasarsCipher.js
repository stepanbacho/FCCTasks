function rot13(str) {
    let alphaStart = 'abcdefghijklm'.toUpperCase();
    let alphaEnd = 'nopqrstuvwxyz'.toUpperCase();
    let decodedResult = '';

    for (let i = 0; i < str.length; i++) {
        let letterToDecode = str[i];

        if (alphaStart.indexOf(letterToDecode) >= 0) {
            decodedResult += alphaEnd[alphaStart.indexOf(letterToDecode)];
        } else if (alphaEnd.indexOf(letterToDecode) >= 0) {
            decodedResult += alphaStart[alphaEnd.indexOf(letterToDecode)];
        } else {
            decodedResult += letterToDecode;
        }
    }
    console.log(decodedResult);

    return decodedResult;
}
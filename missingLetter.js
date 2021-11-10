function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    if(myConsonants !== null) {
        
        return str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay");
    }
        else{str.concat("way")};
}
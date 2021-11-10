function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (!second.includes(first[i])) {
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}
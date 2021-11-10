function sumAll(arr) {
    if(arr.length>2 || arr.length<2){
        return 'only 2 numbers acceptable'
    }
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}
// let r = sumAll([2,]);
// console.log(r);
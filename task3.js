let checkDivisor = num => {
    let numArray = [];
    let checkedArray = [];
    for (let i=1; i<=num; i++){
        numArray.push(i);
    }
    for (num of numArray) {
        if ((num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)) {
            checkedArray.push('yu-gi-oh');
        } else if ((num % 2 === 0) && (num % 3 === 0)) {
            checkedArray.push('yu-gi');
        } else if ((num % 2 === 0) && (num % 5 === 0)) {
            checkedArray.push('yu-oh');
        } else if ((num % 3 === 0) && (num % 5 === 0)) {
            checkedArray.push('gi-oh');
        } else if (num % 2 === 0) {
            checkedArray.push('yu');
        } else if (num % 3 === 0) {
            checkedArray.push('gi');
        } else if (num % 5 === 0) {
            checkedArray.push('oh');
        }else {
            checkedArray.push(num);
        }
    }
    return checkedArray;
}
console.log (checkDivisor(100));
checkDivisor(72);
/* 
# The "checkDivisor" function below accepts an Integer "num" as an argument, and checks if numbers from 1 to the given parameter (inclusive) 
# are divisible by 2,3,5 while replacing with the appropriate words as specified below:
* Numbers divisible by 2 are replaced by "yu"
* Numbers divisible by 3 are replaced by "gi"
* Numbers divisible by 5 are replaced by "oh"
* Numbers are unchanged if not divsible by any of 2,3,5
* Numbers divisible by more than one of 2,3,5 are replaced with words formed by joining the words representing their divisors, separating with hyphen (-).
# The function then finally returns an array containing all numbers from 1 to the passed argument(inclusive) where all divisible numbers have been replaced as specified above. 
*/

let checkDivisor = num => {
    let numArray = [];
    let checkedArray = [];

    // create an array of integers from 1 to the given parameter (inclusive) saved as "numArray"
    for (let i=1; i<=num; i++){
        numArray.push(i);
    }

    // FOR every element OF "numArray", check if the Integer is divisible by 2,3,5 and replace with the appropriate words as specified
    // then add the corresponding values of each checking to a new array "checkedArray"
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
    // the result
    return checkedArray;
}
// calling the function with an integer 100
console.log (checkDivisor(100));

// calling the function with an integer 72
checkDivisor(72);

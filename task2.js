const data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
];

/* 
# The interestCalculator function below accepts an array of objects as an argument, then determines the rate and calculates 
# the interest for each object in the array. The respective determined rate and calculated interest for each object are 
# then included as updated data for the objects in a new array of objects named interestData which is returned by the
# function. Thus each object in the returned interestData array have principal, time, rate and interest as properties.
*/

let interestCalculator = (arrayOfObjects) => {

let interestData = [];

// Determine Rate
for (let obj of arrayOfObjects) {
if(obj.principal >= 2500 && obj.time >= 3) {
obj.rate = 4;
} else if (obj.principal >= 2500 && (obj.time > 1 && obj.time < 3)) {
obj.rate= 3;
} else if(obj.principal < 2500 || obj.time <= 1) {
obj.rate = 2;
} else {
obj.rate = 1;
};

// Calculate interest
obj.interest = (obj.principal * obj.rate * obj.time) / 100;

// Add updated data of object to the new array of objects
interestData.push(obj);
}

console.log(interestData);
return interestData;

};

interestCalculator(data);

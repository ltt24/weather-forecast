const highTemperatures = [55, 57, 53, 47, 56, 50];
const lowTemperatures = [33, 30, 29, 35, 31, 32];

// 1. Print the first high temperature to the console.

let highestTem = highTemperatures[0];

for(let i = 0; i < highTemperatures.length; i++){
    if(highTemperatures[i] > highestTem){
       highestTem = highTemperatures [i];
    }
}
console.log(`The highest temperature is ${highestTem} degrees`);


// 2. Print the lowest temperature to the console.

let lowestTem = lowTemperatures[0];

for(let i = 0; i < lowTemperatures.length; i++){
    if(lowTemperatures[i] < lowestTem){
       lowestTem = lowTemperatures [i];
    }
}
console.log(`The lowest temperature is ${lowestTem} degrees`);

// 3. What is the average high temperature from the data set?

let sumHigh = 0;
for(let i = 0; i < highTemperatures.length; i++){
    sumHigh += highTemperatures[i];
}
let averageHigh = sumHigh / highTemperatures.length;
console.log(`The average high is ${averageHigh} degrees`);

// 4. What is the average low temperature from the data set?

let sumLow = 0;
for(let i = 0; i < lowTemperatures.length; i++){
    sumLow += lowTemperatures[i];
}
let averageLow = (sumLow / lowTemperatures.length).toFixed(2);
console.log(`The average low is ${averageLow} degrees`)

// 5. What is the median high temperature from the data set?

const sortedHighTemperatures = highTemperatures.sort((a, b) => a - b);
const midHigh = Math.floor(sortedHighTemperatures.length / 2);
const medianHigh = (sortedHighTemperatures[midHigh - 1] + sortedHighTemperatures[midHigh]) / 2;

console.log(`The median of the high temperatures is ${medianHigh}`);

// 6. What is the median low temperature from the data set?

const sortedLowTemperatures = lowTemperatures.sort((a, b) => a - b);
const midLow = Math.floor(sortedLowTemperatures.length / 2);
const medianLow = (sortedLowTemperatures[midLow - 1] + sortedLowTemperatures[midLow]) / 2;

console.log(`The median of the low temperatures is ${medianLow}`);
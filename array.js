if have empty array in js // Define an empty array

let dataArray = [];

// Add data to the array
dataArray.push(1);
dataArray.push(2);
dataArray.push(3);

// Print the array
console.log(dataArray);
// Define an empty array
let dataArray = [];

// Assign data to the array
dataArray = dataArray.concat([1, 2, 3]);

// Print the array
console.log(dataArray);
[1,2,3]

 if  your data not a array 

let data = "2,3";
let dataArray = data.split(",");

console.log(dataArray);

 if your data multiple array then use 

let a = { 'aa': '1', 'ss': '2' };
let b = { 'sa': '13', 'sds': '4' };
let c = { 'sadsa': '5', 'ssd': '6' };
let d = { 'sdsa': '7', 'dsd': '8' };

// Merge all arrays into a single array
let combinedArray = [];
[ a, b, c, d ].forEach(obj => {
    Object.values(obj).forEach(value => {
        combinedArray.push(value);
    });
});

// Loop through the combined array
combinedArray.forEach(value => {
    console.log(value);
});
// output1
2
13
4
5
6
7
8

second way


let a = { 'aa': '1', 'ss': '2' };
let b = { 'sa': '13', 'sds': '4' };
let c = { 'sadsa': '5', 'ssd': '6' };
let d = { 'sdsa': '7', 'dsd': '8' };

// Merge all arrays into a single array
let combinedArray = [].concat(a, b, c, d);

// Loop through the combined array
combinedArray.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

//outputaa => 1
ss => 2
sa => 13
sds => 4
sadsa => 5
ssd => 6
sdsa => 7
dsd => 8


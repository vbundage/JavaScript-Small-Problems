// Predict the output of the below code. When you run the code, do you see what
// you expected? Why or why not?


// The output will log false. The arrays are separate objects in memory
// though they have the same values. 
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

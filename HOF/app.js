///////////// Q-5

// Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways

///////////////////// for loop

// const arr = [1, 2, 3, 4, 5];
// let y = [];
// function power() {
//   for (i = 0; i < arr.length; i++) {
//     let x = 2 ** arr[i];
//     y.push(x);
//   }
//   console.log(y);
// }
// power();

////////////////////// forEach

// const arr = [1, 2, 3, 4, 5];
// let y = [];

// arr.forEach((element) => y.push(2 ** element));
// console.log(y);

////////////////////// map

// const arr = [1, 2, 3, 4, 5, 6];
// const map1 = arr.map((x) => 2 ** x);
// console.log(map1);
// console.log(arr);

///////////// Q-6

// Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"israa"]) returns ['odd','even','odd','N/A'].

// const arr = [1, 2, 3, 4, 5, 6, "fahmi", 18, 23, 29];
// const map1 = arr.map((x) => {
//   if (Number.isInteger(x)) {
//     if (Number.isInteger(x / 2)) {
//       return (x = "even");
//     } else {
//       return (x = "odd");
//     }
//   } else {
//     return (x = "N/A");
//   }
// });
// console.log(map1);

///////////// Q-7

// Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.

const arr = [1, 2, 3, 4, 5, 6, 18, 23, 29, 30, 25, 100, 60, "fahmi"];
const map1 = arr.map((x) => {
  if (Number.isInteger(x)) {
    if (Number.isInteger(x / 3)) {
      if (Number.isInteger(x / 5)) {
        return (x = "Fizz Buzz");
      } else {
        return (x = "Fizz");
      }
    } else if (Number.isInteger(x / 5)) {
      return (x = "Buzz");
    } else {
      return x;
    }
  } else {
    return (x = "N/A");
  }
});
console.log(map1);

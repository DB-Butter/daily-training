// Monday October 24, 2022. Challenge: easy.

// Challenge:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// myAnswer:

// create a function which accepts an array of numbers, and a target number

// create a for loop which iterates over the array

// create a nested for loop which checks if [i] + [j] = target number

//return result

function mon24 (arr, target) {
    let result = null;
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            if( arr[i]+arr[j] === target) {
                result = [[j], [i]]
            }
        }
    }
    console.log(result)
};

// Example:

// Input: nums = [2,7,11,15], target = 9
mon24([2,7,11,15], 9);

// node October2022/mon24
// Output: [0,1]

// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
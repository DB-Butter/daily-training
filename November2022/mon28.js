//Monday November28, 2022. Challenge: Search Insert Position - easy.

//Challenge:

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//myAnswer:

// let result = 0 

// iterate through the array

// compare the target value

// if the target value is greater than array[i], result ++ 

function searchInputPosition (arr, target) {
    let result = 0
    for (let i=0;i<arr.length;i++) {
        if (target > arr[i]) {
            result++
        }
    }
    console.log(result)
}

// Example 1:

searchInputPosition([1,3,5,6], 5)

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

searchInputPosition([1,3,5,6], 2)

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

searchInputPosition([1,3,5,6], 7)

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Code Challenege Completed! ttc: <1hr
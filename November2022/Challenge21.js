//Monday November21, 2022. Challenge: Add Two Numbers - medium.

//Challenge: 

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// myAnswer:

// reverse the arrays

// join the arrays as numbers

// add the numbers

// return the reversed number as an array

function addReversedArrays (arr1, arr2) {
    let theGreatAddition = (
        parseInt(arr1.reverse().join('')) + parseInt(arr2.reverse().join(''))
        ).toString().split('').reverse()
    console.log(theGreatAddition)
}

// Example 1:

addReversedArrays([2,4,3], [5,6,4])

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

addReversedArrays([0], [0])

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

addReversedArrays([9,9,9,9,9,9,9], [9,9,9,9])

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Code Challenege Completed! ttc: <1hr
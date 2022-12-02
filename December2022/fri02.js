//Friday December02, 2022. Challenge: Plus One - easy.

//Challenge: 

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

//myAnswer:

// convert the arr into a number

// add one

// convert the number into an array

function plusOne (arr) {
    let answer = (parseInt(arr.join('')) + 1).toString()
    let answerArr = Array.from(answer)
    console.log(answerArr)
}

// Example 1:

plusOne([1,2,3])

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:

plusOne([4,3,2,1])

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
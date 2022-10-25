// Tuesday October 25, 2022. Challenge: easy.

// Challenge:
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// myAnswer:

// turn the number into an array

// create a new array which consists of the original array backwards

// compare the arrays

// return result

function tue25 (num) {
    let array = Array.from(String(num))
    let arrayReverse = Array.from(String(num)).reverse()
    let arrayIsPalindrome = null;
    for(let i=0;i<(array.length/2);i++) {
        if (array[i] === arrayReverse[i]) {
            arrayIsPalindrome = true
        } else { arrayIsPalindrome = false }
    }
    if (arrayIsPalindrome === true) {
        console.log(`${num} is a palindrome integer`)
    } else {console.log(`${num} is not a palindrome integer`)}
}

// Example:

// Input: x = 121
tue25(121)

// Output: true   (output personalized)
// node October2022/tue25

// Explanation: 121 reads as 121 from left to right and from right to left.

// Code Challenege Completed! ttc: <1hr

// fixed issue where my commits where not filed under my primary email
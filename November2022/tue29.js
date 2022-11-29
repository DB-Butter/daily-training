//Tuesday November29, 2022. Challenge: Length of Last Word - easy.

//Challenge: 

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

//myAnswer:

// split the string at each space

// return the length of the last word in the new array

function lastWordLength(str) {
    const arr = str.split(' ')
    console.log(`The last word is ${arr[arr.length-1]} with length ${arr[arr.length-1].length}`)
}

// Example 1:

lastWordLength("Hello World")

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
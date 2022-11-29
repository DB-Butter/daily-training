//Tuesday November29, 2022. Challenge: Length of Last Word - easy.

//Challenge: 

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

//myAnswer:

// split the string at each space

// return the length of the last word in the new array

function lastWordLength(str) {
    const arr = str.split(' ')
    for (let i=0;i<arr.length;i++) {
        if (arr[i] === '') {
            arr.splice(i, 1)
            i--
        }
    }
    console.log(`The last word is ${arr[arr.length-1]} with length ${arr[arr.length-1].length}`)
}

// Example 1:

lastWordLength("Hello World")

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

lastWordLength("   fly me   to   the moon  ")

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

lastWordLength("luffy is still joyboy")

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Code Challenege Completed! ttc: <1hr
// Thursday November10, 2022. Challenge: easy.

//Challenge:

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// myAnswer: 

// find the string with the lowest length

// collect current character; compare current character across arr[i][j] and append result string

// return result

// dictate array and array.length and run

function shortestString(arr,arrLength) {
    let min = arr[0].length;
    for (let i=1;i<arrLength;i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    return (min);
}

function findLongestPrefix(arr,arrLength) {
    let shortString = shortestString(arr, arrLength)
    let result = ""
    let currentChar
    for (let i=0;i<shortString;i++) {
        currentChar = arr[0][i]
   
        for (let j=1;j<arrLength;j++) {
            if (arr[j][i] != currentChar) {
                return result
            }
        }   
        result += (currentChar)
    }
    return (result)
}

// let arr = ['test', 'testing', 'tester']
// let arrLength = arr.length
// console.log(findLongestPrefix(arr, arrLength))

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

let arr = ['flower', 'flow', 'flight']
let arrLength = arr.length
console.log(findLongestPrefix(arr, arrLength))


//Sunday December04, 2022. Challenge: Add Binary - easy.

//binary addition rules
// 0+0=0.
// 0+1=1.
// 1+0=1.
// 1+1=10.

//Challenge: 

// Given two binary strings a and b, return their sum as a binary string.

//myAnswer:

// declare result, sum, i=a.length, and j=b.length

// while i && j >=0,

//   compute sum of digit and carry

//   check sum and if 1 || 3, add 1

//   compute carry and decriment i && j

// return result

// Javascript program to add 
// two binary strings
  
// This function adds two 
// binary strings and return
// result as a third string
function addBinary(a, b) {
    let result = ""; 
    let s = 0;         
    let i = a.length - 1
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || s == 1) {
        //compute sum of digit and carry
        s += ((i >= 0)? a.charAt(i).charCodeAt(0) - 
        '0'.charCodeAt(0): 0)
        s += ((j >= 0)? b.charAt(j).charCodeAt(0) - 
        '0'.charCodeAt(0): 0)
  
        // check sum
        result = String.fromCharCode(parseInt(s % 2) +
        '0'.charCodeAt(0)) + result
  
        // carry
        s = parseInt(s/2)
  
        i-- 
        j--
    }
    console.log(result)
}

// Example 1:

addBinary('11', '1')

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

addBinary('1010', '1011')

// Input: a = "1010", b = "1011"
// Output: "10101"

// Example 3:

addBinary('10110', '1001')

// Input: a = "10110", b = "1001"
// Output: "11111"

// Code Challenege Completed! ttc: ~1hr
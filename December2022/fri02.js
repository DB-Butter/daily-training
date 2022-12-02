//Friday December02, 2022. Challenge: Plus One - easy.

//Challenge: 

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

//myAnswer:

// loop through the array backwards

// adding === true

// if arr[i] != 9, arr[i]++ and adding=false

// if arr[i] === 9, arr[i] = 0

function plusOne (arr) {
    let adding = true
    for (let i=arr.length-1;i>0;i--) {
        if (adding === true && arr[i] != 9) {
            arr[i]++
            adding=false
        }
        if (adding === true && arr[i] === 9) {
            arr[i] = 0
        }
    }
    console.log(arr)
}
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
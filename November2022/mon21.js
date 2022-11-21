//Monday November21, 2022. Challenge: Merge Two Sorted Lists - easy.

//Challenge:

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

//myAnswer: 

// Merge both lists

// Sort result list from least to greatest

function mergeAndSort (arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    arr3.sort(function(a, b) {
        return a - b;
    });
    console.log(arr3)
}

// Example 1:

mergeAndSort([1,2,4], [1,3,4])

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

mergeAndSort([], [])

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

mergeAndSort([], [0])

// Input: list1 = [], list2 = [0]
// Output: [0]

// Code Challenege Completed! ttc: <1hr
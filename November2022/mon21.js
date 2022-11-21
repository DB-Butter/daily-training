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

// Tuesday November 08, 2022. Challenge: easy.

// Challenge:
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// myAnswer:

// create an index of key value pairs to pair integers and roman numerals

// iterate through the given roman numeral, and apply the rules of subtraction down the line. The rest should be applied addition

// return result

const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanConverter (num) {
    let total = 0;
    for (let i=0;i<num.length; i++) {
        if (num[i] === "I" && num[i + 1] === "V") {
            total += 4;
            i++;
          } else if (num[i] === "I" && num[i + 1] === "X") {
            total += 9;
            i++;
          } else if (num[i] === "X" && num[i + 1] === "L") {
            total += 40;
            i++;
          } else if (num[i] === "X" && num[i + 1] === "C") {
            total += 90;
            i++;
          } else if (num[i] === "C" && num[i + 1] === "D") {
            total += 400;
            i++;
          } else if (num[i] === "C" && num[i + 1] === "M") {
            total += 900;
            i++;
          } else {
            total += romanValues[num[i]];
        }
    }
    if (total) {console.log(`${num} as an integer = ${total}`)} else {console.log('incorrect roman numeral format...')}
}

// romanConverter('IV')
// IV as an integer = 4

// Example 1:

romanConverter('III')

// Input: num = "III"
// Output: III as an integer = 3
// Explanation: III = 3.

// Example 2:

romanConverter('LVIII')

// Input: num = "LVIII"
// Output: LVIII as an integer = 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

romanConverter('MCMXCIV')

// Input: num = "MCMXCIV"
// Output: MCMXCIV as an integer = 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Code Challenege Completed! ttc: <1hr

// Code Challenge: easy | Rated: 2/10

// Tools:

// Object index of kvp s
// For loop
// If/else
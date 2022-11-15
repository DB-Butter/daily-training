//Monday November14, 2022. Challenge: easy.

//Challenge:

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//myAnswer:

// iterate through the string

// apply parameters to the characters

// If a character is invalid return invalid parenthases

function validParentheses(str) {
    let valid = true
    for (let i=0;i<str.length;i++) {
        if (str[i] === '(') {
            if (str[i+1] !== ')') {
                valid = false
            }
        } else if (str[i] === ')') {
            if (str[i-1] !== '(') {
                valid = false
            }
        } else if (str[i] === '{') {
            if (str[i+1] !== '}') {
                valid = false
            }
        } else if (str[i] === '}') {
            if (str[i-1] !== '{') {
                valid = false
            }
        } else if (str[i] === '[') {
            if (str[i+1] !== ']') {
                valid = false
            }
        } else if (str[i] === ']') {
            if (str[i-1] !== '[') {
                valid = false
            }
        } else {
            valid = false
        }
    }
    if (valid) {console.log('valid parentheses')} else console.log('invalid parentheses')
}
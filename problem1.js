// Coding Problem 1

// What is happening in the following code snippet?  Assume the following:
// first.txt exists in the content folder and contains: “Hello, I am the first file”.
// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code: 

// This line imports necessary functions to work with the files
const {readFileSync, writeFileSync} = require('fs');
const fs = require('fs');
// This line reads the contents of "first.txt" and stores them in the "first" variable
const first = readFileSync('./content/first.txt','utf8')
// Same as above but stores "second.txt" into the "second variable"
const second = readFileSync('./content/second.txt','utf8')
// Prints values olf "first" and "second" to console
console.log(first, second);
// This line writes the combined contents of "first" and "second" variables into a new file named "result-sync.txt"
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);
/* The 'a' in flag is for append. Which means that file should be opened in append mode, 
allowing new content to be added to the file without overwriting any existing data */
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});

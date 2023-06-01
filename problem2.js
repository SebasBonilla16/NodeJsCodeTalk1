/* Coding Problem 2 
What is happening in the following code snippet?  Assume the following:
first.txt exists in the content folder and contains: “Hello, I am the first file”.
second.txt exists in the content folder and contains: “Hello, I am the second file”.

Code: */

// Imports the necessary functions from 'fs' module
const {readFile, writeFile} = require('fs');
// Prints 'start' to the console
console.log('start');
// Reads contents of "first.txt" file asynchronously
readFile('./content/first.txt','utf8', (err, result)=> {
    // checks if an error occurred during the file reading
   if (err) {
       console.log(err);
       // returns to exit the callback function
       return 
   }
   // Stores the contents of the first file
   const first = result;
   // Prints the contents of the first file to the console
   console.log(result);
   // Reads contents of "second.txt" file asynchronously 
   readFile('./content/second.txt','utf8', (err, result)=> {
    // checks if an error occurred during the file reading
       if (err) {
           console.log(err);
           // returns to exit the callback function
           return 
       }
       // Stores the contents of the second file
       const second = result;
       // Prints the contents of the second file to the console
       console.log(result);
       // Writes the combined contents of "first" and "second" to "result-async.txt" file asynchronously
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
         // Checks to see if an error occured during the file writing
           if (err) {
               console.log(err);
               // Returns to exit the callback function
               return 
           }
           // Prints "done with the task" to the console
           console.log('done with the task');
       }
       );
   })
});

// Prints "starting next task" to the console
console.log('starting next task');

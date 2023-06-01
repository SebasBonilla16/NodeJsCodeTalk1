/* Coding Problem 3
What is happening in the following code snippet? */

// Create function named "getTodos"
const getTodos = () => {
    // This line creates a new XMLHttpRequest object
 const request = new XMLHttpRequest();
// Adds an event listener for the "readystatechange" event
request.addEventListener('readystatechange', ()=>{
// Checks if the request state is done(4) and the status is successful (200)
 if(request.readyState === 4 && request.status ===200){
    // Prints the response text received from the server
   console.log(request.responseText)
    }
   else if (request.readyState === 4){
    // Prints and error message if request is done but the status is not successful
     console.log('could not fetch the data');
   }
});

// Opens a GET request to the specific URL
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// Sends the request to the server
request.send();
}

//Call the "getTodos" function twice to initiate two different HTTP requests
getTodos();
getTodos();

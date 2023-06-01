/* Coding Problem 5
What is happening in the code below?
Why is this important?
What would you use mySQL for?
Can you give an example?
Assume that you have already installed ran npm install mysql */

// Imports the "mysql" module
var mysql = require('mysql');
// Creates a connection variable with the database configuration
var connection = mysql.createConnection({
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});
// Establishes the connection to the MySQL database
connection.connect(function(error){
    // Checks if there is an error during the connection
  if(!!error){
    // Prints the error message to the console
    console.log(error);
  }else{
    // Prints a success message to the console if the connection is successful
    console.log('Connected!:)');
  }
});
// Exports the connection variable to be used in other files
module.exports = connection;


// This code is important because it allows us to establish a connection to a MySQL database from Node.js.
// MySQL is a widely uses relational database managment system (RDBMS) that provides an efficient and powerful way to store, retrieve, and manage structured data
// You would use MySQL for a variety of purposes such as Data Persistence, Web Application Development, and Data Analysis and Reporting
// An example would be for the e-commerce website. MySQL would help store information such as customer details, orders, and products
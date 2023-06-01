/* Coding Problem 4
What is happening in the code below?
Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors */ 


// validation.js

// Imports the "check" function from the "express-validator" module
const { check } = require('express-validator');
// Exports validation arrays
// The "signupValidation" array contains validation rules for the signup route
exports.signupValidation = [
    // Validation rule for the "name" field: It checks if the field is not empty
   check('name', 'Name is required').not().isEmpty(),
   // Validation rule for the "email" field:
   // It checks if the field is a valid email format
   // It also uses the "normalizeEmail" function to normalize the email address by removing dots from the Gmail username
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   // Validation rule for the "password" field: It checks if the field is at least 6 characters long
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
];
// The "loginValidation" array contains validation rules for the login routge
exports.loginValidation = [
    // Validation rule for the "email" field: It checks if the field is a vaild email format
    // It also uses the "normalizeEmail" function to normalize the email address by removing dots from the Gmail username
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    // Validation rule for the "password" field: It checks if the field is at least 6 characters long
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]


// Server.js file

// Imports necessary modules 
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Imports validation arrays from "validation.js"
const { signupValidation, loginValidation } = require('./validation.js');
// Creates an instance of the Express application
const app = express();
// Sets up middleware for parsing JSON data
app.use(express.json());
// Sets up middleware for parsing URL encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Enables CORS (Cross-Origin Resource Sharing)
app.use(cors());
// Defines a route handler for the root route ("/")
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
// Defines the "/register" route
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
});
// Defines the "/login" route
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
//Error handling middleware
app.use((err, req, res, next) => {
   // console.log(err);
   // Sets default status code and error message
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   // Send error response with status code and error message
   res.status(err.statusCode).json({
     message: err.message,
   });
});
// Starts the server on port 3000
app.listen(3000,() => console.log('Server is running on port 3000'));

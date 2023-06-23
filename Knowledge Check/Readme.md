# Knowledge Check

## Introduction

This is a primary check to ensure you have the basic understanding required to understand the basics of this project. The following are some basic challenges that everyone should be able to complete. If you are unable to complete these challenges, you should take some time to learn the basics of the tools you are struggling with. 

## Databases

The database we'll be using is MySQL. Please ensure you have MySQL downloaded and running on your computer. For this knowledge check, you'll need to create a database called KnowledgeCheck. You'll also need to create a table called `users` with the following columns:

- unique user id (int, primary key)
- username (varchar(255))
- password (varchar(255))
- email (varchar(255))

For the unique user id, we want each id to be unique. Take care in trying to build custom logic to ensure this is the case. You may use any method of ensuring that this is the case.

For the first database task, we need to create a JavaScript/TypeScript function that creates the SQL table and then adds a user to the table. The function should take in the username, password, and email as parameters. The function should then add the user to the table. The password should be hashed before being added to the table. The function should return the unique user id of the user that was just added.

The test for this will be inserting a series of different values into the table and ensuring that the values are inserted correctly. The test will also check to ensure that the password is hashed correctly. The test will also check to ensure that the unique user id is unique.

## JavaScript/TypeScript

In either JavaScript/TypeScript, please complete the following function. You need to make a function that generates prime numbers. We want to be able to pass in a number and get back an array of prime numbers up to that number. For example, if we pass in 10, we should get back [2, 3, 5, 7]. For this challenge, we want to see who can make the most efficient function while producing the largest prime number:

``` javascript
function generatePrimeNumbers() {
    // Your code here
}
```

When it comes to actually testing the code, your code should be in a format that matches the following. There's space to put your code within the function `generatePrimeNumbers()`. Please ensure that your code matches the output specified. You may change up the structure of the code, but the output should be the same. The code should also stop running after roughly 30 seconds.

```javascript
const startTime = Date.now()
var a = new Date();
const endTime = startTime + 30000;


function generatePrimeNumbers() {
    // This function should generate the prime numbers between.
    // This code should stop running after roughly 30 seconds.

    const primeNumbers  = [];
    

    while (true) {
        const startTime = Date.now()
        if (startTime > endTime) {
            var b = new Date();
            return [b, primeNumbers];
        }
    }
}

primeNumbers = generatePrimeNumbers();
var difference = (primeNumbers[0] - a) / 1000;

console.log('This is the prime number array: ', primeNumbers[1]);
console.log('This is the time it took to generate the prime numbers: ', difference, 'seconds')
```

## Challenge

To recap and summarize, the there are two important challenges for this task:

1. User sign up table with password hash function
- Make a SQL database with above defined columns and add a function that adds users with a hashed password
2. Prime number function
- Goal is to generate the largest prime number in 30 seconds

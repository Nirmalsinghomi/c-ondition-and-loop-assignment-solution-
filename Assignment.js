// Questions and non js answer/written answer are written in commands . 

/*  Q1. What are conditional statements Explain conditional statements with syntax and examples. 

ans =  Conditional statements in JavaScript are used to execute different blocks of code based on certain conditions being true or false. There are primarily three types of conditional statements in JavaScript: if, else if, and else...


if Statement:
The if statement evaluates a condition and executes a block of code if the condition is true.

Syntax: */

if (condition) {
    // block of code to be executed if condition is true
}

// Example : 
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

//... 

/* 
else if Statement:
The else if statement allows you to check multiple conditions. If the first condition is false, it checks the next condition.

Syntax: */

if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2) {
    // block of code to be executed if condition2 is true
} else {
    // block of code to be executed if none of the above conditions are true
}

// Example :
let num = 10;
if (num > 10) {
    console.log("Number is greater than 10");
} else if (num < 10) {
    console.log("Number is less than 10");
} else {
    console.log("Number is equal to 10");
}

//...

/* else Statement:
The else statement is used to execute a block of code if the condition of the if statement is false.

Syntax: */

if (condition) {
    // block of code to be executed if condition is true
} else {
    // block of code to be executed if condition is false
}

// Example :
let age = 17;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// These conditional statements allow you to control the flow of your JavaScript code based on different conditions, making your programs more dynamic and responsive.

// -------------------------------------------------------------------------------------------------------------------------------

/* Que 2. Write a program that grades student based on their marks.
.  If greater than 90 then A grade
.  If between 70 and 90 then B grade
.  If between 50 and 70 then C grade
.  If below 50 then F grade.

ans = */

function calculateGrades (marks) {
    if (marks > 90 ) {
        return 'A'
    }

    else if (marks >= 70 && marks <= 90 ) {
        return 'B'
    }

    else if ( marks >= 50 && marks <= 70 ) {
        return 'C'
    }

    else {
        return 'F'
    }
}

// Test examples for this program 
console.log ("Grade for 93 marks :" , calculateGrades(92));
console.log ("Grade for 80 marks :" , calculateGrades(80)); 
console.log ("Grade for 65 marks :" , calculateGrades(65));
console.log ("Grade for 40 marks :" , calculateGrades(40));

// ----------------------------------------------------------------------------------------------------------------------------------

/* Que 3. Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples

ans = Loops are control structures in programming languages that allow you to repeat a block of code mulitple times based on certain conditions. They are essential for automaing repetitive tasks and iterating over collections of data.

There are mainly three types of loops in Javascript 'for loop' , 'while loop' , and 'do while' loop .

1. for Loop: 
The 'for loop' is used when you know how many times you want to repeat a block of code. It consists of three parts : initialization, condition, and increment/decrement.

The syntax :
for ( Initilization ; condition ; increment/decrement ) {
    block of code to be executed repeatedely
}

The example :
for (let i =0 ; i < 7 ; i++ ) {
    console.log ("Iteration" , i )
}

2. While loop :
The while loop is used when you don't know how many times you want to repeat a block of code but have a condition that needs to be met to continue the loop.

Syntax:
while (condition) {
    // block of code to be executed repeatedly
}

Example :
let i = 0;
while (i < 5) {
    console.log("Iteration:", i);
    i++;
}


3. do...while Loop:
The do...while loop is similar to the while loop, but it guarantees that the block of code inside the loop will be executed at least once before checking the condition.

Syntax:
do {
    // block of code to be executed repeatedly
} while (condition);

Example :
let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 5);

*/

//  These loop structures enable you to iterate over arrays, manipulate data, perform calculations, and execute code repetitively until certain conditions are met. Each type of loop has its use cases, and choosing the right one depends on the specific requirements of your program.


//------------------------------------------------------------------------------------------------------------------------------

/* Que 4.Generate numbers between any 2 given number. 
Example 
. const num1 = 10
. const num2 = 25;
Output : 11, 12, 13, ...., 25

ans : */

function generatenumbersinrange (num1 , num2) {
    if (num1 >= num2) {
        console.log ("Invalid input , num1 should be less than num2");
        return ;

    }
    
    for (let i = num1+1 ; i < num2 ; i= i+1 ) {
        console.log(i)
    } 
}

console.log (generatenumbersinrange(7,14))

// -------------------------------------------------------------------------------------------------------------------------------

/*Que 5. Use the while loop to print numbers from 1 to 25 in ascending order and descending order.

ans : */

// Ascending order
let a = 1;
let b = 25;
while (a <= b) {
    console.log(a);
    a++;
}

// Descending order

let y = 1;
let z = 25;
while (z >= y) {
    console.log(z);
    z = z-1;
}
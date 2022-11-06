// comments 

var number = 5; // inline comment

/* this is 
multiline 
comment 
*/

/* Data Types :
undefined, null, boolean, string, number, symbol, and object. */

// three types to declare a variable. 

// first one 
var myName = "Hassan Raza"; // global scope, used throughout the program.
// second one
let age = 23; // block scope, used only in specific block
// third one
const pi = 3.14; // can not change. 


//  Storing Values with assignment operator.

var a; // declare;

var b = 2; // declare and assign a value.

a = 10; // 10 assign to a

b = a; // a value assigned to b.

console.log(a); // see output in console.

// Initializing Variables with assignment operator.

var num = 10;

// Uninitializing
var a;
var b; 
var c;

//  Case Sensitivity in Variables.

// Declarations 
var StUdlyCapVar;
var properCamelCase; // common practice to use camel case.
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10; // this and above this is not a same. undefined 
PRoperCAmelCAse = "A String"; // this and above this is not a same. undefined
tITLEcASEoVER = 9000; // this and above this is not a same. undefined

// ADDING NUMBERS
var sum = 10 + 10;  // using + operator, you can add numbers. 
console.log("Sum of Numbers:"+sum); // output is 20.

// SUBTRACTING NUMBERS
var difference = 45 - 30;  // using - operator, you can subtract numbers.
console.log("Difference of Numbers:"+difference);  //  output is 15.

// MULTIPLYING NUMBERS
var product = 10 * 10; // using * operator, you can multiple numbers.
console.log("Multiple of Numbers:"+product); //  output is 100.

// DIVIDING NUMBERS
var quotient = 66 / 33;
console.log("Division of Numbers:"+quotient);

// INCREMENTING NUMBERS
var myNum = 46;
myNum = myNum + 1;
// quick way to increment
myNum++;

// DECREMENTING NUMBERS
var myNum2 = 46;
myNum2 = myNum2 - 1;
myNum2--;

// Decimal Numbers
var myDecimal = 3.49;
console.log(myDecimal);
console.log(typeof(myDecimal)) // type of method check the data type of variable. 

// Multiply Decimal
var product = 3.0 * 3.5;
console.log(product);

// Divide Decimals
var quotient = 4.4 / 2.2;
console.log(quotient);

// Finding a remainder
var remainder = 3 % 2;
console.log(remainder);

// Compound Assignment with Augmented Addition 
a = a + 9;
b = b + 10;
c = c + 12;
// Compound Assignment
a += 9;
b += 10;
c += 12;

// Compound Assignment with Augmented Subtraction
a = a - 9;
b = b - 10;
c = c - 12;
// Compound Assignment
a -= 9;
b -= 10; 
c -= 12;

// Compound Assignment with Augmented Multiplication
a = a * 9;
b = b * 10;
c = c * 12;
// Compound Assignment 
a *= 9;
b *= 10;
c *= 12;

// Compound Assignment with Augmented Division
a = a / 9;
b = b / 10;
c = c / 12;
//  Compound Assignment 
a /= 9;
b /= 10;
c /= 12;

// Declare String Variables
var myFirstName = "Hassan";
var myLastName = "Raza";

// Escaping Literal Quotes in Strings
var myStr = "I am  a \"double quoted\" string inside \"double quotes\" ";
console.log(myStr); // using backslash \ you can insert "".

// Quoting Strings with Single Quotes
var myStr = ' "Hello World! Learn Free Web Development Via FreeCodeCamp." ';
console.log(myStr);

// Escape Sequences in Strings

/*****
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// Concatenating String with plus operataor
myFirstName = "Junaid";
myLastName = "Khan";
var fullName = myFirstName +" "+ myLastName;
console.log(fullName);

// Concatenating String with plus equals operataor
fullName += fullName;
console.log(fullName);

var sentence = "This is javascript.";
sentence += " This is end of the script.";
console.log(sentence);

//Concatenating String with Variables
var ourName = "Hassan Raza";
var ourStr = "Hello, My name is "+ ourName + ", How are you?";
console.log(ourStr);

// Appending Variables to Strings
var myStr = "Learning to code is ";
var someAdjective = "awesome!";
myStr += someAdjective;
console.log(myStr);

// Find Lenght of String
var course = "webDevelopment";
var courseLenght = course.length;
console.log(courseLenght);

//Bracket Notation to find First Character in String
var firstName = "Hassan";
console.log(firstName[0])

// String Immutability
var message = "Jello World";
message[0] = "H"; // H can not be assigned
message = "Hello World";
console.log(message);

//Bracket Notation to nth First Character in String
// find the 10 character
console.log(message[10]);





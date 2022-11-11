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
var firstName = "Hassan";
var lastLetter = firstName[firstName.length - 1];
console.log(lastLetter);

// Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb,myAdverb){  
    var result = "";
    result += "The"+myAdjective+myNoun+myVerb+" to the store "+myAdverb;

    return result;
}

console.log(wordBlanks(' dog', ' big', ' ran', 'quickly'));

// Store Multiple Values in Array
var ourArray = ["Hassan", 23];
var myInfo = ["Hassan", 23, "BSIT", "Gaji Khuhawar"];

// Nested Arrays
                        // index 0      index 1
var myNestedArray = [["Hassan", "Raza"],["BSIT", 23]];
                    //[0][0]   [0][1]  [1][0] [01][1]
console.log(myNestedArray[1]); // access the 2nd array 
console.log(myNestedArray[1][0]); // access the first element of 2nd array

// Access Array Data with Indexes
var ourArray = [50,60,70];
var myData = ourArray[0]; // equals 50
console.log(myData);

//Modify Array Data With Indexes
 ourArray = [80,90,100]; // modified the whole array
 console.log(ourArray);
// modify single element 
ourArray[0] = 120;
console.log(ourArray[0]);
//Accessing multi-Dimension array
var ourArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],[13,14,15]]];
console.log(ourArray[3][0][0]);

//Munipulate Arrays with push()
var myFriends = ["Farhan", "Imtiaz", "Asif"];
console.log(myFriends);
myFriends.push("Junaid", "Wasim");
console.log('After Push ',myFriends);

// Multi-dimension push()
var myFriends = [["Imtiaz", "Farhan"], ["Asif", "Junaid"]];
myFriends.push(["Wasim", "Salman"]);
console.log(myFriends);

//Munipulate Arrays with pop()
var myNumbers = [12,15,21,28,35];
console.log(myNumbers);
myNumbers.pop(); // last index element is fired that was 35
console.log(myNumbers);

var nameAndAge = [['Hassan', 23],['Asif', 25]];
var nameAndAgeFired =  nameAndAge.pop(); // pop() remove last index in the array.
console.log("Fired",nameAndAgeFired);
console.log(nameAndAge);

// Munipulate Arrays with shift()
// shift(): It removes first element in the array.
var nameAndAge = [['Hassan', 23],['Asif', 25]];
var firedArray = nameAndAge.shift();
console.log('Fired', firedArray);
console.log(nameAndAge);

// Munipulate Arrays with unshift()
// unshift(): It insert element in the first index of the array.
var nameAndAge = [['Hassan', 23],['Asif', 25]];
console.log('Array After Shift function');
nameAndAge.shift(); // first index-element removed
console.log(nameAndAge);

nameAndAge.unshift(['Hassan', 23]); 
console.log('Array After unshift function')
console.log(nameAndAge);

// Shopping List
var shoppingList = [['milk', 3],['tea',5],['sugar', 1],['mix-fruit', 1]];
console.log(shoppingList);

// ================== Creating Array with Array Method ====================== //

arr1 = new Array("purple", "green", "yellow"); // not recommended
arr1.push('red');     // ["purple", "green", "yellow", "red"] // red at last index
arr1.unshift('pink'); // ["pink", "purple", "green", "yellow", "red"] // pink at first index
arr1.pop();           // ["pink", "purple", "green", "yellow"] // red removed
arr1.shift();         // ["pink", "purple", "green", "yellow"] // pink removed
// Final Array Output
console.log(arr1);

// ========================================================================== //

// *****************************  Functions ********************************* // 
//  write reuseable code with functions

// create a simple function which print Hello World on console.

function simple(){
    console.log("Hello World!");
}

// call the function to exceute
simple(); 

// Passing Values to functions with arguments
function simpleWithArgument(greet){
    console.log(greet);
}

// call the function and pass a value in the brackets
simpleWithArgument('Hi, Good Afternoon!');
simpleWithArgument('Hi, Good Evening!');
simpleWithArgument('Hi, Good Night!');
// you can pass any value to the function
simpleWithArgument(1000);

// passing value to function
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}

ourFunctionWithArgs(10,5);

// Global Scope and Functions
var myGlobal = 10;
function fun1(){
    // assign 5 to oppsGlobal Here
        oopsGlobal = 5; //if there is no var keyword while defining the 
                    // variable it becomes automatically globalScope.                 
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2();

// Local Scope and Functions
function localScope(){
    var myVar = 10; // accessible within function
    console.log(myVar);
}
localScope();
// console.log(myVar); // it gives error because of scope. 

// Local vs Global Scope in Function

var outerWear = "T-Shirt";
function myOutFit(){
    var outerWear = "Sweater"; // when global and local variable inside the 
    return outerWear;          // function, it preference to local variable.
}                              // that's why Sweater is printed. 
                                            
console.log(myOutFit());  // output Sweater, Why Sweter?
console.log(outerWear);  // now T-Shirt will be printed because 
                        //  it gives preference to global variable.           

// Return A Value From a Function with Return 
function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Understanding Undefined Value Returned From A Function 
 var sum = 5;
 function addNumber(){
    sum += 3;
 }

 console.log(addNumber()); // undefined

// Assignment with a returned value
var changed = 0;
function change(num) {
    return (num + 3)/ 2
}

changed = change(9); // Assignment with a returned value
console.log(changed);

// Stand In Line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArray = [1,2,3,4,5];
console.log("Before: "+ JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After: "+ JSON.stringify(testArray));

// Boolean Values
function boolean() {
    return true
}

var boolean = boolean();
console.log(boolean);

// Use conditional logic with if statements
function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

// Comparsion with the equality operator
function testEqual(val) {
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(11));

//  Comparsion with the Strict equality operator
if(3 =='3'){
    console.log('True');
}   
// strict equality operator
if(3 ==='3'){
    console.log('True');
}else{
    console.log('False');
}

// Practice Comparing Different Values
console.log("Practice Comparing Different Values")
function compareEquality(a,b){
    if(a == b){
        console.log("TRUE")
    }
    if(a === b){
        console.log("FALSE");
    }else{
        console.log("ELSE IS RUNNING: (a === b) condition is fail")
    }
}
compareEquality(10, "10");

// Comparsion with the inequality operator
function notEqual(val){
    if(val != 100){
        console.log('Not Equal')
    }
    else{
        console.log("(100 != '100' :Running')");
    }
}
notEqual('100');

// Strict inequality operator
function notEqualStrict(val){
    if(val !== 100){
        console.log('Not Equal')
    }
    else{
        console.log("(100 != '100' :Running')");
    }
}
notEqualStrict('100');

// Comparsions with the logical AND(&&) Operator
if(100 == '100' && 100 ==='100'){
    console.log('IF Running');
}else{
    console.log('ELSE IS RUNNING');
}

// Comparsions with the logical OR (||) Operator
if(100 == '100' && 100 ==='100'){
    console.log('IF Running');
}else{
    console.log('ELSE IS RUNNING');
}


// ELSE IF Statements
function testElseIf(val) {
    if(val < 10){
        return "Greater than 10" 
    } else if(val > 20) {
        return "Less than 20"
    } else {
        return "Between 10 and 20";
    }
    console.log(val);
}
var value = testElseIf(18);
console.log(value);

//  logical order in If else statement 
/*  
if(val < 5){

} else if(val < 10){

}else{
    Greater than or equal to 10.
}
*/

// Chaining if else 
/* 
(val < 5)
(val < 10)
(val < 15)
(val < 20)
(val >= 20)
*/

// Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if(strokes == 1){
        return names[0];
    } else if(strokes <= par - 2){
        return names[1]
    } else if(strokes == par - 1){
        return names[2]
    } else if(strokes == par ){
        return names[3]
    } else if(strokes <= par + 1){
        return names[4]
    } else if(strokes <= par + 2){
        return names[5]
    } else if(strokes <= par + 3){
        return names[6]
    }
    
    return "Change ME";
}
console.log(golfScore(5,4));


// Switch Statements
// The switch statement is used to perform 
// different actions based on different conditions.
function caseInSwitch(val) {
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;    
  default:
    answer = "default";  
          } // switch end

    return answer;
}

console.log(caseInSwitch(1));

// Multiple Identical Options in Switch Statements
function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;    
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;            
    }   
    return answer
}

console.log(sequentialSizes(8));

// Replace if else chains with switch
// If Else Chain
function ifElseChain(val){
    answer = 0;
    if(val === 1){
        answer = 1;
    } else if( val === 2){
        answer = 2;
    } else if(val === 3){
        answer = 3;
    }

    return answer;
}

console.log(ifElseChain(2));

// replace above with switch statement
function switchChain(val){
    answer = 0;
    switch(val) { // start switch
        case 1:
            answer = 1;
            break;
        case 2:
            answer = 2;
            break;
        case 3:
            answer = 3;
            break;
                } // end switch
    return answer;
}

console.log(switchChain(3));

// Returning a Boolean Values from Functions
function isLess(a,b){
    return a < b;
}
console.log(isLess(18,15));

// Returning Early Pattern from function.
function abTest(a,b){
    if(a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2));

// Counting Cards

var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":    
            count--;
            break;            
    }
    var holdbet = "Hold";
    if(count > 0) {
        holdbet = 'Bet';
    }
    
    return count + " " + holdbet ;
}
console.log(cc("J")); 

// Javascript Objects
// Objects are variables too. But objects can contain many values.

// let's create object of Dog

var Dog = {
    name: "Quincy",
    legs: 4,
    tails: 1,
    friends: ['None'],
}
// accessing object property using dot notation
var dogName = Dog.name;
console.log(dogName);

// accessing object properties with braket notation
var dogLegs = Dog["legs"];
console.log(dogLegs);

// accessing object properties with variables
var myData = {
    name: "Hassan Raza",
    dob: '03/02/1899',
    cnic: 434070443125101,
    emailAddress: 'hassanraza.000046@gmail.com',
    qualification: 'graduation'
}

var myDataCnic = 'cnic';
console.log('using variable to access object property: ', myData[myDataCnic]); 

// Updating Object Property
myData.cnic = 4340704435100; // cnic property changed
myData.name = "Raza Hassan"; // name property changed
console.log(myData.name)

// Add new property to an Object
myData.livingPlace = "Karachi"; // updating using dot 
myData['job'] = 'dataAnalyst'; // updating using brakets
console.log(myData.job);

// Delete property from an object 
delete myData.job;
delete myData.cnic;
console.log(myData);

// Using Objects for lookups
function phoneticLookup(val){
    var result = " ";

    var lookup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "Chicago",
        "delta": "denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };

    result = lookup[val];

    return result
}
console.log(phoneticLookup("foxtrot"));

// Testing Objects for Properties
function checkObj(checkProp) {
    if(myData.hasOwnProperty(checkProp)){
        return myData[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("hello"));

// Manipulating Complex Objects
var music = [
    {
        "artist": "Rahat Fatah",
        "title": "zaroori tha",
        "release_year": 2016,
        "formats": [
            "CD", "8T", "LP"
        ],
        "gold": true 
    },
    {
        "artist": "Asif",
        "title": "apna tha",
        "release_year": 2022,
        "formats": ["tik-tok video"]
    }
]

console.log(music[0].formats[0]);

// Accessing Nested Objects
var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
};

var gloveBoxContent = myStorage.car.outside["trunk"];
console.log(gloveBoxContent);

// Accessing Nested Arrays
var myPlants = [
    {
        type:"flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]
console.log(secondTree);

// Record Collection
var collection = {
    "1":{
        "album": "one",
        "artist": "asif",
        "tracks":[
            "apna tha",
            "tujhe chahen ga"
        ]
    },
       "2":{
        "artist": "asif",
        "tracks": []
    },
       "3":{
        "album": "one",
        },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
               
function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    } else if(prop == "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

// console.log(updateRecords(2, "tracks", "Rahat fatah"));
// console.log(updateRecords(2, "tracks", "Rahat"));
// console.log(updateRecords(3, "tracks", "Rahat"));

// console.log(collection)

// While Loops 
var myArray = []
var i = 0;
while(i < 6) {
    myArray.push(i);
    if(i === 5){
        myArray.pop();
    }
    i++;
}
console.log(myArray);

// For Loops
var myArr = []
for (var i = 0; i < 6; i++){
    myArr.push(i);
}
console.log(myArr);

// Even/Odd Program
//Even Program
var myArr_2 = []
for (var i = 0; i < 10; i += 2){
    myArr_2.push(i);
}
console.log(myArr_2);

// odd program
var myArr_3 = []
for (var i = 1; i < 10; i += 2){
    myArr_3.push(i);
}
console.log(myArr_3);

// Count Backwards with a for loop
var arr = []
for (var i = 10; i > 0; i -= 2){
    arr.push(i);
}
console.log(arr);

// backward odd numbers
var arr_ = []
for (var i = 9; i > 0; i -= 2){
    arr_.push(i);
}
console.log(arr_);

// Iterate Through an Array with a for loop.
var myArr = [10,12,14,16];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total);

// Nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) { // outter for loop 
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
        /* How loops work;
        console.log(1*1); // first iterate outer,   1 inner
        console.log(1*2); // first iterate outer,   2 inner
        console.log(2*3); // second iterate outer,  1 inner
        console.log(6*4); // second iterate outer,  2 inner
        console.log(24*5); // third iterate outer,  1 inner
        console.log(120*6); // third iterate outer, 2 inner
        console.log(720*7); // third iterate outer, 3 inner after that
                         outer condition fail, loop terminate
        */
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

// Iterate with do while loops
var num = 10;
do{
    console.log('play with num ', num); 
    num++;
}
while(num > 20)
console.log(num);

// Profile Lookup
 var contact = [
    {
        firstName: "Asif",
        lastName: "Bashir",
        number: "+92",
        likes: ["Pizza", "Burger", "Chicken Burger"]
    },
    {
        firstName: "Farhan",
        lastName: "Ali",
        number: "+93",
        likes: ["Chicker Karahi", "Burger", "Chawal"]
    },
    {
        firstName: "Junaid",
        lastName: "Qureshi",
        number: "+94",
        likes: ["Juice", "Coding", "Chicken"]
    },
    {
        firstName: "Hassan",
        lastName: "Raza",
        number: "+95",
        likes: ["Mutton Chorma", "Sabzi Mix", "Kheer"]
    },
 ];

 function lookUpProfile(name, prop){
    for(var i = 0; i < contact.length; i++){
        if(contact[i].firstName === name){
            return contact[i][prop] || "No such property";
        }
    }
    return "No such contact";
 }

 var data = lookUpProfile("Junaid", "number");
 console.log(data);
// console.log(contact[2]['likes'])

// Generate Random Fraction
function randomFraction() {

    return Math.random();
}
console.log(randomFraction()); // Math.random(), generates number between 0 and 1.

// Generate Random Whole Numbers
function wholeRandomNumber() {
    return Math.floor(Math.random() * 10);
}
console.log(wholeRandomNumber());

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax){        
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} 

console.log(randomRange(10,15));

// ParseInt Function
function convertToInteger(str) {
   return parseInt(str); // it takes string and convert it into number.
}
console.log(convertToInteger("56"));

// Use the parseInt function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2); // it takes binary string and convert into decimal.
 }
 console.log(convertToInteger("10011"));

// Use the conditional (Ternary) Operator.
var num = 10
num = num > 5 ? 'ternary' : false;
console.log(num); 

// Use multiple conditional (Ternary) Operators.
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-1));

// Difference between var and let keywords
let catName = 'Qunicy';
// let catName = "Fancy"; // gives error
// using let you can not declare a variable twice. but you can in var.
var dogName = "Shelly";
var dogName = "Dolley"; // It's fine 

// Compare Scopes of the var and let keywords
function checkScope() {
    "use strict"; // not statement
     var i = "function scope";
     if(true){
        let i = "block scope";
        console.log("Block scope i is: ", i);
     }
     console.log("Function scope i is: ", i);
     return i;
}
checkScope();

// Declare a read-only variable with the const keyword
const sentence_ = "This is a room"; // const: read only 
console.log(sentence_); 
// sentence_ = sentence_ + "this is a house"; // error, read only
// console.log(sentence_);

// Mutate an Array Declared with const
const s = [5,6,7];
console.log(s);
function editInPlace(){
    "use strict";
    s[0] = 7;
    s[1] = 6;
    s[2] = 5;
}
editInPlace();
console.log(s)

// Prevent Object Mutation 
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };

    // Object.freeze(MATH_CONSTANTS); // restrict to change, gives error

    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
// console.log(PI); 

// Use Arrow Functions to Write Concise Anonymous Functions
var magic = () => new Date();
console.log(magic());

// Arrow Functions with Parameter
var numbers = (arr1, arr2) => arr1.concat(arr2);
console.log(numbers([1,2], [3,4,5]));

// Write Higher Order Arrow Function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
} 
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)

// Write Higher Order Arrow Function
const increment = (function(){
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

// Use the Rest Opeartor with Function Parameters.
const sumTotal = (function(){
    return function sumTotal(...args){
        return args.reduce((a,b) => a + b, 5);
    };
}) ();
console.log(sumTotal(5));

// Use the Spread Opeartor to Evaluate Arrays In-Place.
const arr_1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr_2;
(function(){
    arr_2 = [...arr_1]; // copy arr1 into arr2
    arr_1[0] = 'APPLE'
}) ();
console.log(arr_2);

// Use Destructuring Assignment to assign variables from objects
var destructuring_obj = {x:10,y:20,z:30};
const {x:a_, y:b_, z:c_} = destructuring_obj;
console.log(a_);

// Destructuring Assignment with Nested Objects
const local_Forecast = {
    today: {min: 72, max: 80},
    tomorrow: {min: 74, max:84}
};

const {today:{min:getTodayMin}, today:{max: getTodayMax}} = local_Forecast;
console.log('Today Max:', getTodayMax);
console.log('Today Min:', getTodayMin);
console.log(local_Forecast.today.min)

// Use Destructuring Assignment to Assign Variables from Arrays
const [,,,,A,B] = [1,2,3,4,5,6]
console.log(A);
console.log(B);
// [A,B] = [B,A];

// Use Destructuring Assignment with the rest operator;
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...resArr] = list;
    return resArr
}
const resArr = removeFirstTwo(source);
console.log(resArr);
console.log(source);

/* Use Destructuring Assignment to pass an object as a
   Function's Parameter */

// this is a common way to use API CALL.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function(){

    return function half({max, min}){
        return(max + min) / 2.0;
    };
}) ();

console.log(stats);
console.log(half(stats));

// Create Strings using template literals

const person = {
    name: "Hassan Raza",
    age: 23
}

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old`;
console.log(greeting);

// Coding Challenge
const result = {
    success: ["max-lenght", "no-amd", "prefer-arrow-functions"],
    failure: ["no-war", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class=""text-warning"> ${arr[i]} </li>`);
    }
    return resultDisplayArray; 
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (fullName, age, gender) => ({fullName, age, gender});
console.log(createPerson("HASSAN RAZA", 23, "MALE"));

// Write Concise Declarative Functions
const bicycle = {
    gear:2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(4);
console.log(bicycle.gear);

// Use a class syntax to define a constructor function
function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(typeof carrot);

// Use getters and setters to control access to an object
function makeClass() {
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        // getter
        get temperature(){
            return this._temp;
        }
        // setter 
        set temperature(updatedtemp){
            this._temp = 5/9 * (updatedtemp - 32);
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(56);
let temp = thermos.temperature;
thermos.temperature = 90;
temp = thermos.temperature;
console.log(temp);

// Understand the Difference Between import and require
// import { capitalizeString } from "./stringFunctionCap.js";
// const cap = capitalizeString("Hello World");
// console.log(cap);

// Use export to reuse a code block
// const capitalizeString = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export { capitalizeString };

// export const foo = "bar";
// export const bar = "foo";

// console.log(foo);

// Use * to import everything from a file
import * as anything from "./stringFunctionCap";

// Create an export fallback with export default 
export default function subtract(x,y) {return x-y};

// Import a default export
// import subtract from "./stringFunctionCap";
// subtract(10,9);
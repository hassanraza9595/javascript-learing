// console 
// console.log('Hello World');
// console.log('Hassan Raza');

// Variables : are placeholders to store information and data in your app.
// var firstName = "Hassan Raza";
// console.log(firstName);
// console.log(`My name is ${firstName}`);

// Don't use var. it's outdated.

// User Input
// fruit = prompt('Your Favourite Fruit: ');
// console.log(fruit);

// var food = Number(prompt('how much was the food?'));
// var tipPercentage = Number(prompt('tip %?') / 100);
// var tipAmount = food * tipPercentage;
// var total = food + tipAmount; 
// console.log(`total amount was ${total}`);

/*
Math.random() generate random numbers
Math.floor() Rounds down
Math.ceil Rounds up
*/
// console.log(Math.floor(Math.random() * 10));


// Conditions
// let weather = prompt('How is the weather there');
// if(weather === 'rain' || weather === 'rainy'){
//     console.log('Grab your umbrella');
// } else{
//     console.log('wear your sunglasses');
// }

// Chapter 3 Functions

function sayMyName(userName){
    console.log(userName);
}

// sayMyName('Qazi');
// sayMyName('Clever Programmer');

function sum(a,b){
    return a + b;
}
// console.log(sum(10,20));

function calculateFoodTotal(food, tip){
     total = food + tip; 
     return total;
}

// console.log(calculateFoodTotal(1000, 50));

// Arrow function, explicit return
// const sumArrow = (a,b) => {
//     return a + b;
// }

// Arrow function, implicit return
const SUM = (a,b) => a + b 

// console.log(SUM(10,15));

// Chapter 4 Arrays

groceries = ['apple', 'banana', 'pear', 'mango'];
// console.log(groceries[2]);

// Array Methods
groceries.push('cherry'); // add an element into array at the end 
// console.log(groceries);

groceries.push('cherry'); // duplicate cherry element
// console.log(groceries);

// delete the element from the array at the end 
groceries.pop();
groceries.pop(); // cherry deleted 

// console.log(groceries); 

// add an element into array in the start
groceries.unshift('cherry'); // cherry added at the start index 0
// console.log(groceries);

groceries.shift();
// console.log(groceries); // cherry deleted 

// console.log(groceries.slice(0,2)); // start from 0 and end at 2, display element 0, 1

// indexOf return the index of element 
// console.log(groceries.indexOf('banana')); // 

// Chapter 05 Objects

// const person = {
//     name: 'Hassan', 
//     shirt: "blue"
// }

// console.log(person.name); // dot notation
// console.log(person['name']); // bracket notation

// assign object
// person.phone = '+9232-23012380';
// console.log(person.phone);

// ES6 arrow function 2 arguments
// object
// template literals

const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liablities: 50000,
        netWorth: function(){
            return person.assets - person.liablities
        }
    }

    const intro = `Hi, my name is ${person.name} and 
    the color of my shirt is ${person.shirt} and 
    my net worth is ${person.netWorth()}.`;

    return intro;
}

console.log(introducer('Hassan Raza', 'Blue'));

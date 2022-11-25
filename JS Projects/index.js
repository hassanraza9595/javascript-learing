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

// console.log(introducer('Hassan Raza', 'Blue'));


// Chapter 6 Loops 

const fruits = ['apple', 'banana', 'pear', 'mango'];

// for(let i = 0; i < fruits.length; i++){  // don't use this for loop
//     console.log(fruits[i]);
// }

// cleaner for loop
// for(const fruit of fruits){
//     console.log(fruit)
// }

// const numbers = [1,2,3,4,5,6];
// const result = [];
// for(const number of numbers){
//     result.push(number*2);
// }
// console.log(result);

const double = (numbers) => {
    const result = [];
    for(const number of numbers){
        result.push(number**2);
    }

    return result;
}

// console.log(double([1,2,3,4,5,10]));

const howManyLetters = () => {
    const pharse = `hey, you can go to grocery store for me.`;
    const result = [];
    // for in loop gives index.
    for(const letter in pharse){
        // console.log(Number(letter)+1);
        result.push(Number(letter) + 1);
    }

    return result 
}

howManyLetters();
// console.log(howManyLetters());

const sumArray = (numbers) => {
    let result = 0;
    // for loop
    for(const num of numbers){
        result += num;
    }
    return result;
}
const nums = [1,2,3,4,5]
// console.log(sumArray(nums))

// create a program which return max number

const max = (numbers) => {
    let result = numbers[0];
    // for loop
    for(const number of numbers){
        if(number > result){
            result = number;
        }
    }
    return { result }; 
}

// console.log(max([0, -1, -5,3,2,1,6,3,7]));

const letterFrequency = (pharse) => {
 console.log(pharse);
//  make an frequency object 
 let frequency = {};
 for(const letter of pharse){
    // check if letter exists in frequency 
    console.log(letter);
    if(letter in frequency){
        // increment the value by 1
        frequency[letter]++;
    } else{
        // otherweise, set the value to 1
        frequency[letter] = 1;
    }
 }   
 return frequency;
}

// console.log(letterFrequency('Hello My Name is Hassan Raza'));

// word frequency
const wordFrequency = (pharse) =>{
    const words = pharse.split(' ');
    return letterFrequency(words);
}

// console.log(wordFrequency('lol what you are doing here lol'));


// Chapter 8 Array Methods (map, filter, reduce)

// map() --> loops and returns an array

const result = [1,2,3,4,5].map(number => number * 2);
// console.log(result);


// filter() --> loops and returns an array and matching conditions 

const filter = (numbers, greaterThan) =>{
     const greaterArray = [];
     for(const number of numbers){
        if(number > greaterThan){
            greaterArray.push(number)
        }
     }
     return greaterArray;
}

// console.log(filter([1,2,3,4,5,6,7,8,9,10], 7));

const no = [ 2,3,4,5,7,9];
// console.log(no.filter(num => num > 4));


const actors = [
    {name: 'hassan', netWorth: 0},
    {name: 'junaid', netWorth: 150000},
    {name: 'asif', netWorth: 1000}
]

// console.log(actors.filter(actor => actor.netWorth > 1000 || actor.netWorth > 0));


// reduce() --> takes a function as an argument and number and loops then back the accumulator.

const numbers  = [1,2,3];
const resu = numbers.reduce((previous, current) => previous + current);
// console.log(resu); 

// ***************************************************************************************** //
// DOM Manipulation


// seletors
// const redDiv = document.getElementById('red');
// const greenDiv = document.getElementById('green');
// const yellowDiv = document.getElementById('yellow');

// Event Listener
// redDiv.onclick = () => console.log('red');
// greenDiv.onclick = () => console.log('green');
// yellowDiv.onclick = () => console.log('yellow');

// const squares = document.querySelectorAll('.colorSquare');
// for(const color of squares){
//     console.log(color.value )
// }

// using ForEach
// const timesClicked = {'red':0, 'green': 0, 'yellow':0}
// squares.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value]++;
//         square.innerText = timesClicked[square.value]
//     }
// });

// function clearGame() {
//     squares.forEach(square => {
//         square.innerText = ''
//     })
// }

// const clear = document.getElementById('clear');
// clear.onclick = () => clearGame();


// select random fruit from an array

// const randomFruits = (fruit) => {
//     const randomFruit = Math.floor(Math.random() * fruit.length);
//     return fruit[randomFruit];
// }

// const fruitss = ['Apple', 'Banana', 'Cherry', 'Mango', 'StrawBerry'];
// console.log(randomFruits(fruitss));

// if else if else
// rainy 1, sunny (-1), overcast 0

const WeatherScore = (weather) => {
    let score;
    if(weather === 'rainy'){
        score = 1;
    } else if(weather === 'sunny'){
        score = -1;
    } else {
        score = 0;
    }

    return score;
}

console.log(WeatherScore('rainy'));

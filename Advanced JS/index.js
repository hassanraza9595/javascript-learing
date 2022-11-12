//  ADVANCE JAVASCRIPT

// **************** NESTED FUNCTION's SCOPE ********************* //

// let a = 10;
// function outer(){
//     let b = 20;
//     function inner(){ // inner function access variable from outer function as well.
//         let c = 30;
//         console.log(a,b,c);
//     }
//     inner();
// }
// outer();

// **************** END NESTED FUNCTION's SCOPE ********************* //

// *************************** CLOSURE ****************************** //
/* Defination: A Closure is the combination of a function bundled 
together with reference its surronding state. Closure are created 
every time a function is created, at function creation time.*/

// Keypoint: inner function access outer function scope even after outer function finished exeution.

// function outer(){
//     let counter = 0;
//     function inner(){ // inner function access variable from outer 
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// }

// const fn = outer();
// fn();
// fn();
// fn();

// *************************** END CLOSURE ************************** //

// *************************** FUNCTION CURRYING ******************** //
/* Definition: Currying is a process in functional programming in which we
transform a function with multiple arguments into a sequence of nesting
functions that take one argument at a time; 
function f(a,b,c) transformed to function(a)(b)(c)
*/

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,3,5));
// sum(2,3,5) transformed sum(2)(3)(5)

// function curry(sum){   // fn() as an argument
//      console.log("curry fn:" ,fn);
//     return function(x){
//          console.log("function x ", x);
//         return function(y){
//              console.log("function y ", y);
//             return function(z){
//                  console.log("function z ", z);
//                 return sum(x,y,z)
//             }
//         }
//     }
// } 

// const curriedSum = curry(sum);
// console.log(curriedSum);

// const fun_1 = curriedSum(2);
// console.log("Fun_1:", fun_1);
// const fun_2 = fun_1(4);
// console.log("Fun_2", fun_2);
// const fun_3 = fun_2(6);
// console.log("Fun_3", fun_3);

// *************************** END FUNCTION CURRYING **************** //

// *************************** This Keyword ************************* //

/* Defination: => The javascript this keyword which is used in a function,
                  refers to the object it belongs to.
               => It makes functions reuseable by letting you decide the object value
               => this value is determined entirely by how a function is called.
               
               How to determine 'this'?
               ( when multiple rules applies on this keyword. )
               => Implicit          (3rd priority)
               => Explicit          (2nd priority) 
               => New binding       (1st priority)
               => Default binding   (4th priority)      
*/

// Implicit

// const person = {
//     name: "Hassan",
//     sayMyName: function() {
//         console.log(`My name is ${this.name}`) // this refer to object person
//     },
// }
// person.sayMyName();

// Implicit

// function sayMyName(){
//     console.log(`My name is ${this.name}"`)
// }

// sayMyName.call(person);

// New Binding or Constructor
// function Person(name){
    // this = {} empty object
//     this.name = name
// }
// const p1 = new Person('Hassan Raza');
// const p2 = new Person('Ali Raza');
// console.log(p1.name);
// console.log(p2);

// Default Binding { this keyword rely on global scope}
// globalThis.name = "Supermen";
// function sayMyName(){
//     console.log(`My name is ${this.name}`)
// }

// sayMyName();

// *************************** End This Keyword ********************* //

// *************************** Prototype **************************** //
    /*Def: The JavaScript prototype property allows you to add
    new properties and methods to object constructors: */

    // function Person(fName, lName){
    //     this.firstName = fName,
    //     this.lastName = lName 
    // }

    // Person.prototype.getFullName = function() {
    //     return this.firstName + ' ' + this.lastName
    // }
 
       // function with new keyword called constructor.
      // const person1 = new Person('Hassan', 'Raza'); 
     // const person2 = new Person('Junaid', 'Qureshi'); 

         // console.log(person1.getFullName());
        // console.log(person2.getFullName());

    // function SuperHero(fName, lName) {
    //     // this = {}
    //     Person.call(this, fName, lName); // inherit Person Object Constructor or call the person contructor
    //     this.isSuperHero = true; 
    // }

    // SuperHero.prototype = Object.create(Person.prototype);  // Person Constructor assign to Superhero Constrcutor
    // const batman = new SuperHero('Asif', 'Ali');
    
    // SuperHero.prototype.fightCrime = function () {
    //     console.log('Fighting Crime');
    // }

    // SuperHero.prototype.constructor = SuperHero
    // console.log(batman.fightCrime());

// *************************** END Prototype **************************** //

// *************************** CLASSES ******************************** //
class PersonClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
        showPerson() {
        console.log(this.name);
        console.log(this.age);
    }
       changePerson(newName, newAge) {
        this.name = newName;
        this.age = newAge;
    }
}

const person1 = new PersonClass('Hassan', 23);
person1.changePerson('Ali', '50');
console.log(person1.name + " " + person1.age);

// *************************** END CLASSES **************************** //
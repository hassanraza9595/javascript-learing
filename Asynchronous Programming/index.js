// const waitingForSoup = ()=> console.log('Soup is ready ');

// setTimeout(waitingForSoup, 2000);

// console.log('You start the convo with friends');

// Promises 

// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     isReady = [true, false][Math.floor(Math.random() * 2)]
//     isReady ? resolve('Soup is ready'): reject('No Soup Today');
//     }, 2000); 
// })

// console.log(
    // promise1.then(value => console.log(value)) // run promise when condition is fulfilled
    // .catch(value=> console.log(value))); // run promise when condition is rejected


// Async Await

// const getSoup = async () => {
//     const data = {
//         rating: 0, tip: 0, pay: 0, review: 0
//     }
//     try{
//         const soup = await promise1;
//         console.log(soup);
//         data.rating = 5;
//         data.tip = 5;
//         data.pay = 10;
//         data.review = 5;
//         return data
//     } catch(error){
//         console.log(error);
//         data.rating = 0;
//         data.tip = 0;
//         data.pay = 0;
//         data.review = 0;
//         return data
//     }
// }

// console.log(getSoup().then(value => console.log(value)));
 
// const getDog = async () => {

//  const url = 'https://dog.ceo/api/breeds/image/random';
//  const response = await fetch(url);
//  const data = await response.json();
//  console.log(data);
// }

// getDog();


const sum = async(a,b) => a+b;

console.log(sum(1,2).then(value => console.log(value)));
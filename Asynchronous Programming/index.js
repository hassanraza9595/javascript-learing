// const waitingForSoup = ()=> console.log('Soup is ready ');

// setTimeout(waitingForSoup, 2000);

// console.log('You start the convo with friends');

// Promises 

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('Soup is ready'): reject('No Soup Today');
    }, 2000);
})

console.log(
    promise1.then(value => console.log(value)) // run promise when condition is fulfilled
    .catch(value=> console.log(value))); // run promise when condition is rejected
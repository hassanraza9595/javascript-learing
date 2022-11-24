// Inputs Field
// billTotalInput, tipInput, numberOfPeople, perPersonTotal

const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

// console.log(billTotalInput);
// console.log(tipInput);
// console.log(numberOfPeople);
// console.log(perPersonTotal);


let numberOfPeopleDiv = Number(numberOfPeople.innerText);

const calculateBill = () => {
    const bill = Number(billTotalInput.value);
    const tipPercentage = Number(tipInput.value) / 100;
    const tipAmount =  bill * tipPercentage;
    const total = bill + tipAmount;
    const perPerson = total / numberOfPeopleDiv;
    
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;
}


const increasePeople = () => {
     numberOfPeopleDiv += 1;
     
    //  update DOM
    numberOfPeople.innerText =  numberOfPeopleDiv;

    calculateBill();
}


const decreasePeople = () => {
    
    // guard clause
    if(numberOfPeopleDiv <= 1){
        throw 'Hey! You cannot have less than 1 person';
        return 
       }
    
    numberOfPeopleDiv -= 1;
    
   //  update DOM
    numberOfPeople.innerText =  numberOfPeopleDiv;

   calculateBill();
}
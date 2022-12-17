// Classes

// class Car{
//     constructor(name, color, speed){
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//     }

//      showDetail() {
//         console.log(this.name);
//         console.log(this.color);
//         console.log(this.speed);
//     }
// }

// const ferrari = new Car('ferrari', 'red', 250)

// ferrari.showDetail();


// ******************************************************************************* //

// create a bank class and add deposit, withdraw and balance methods.

// class Bank {
//     // Constructor
//     constructor(amountDeposit) {
//     this.amountDeposit = amountDeposit;
// }
// // Methods
//     deposit(amount=0){
//         console.log(this.amountDeposit);
//         this.amountDeposit += amount;
//         return this.amountDeposit
//     }

//     withdraw(amountWithdraw) {

//         if(this.amountDeposit !== 0){

//         if(this.amountDeposit === amountWithdraw){
//             this.amountDeposit -= amountWithdraw;
//             console.log(`You have successfully withdraw: ${amountWithdraw}`)
//         }

//         else if(amountWithdraw > 499 && this.amountDeposit > 0){
//             this.amountDeposit -= amountWithdraw;
//             console.log(`You have successfully withdraw: ${amountWithdraw}`);
//         }
//         else{
//             console.log('You cannot withdraw ' + amountWithdraw)
//         }
//     } else{
//         console.log(`Balance: ${this.amountDeposit}, Deposit First`)
//     }
        
//         return this.amountDeposit
        
//     }

//     balance(){
//        console.log(`Balance: ${this.amountDeposit}`)
//     }

// }

// const hassanrazaAccount = new Bank(1000);
// hassanrazaAccount.withdraw(1500)
// hassanrazaAccount.withdraw(500)


// **************************************************************************************** //

class Bank{
    constructor(balance){
        this.balance = balance;
    }

    withdraw(withdrawAmount){
        console.log(`Withdrew: ${withdrawAmount}`)
        // guard clause
        if(this.balance - withdrawAmount < 0){
            console.log('You can not withdraw more than you have', `${this.balance}`);
            return
        }
        this.balance -= withdrawAmount;
    }

    deposit(depositAmount=0){
        this.balance += depositAmount;
        console.log(`Balance: ${this.balance}`);
    }
}

const hassanAccount = new Bank(1000);
hassanAccount.withdraw(1000);
hassanAccount.deposit()


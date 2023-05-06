// //"Private" modifier used when we can't change any properties value.
// // "Protected" modifier used to access any class properties on another class properties. 

// class BankAccount {
//     id: number;
//     name: string;
//     // private _balance: number;
//     protected _balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }

//     getBalance() {
//         console.log(`My account balance is ${this._balance}`)
//     }
    
//     addDeposit(amount: number) {
//         this._balance = this._balance + amount
//     }
// }

// // Protected modifier
// class StudentAccount extends BankAccount {
//     test() {
//         this._balance 
//     }
// }

// const myAccount = new BankAccount(444, "Persian", 40)
// console.log(myAccount)



function BankAccount(accountNumber, name, type, balance, active){
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.Active = active;
//  methods for the bank account
  this.deposit = function(amount){

    this.balance += amount

  }

//  withdraw methods for the bank account
  this.withdraw = function(amount){
    if(amount <= this.balance)
    {
        this.balance -= amount
        console.log("You have successfully withdrawn ", this.balance , "from your account")
    }
    else
    {
        console.log("You have not sufficient balance in your saving account :- ", this.balance)
    }

    }
   
// check balance method 
  this.checkBalance = function(){
    console.log("Current Balance of",this.name,"is :- " ,this.balance)
  }

// Is Active 
  this.isActive = function(checkActive){
    if(this.Active == checkActive)
    {
        return `this account no. ${this.accountNumber} is activated`
    }
    else
    {
        return `this account no. ${this.accountNumber} is not activated`
    }
  }
}

// Accounts created here
let acc1 = new BankAccount(12345, 'naveen', 'saving', 500, true )
// console.log(acc1)


let acc2 = new BankAccount(123456, 'yukta', 'saving', 600, true)
// console.log(acc2);


let acc3 = new BankAccount(453425, 'seema', 'saving', 700, false)
// console.log(acc3);


let acc4 = new BankAccount(523424, 'ajay', 'saving', 300, true)
// console.log(acc4);


// operations on these accounts
// deposit on each account
acc1.deposit(8000)
console.log(acc1);

acc2.deposit(8000)
console.log(acc2);

acc3.deposit(6000)
console.log(acc3);

acc4.deposit(8000)
console.log(acc4);

// withdraw on each account
acc1.withdraw(2000)
acc2.withdraw(1000)
acc3.withdraw(4000)
acc4.withdraw(6000)


// check Balance on each account
acc1.checkBalance()
acc2.checkBalance()
acc3.checkBalance()
acc4.checkBalance()


// test if the account isActive or not
let Acc1 = acc1.isActive(true)
console.log(Acc1);

let Acc2 = acc2.isActive(true)
console.log(Acc2);

let Acc3 = acc3.isActive(true)
console.log(Acc3);

let Acc4 = acc4.isActive(true)
console.log(Acc4);



let accounts = [acc1, acc2, acc3, acc4];
function getTotalBalance(IsActivated)
{
    let totalAccBalance = 0
    for(let i = 0; i < accounts.length; i++)
    {
            if(accounts[i].Active == IsActivated)
            {
                totalAccBalance += accounts[i].balance
            }
            
            
        
    }

    return `Total Balance of All accounts is :-  ${totalAccBalance}` 
}

let totalBalance = getTotalBalance(true)
console.log(totalBalance);





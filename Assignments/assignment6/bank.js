class BankAccount {
    constructor(accno, bal) {
        //     if (accno.startsWith("IN") && accno.length === 12) {
        //         this.accountNumber = accno
        //     }
        //     else {
        //         throw new Error("Error")
        //     }
        //     if (bal >= 1000) {
        //         this.balance = bal
        //     }
        //     else {
        //         throw new Error("Error")
        //     }
        // }
        this.accountNumber = accno
        this.balance = bal
    }

    deposit(amt) {
        this.balance += amt
        console.log('New balance:', this.balance)
    }
    withdraw(amt) {
        if (this.balance > amt && this.balance - amt >= 1000) {
            this.balance -= amt
            console.log('New balance:', this.balance)
        } else {
            throw new Error("Error")
        }
    }

    transfer(amt, accno) {
        if (this.balance - amt >= 1000) {
            this.balance -= amt;
            var found=true;
            accounts.forEach((val) => {
                if (val.accountNumber === accno) {
                    val.balance += amt;
                    found=false;
                }

            })
            if(found){
            throw new Error("Account not found")
        }
        }
        else {
            throw new Error("Minimum balance is not maintained");
        }
        
    }
}
var accounts = []

function createAccount(accno, bal) {
    if (accno.startsWith("IN") && accno.length === 12 && bal >= 1000) {
        acc1 = new BankAccount(accno, bal)
        accounts.push(acc1)
    }
    else if (!accno.startsWith("IN")) {
        throw new Error("Invalid account number")
    }
    else if (bal < 1000) {
        throw new Error("Minimum balance should be 1000 or more")
    }

}

function display() {
    accounts.forEach((val) => {
        console.log(val)
    })
}

createAccount("IN1234567890", 5000);
createAccount("IN0987654321", 3000);
console.log(accounts)
accounts[0].deposit(2000);
accounts[1].withdraw(500);
accounts[0].transfer(2000, "IN0987654321");
console.log(accounts)
display()

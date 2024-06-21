class BankAccount {
    #accountHolder;
    #accountNum;
    #balance = 0;
    constructor(accountHolder, accountNum) {
        this.#accountHolder = accountHolder;
        this.#accountNum = accountNum
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount < this.#balance) {
            this.#balance -= amount;

        }

    }
    getBalance() {
        return `Balance of ${this.#accountHolder} and ${this.#accountNum} is this.#balance`;
    }
}
const axis = new BankAccount("acc123", "jayant");
axis.deposit(100);
axis.withdraw(25);
console.log(axis.getBalance());
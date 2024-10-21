
class UserAccount {
    constructor(firstName, lastName, age, phoneNumber, accountNumber) {
 this.firstName = firstName; this.lastName = lastName;this.age = age;
      this.phoneNumber = phoneNumber;
      this.accountNumber = accountNumber;this.accountBalance = 0;
      this.loanBalance = 0;
    }
  }
  
  // Class for the Bank
  class Bank {
    constructor(bankName, totalBalance, loanLimit) {
      this.bankName = bankName;this.totalBalance = totalBalance;
      this.loanLimit = loanLimit;this.users = [];
    }
  
    // Method to generate a random account number
    randomNumber() {
      let accountNumber = "24"; // Assuming all account numbers start with 24
      for (let i = 0; i < 8; i++) {
        accountNumber += Math.floor(Math.random() * 10);
      }
      return accountNumber;
    }
  
    // Method to create an account
    createAccount(firstName, lastName, age, phoneNumber) {
      if (age < 18) {
        console.log("Ineligible to create an account.");
      } else {
        let accountNumber = this.randomNumber();
        let newUser = new UserAccount(firstName, lastName, age, phoneNumber, accountNumber);
        this.users.push(newUser);
        console.log(`Account created for ${firstName}. Account Number: ${accountNumber}`);
      }
    }
  
    // Method to request a loan
    requestLoan(accountNumber, amount) {
      const client = this.users.find(u => u.accountNumber === accountNumber);
      if (client) {
        if (this.totalBalance >= amount) {
 client.accountBalance += amount;
          client.loanBalance += amount;this.totalBalance -= amount;
          console.log(`Loan approved for ${client.firstName}. New balance: ${client.accountBalance}`);
        } else {
          console.log("Bank has insufficient funds.");
        }
      } else {
        console.log("Invalid account number.");
      }
    }
  }
  
  // Create a new Bank
  let majormaxxBank = new Bank("majormaxxInc", 35000000, 17000000);
  
  // Create account holders
  majormaxxBank.createAccount("mr", "John", 26, "09035249481");
  majormaxxBank.createAccount("miss", "Jane", 20, "090352492344");
  majormaxxBank.createAccount("engr", "Emeka", 37, "09035249432");
  majormaxxBank.createAccount("top", "Dawg", 35, "090352492341");
  
  // Request a loan for a specific user
  majormaxxBank.requestLoan("2412345678", 5000); // Use a correct account number
  
  
  console.log(majormaxxBank.users[0]);
  
  
// Complete the following program to add the definition of the Dog class.

// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class dog {
   constructor(name, breed, height) {
      this.name = name
      this.breed = breed
      this.height = height
   }
   bark(height) {
      if (this.height >= 60) {
         console.log ('Grrr! Grrr!')
      } else {
         console.log ('Woof! Woof!')
      }
   }
}

// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges.These accounts are stored in an array.Next, the program credits 1000 to each account and shows its description.

class BankAccount {
   constructor(name, balance, credit) {
      this.name = name
      this.balance = balance
      this.creditamount = credit
   }
   addCredit(balance, credit) {
      let accountBalance = balance + credit
   }
   description(name, accountBalance) {
      console.log(`account:${name}, balance: ${accountBalance}`);
   }
}
/*Lab 1 — Create a Simple Class
 Create a class called Car with properties make, model, and year.
 Add a method getDescription() that returns a string like:
 "2021 Toyota Camry".
Test cases:
const car1 = new Car("Toyota", "Camry", 2021);
console.log(car1.getDescription()); // "2021 Toyota Camry"

Extension:
Add a color property and include it in the description.
*/

class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getDescription() {
        return this.year + " " + this.make + " " + this.model + " " + this.color;
    }
}

const car1 = new Car("Toyota", "Camry", 2021, "blue");
console.log(car1.getDescription()); // "2021 Toyota Camry"

/*Add Methods and Modify Properties
Create a class BankAccount with properties owner and balance.
Add the following methods:

deposit(amount) → increases the balance.
withdraw(amount) → decreases the balance (only if funds are available).
getBalance() → returns "Balance: $___".

Test cases:
const acc = new BankAccount("Alex", 100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance()); // "Balance: $120"

Extension: Return "Insufficient funds" if withdraw() exceeds the balance.
*/

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if(amount > this.balance) {
            return "Insifficient funds";
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }
}

const acc = new BankAccount("Alex", 100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance()); // "Balance: $120"

/*Class Inheritance
Create a class Person with properties name and age, and a method introduce() that says "Hi, I'm [name], and I'm [age] years old."
Then create a subclass Student that adds a grade property and overrides introduce() to include the grade.

Test cases:
const s1 = new Student("Maya", 17, "11th");
console.log(s1.introduce()); // "Hi, I'm Maya, I'm 17 years old, and I'm in 11th grade."

Extension:
 Add a method promote() in Student that moves them to the next grade.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "Hi, I'm " + this.name + ", and I'm " + this.age + " years old.";
    }
}

class Student extends Person{
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade;
    }

    introduce() {
        return "Hi, I'm " + this.name + ", and I'm " + this.age + " years old. I'm in " + this.grade + " grade";
    }
}

const s1 = new Student("Maya", 17, "11th");
console.log(s1.introduce()); // "Hi, I'm Maya, I'm 17 years old, and I'm in 11th grade."

/**Classes and Arrays
 Create a class Book with properties title, author, and pages.
 Then create an array of 3 Book objects and write a function listBooks() that loops through the array and logs each book's title and author.
Test cases:
const library = [
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R. Tolkien", 310),
  new Book("Dune", "Frank Herbert", 412)
];

listBooks(library);
// Output:
// "1984 by George Orwell"
// "The Hobbit by J.R.R. Tolkien"
// "Dune by Frank Herbert"

Extension:
 Add a getShortBooks() function that filters and returns books with less than 350 pages.
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString() {
        return this.title + " by " + this.author;
    }

    static listBooks(array) {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i].toString());
        }
    }
    
    static getShortBooks(array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].pages < 350) {
                console.log(array[i].toString());
            }
        }
    }
}

const library = [
    new Book("1984", "George Orwell", 328),
    new Book("The Hobbit", "J.R.R. Tolkien", 310),
    new Book("Dune", "Frank Herbert", 412)
  ];
  
  Book.listBooks(library);
  Book.getShortBooks(library);
  // Output:
  // "1984 by George Orwell"
  // "The Hobbit by J.R.R. Tolkien"
  // "Dune by Frank Herbert"
 
/* Lab 5 — 
 Create a class User with:
a private field #password,


a public username property, and


methods setPassword(p) and checkPassword(p) that validate and return a success or failure message.


Test cases:
const u1 = new User("azahar");
u1.setPassword("abc123");
console.log(u1.checkPassword("abc123")); // "Access granted"
console.log(u1.checkPassword("wrong")); // "Access denied"

Extension:
 Require that passwords be at least 6 characters long before setting.
*/

class User {
    #password;
    constructor(username) {
        this.username = username;
    }
    
    setPassword(p) {
        if(p.length >= 6) {
            this.#password = p;
        } else {
            return "Password not long enough. Try again.";
        }
    }
    
    checkPassword(p) {
        if(p == this.#password) {
            return "Access granted";
        } else {
            return "Access denied";
        }
    }
}

const u1 = new User("azahar");
u1.setPassword("abc123");
console.log(u1.checkPassword("abc123")); // "Access granted"
console.log(u1.checkPassword("wrong")); // "Access denied"

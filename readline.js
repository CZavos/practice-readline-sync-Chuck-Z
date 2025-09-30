const readline = require('readline-sync');
let name1 = readline.question("Enter your first name: ");
let name2 = readline.question("Enter your last name: ");
let name3 = readline.question("Enter your middle initial: ");
let year = readline.questionInt("Enter the year that you were born: ");
let age = readline.questionInt("Enter your age: ");
let presentYear = year + age;
console.log("Your full name is " + name1 + " " + name3 + ". " + name2 + ", and you were born in " + year + " and you are " + age + " years old. The current year must be " + presentYear + ".");

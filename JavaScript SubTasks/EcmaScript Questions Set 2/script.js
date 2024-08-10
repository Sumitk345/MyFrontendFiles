// Assignment 1
let numbers1 = [3, 9, 12, 15, 7, 20];
let newnumarray = numbers1.filter(num => num > 10).map(num => num * num);
console.log("Assignment 1:", newnumarray);


//Assignment 2	Create a function that accepts an array of objects representing books with title and author. 
//The function should return an object with authors as keys and an array of their books as values.	
let books =
 [
      {"title": "Book A", "author": "Author 1"}, 
      {"title": "Book B", "author": "Author 2"}, 
      {"title": "Book C", "author": "Author 1"}, 
      {"title": "Book D", "author": "Author 3"}
];


//Assignment 3	Write a function that takes an array of strings and returns a single string with each word capitalized and joined with a space.	
let phrases = ["hello world", "ecmascript is fun", "lets code"];

var newphrase = phrases.map(item=>item.split(" "))
console.log("Assignment 2:",newphrase)
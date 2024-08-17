// Assignment 1
let numbers1 = [3, 9, 12, 15, 7, 20];
let newnumarray = numbers1.filter(num => num > 10).map(num => num * num);
console.log("Assignment 1:", newnumarray);


//Assignment 2	Create a function that accepts an array of objects representing books with title and author. 
//The function should return an object with authors as keys and an array of their books as values.	
let books =
      [
            { "title": "Book A", "author": "Author 1" },
            { "title": "Book B", "author": "Author 2" },
            { "title": "Book C", "author": "Author 1" },
            { "title": "Book D", "author": "Author 3" }
      ];

var newarr = books.map(item => {
      return { [item.author]: books.filter(obj => obj.author == item.author).map(b => b.title) }
})

console.log(newarr)




//Assignment 3	Write a function that takes an array of strings and returns a single string with each word capitalized and joined with a space.	
let phrases = ["hello world", "ecmascript is fun", "lets code"];

var newphrase = phrases.flatMap(item => item.split(" "))
newphrase.forEach((word, index) => {
      var letterword = word.charAt(0).toUpperCase();
      var newword = word.replace(word.charAt(0), letterword)
      newphrase[index] = newword
})


console.log("Assignment 2:", newphrase.toString().replaceAll(",", " "))



/////////////////////////////////////////////////////////
console.log("Assignment 4	Implement a function that takes an array of numbers and returns the product of all numbers, excluding any numbers less than 5.")
var numbers = [2, 5, 8, 3, 6];
var newans = numbers.filter(item => item > 5).map(number => number * number)
console.log(newans)



/////////////////////////////////////////////////////////////
console.log("Assignment 5	Given an array of people with name and age, create a new array with names of people who are older than 18 and sort it alphabetically.")
let people = [{ "name": "John", "age": 19 }, { "name": "Jane", "age": 22 }, { "name": "Jack", "age": 20 }, { "name": "Jill", "age": 15 }];
var newans = people.filter(obj => obj.age > 18).sort((a, b) => a.name.localeCompare(b.name))
console.log(newans)




///////////////////////////////////////////////////////////////
console.log("Assignment 6	Given an array of numbers, return a new array where each number is incremented by 2 only if it’s an even number.	")
var numbers = [1, 2, 3, 4, 5, 6];
var newans = numbers.filter(item => item % 2 == 0).map(number => number + 2)
console.log(newans)



///////////////////////////////////////////////////////////////////
console.log("Assignment 7 Create a function that finds the most frequent element in an array of numbers. If multiple elements are equally frequent, return the smallest one.	")
var numbers = [1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4];
var uniqueNumbersSet = new Set(numbers);
uniqueNumbersArray = Array.from(uniqueNumbersSet);

var uniquearray = uniqueNumbersArray.map((num) => {
      newans = numbers.filter(item => item == num).length
      return { num, newans }
})
uniquearray.sort((a, b) => {
      if (b.newans === a.newans) {
            return a.num - b.num;
      }
      return b.newans - a.newans;
})

console.log("most frequent element in an array of numbers is :: " + uniquearray[0].num)





/////////////////////////////////////////////////////
console.log("Assignment 8 Given an array of strings, return a new array with each string reversed, but only if it’s longer than 3 characters.")

var strings = ["apple", "kiwi", "banana", "pear"];
var newans = strings.map((item) => {
      if (item.length > 3) {
            return revnames(item)
      }
      else {
            return item
      }
})
function revnames(name) {
      var str = "";
      for (let i = name.length - 1; i >= 0; i--) {
            str += name[i];
      }
      return str
}
console.log(newans)






//////////////////////////////////////////////
console.log("Assignment 9	Implement a function that returns an array of objects where each object contains name and length, where length is the length of the name string.")
let names = ["Alice", "Bob", "Charlie", "David"];
var newans = names.map((item) => {
      return { name: item, length: item.length }
})

console.log(newans)





/////////////////////////////////////////////
console.log("Assignment 10	Given an array of objects with name and price, return the average price of the items.")
var items = [{ "name": "item1", "price": 100 }, { "name": "item2", "price": 200 }, { "name": "item3", "price": 300 }];

var newans = items.reduce((p, c) => {
      return p + c.price;
}, 0)

console.log("average price of the items. ::  " + newans / items.length);





//////////////////////////////////////////////
console.log("Assignment 11	Write a function that takes an array of numbers and returns an object with even and odd arrays containing even and odd numbers respectively.	")
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];





//////////////////////////////////////////////
console.log("Assignment 12	Create a function that accepts an array of objects where each object has name and age. Return a new array with names of people who are between 20 and 30 years old, sorted in descending order of age.")
var newpeople = [{ "name": "John", "age": 25 }, { "name": "Jane", "age": 32 }, { "name": "Jack", "age": 28 }, { "name": "Jill", "age": 22 }];

var newans = newpeople.filter((item) => {
      return item.age > 20 && item.age < 30
}).sort((a, b) => b.age - a.age)
console.log(newans);




////////////////////////////////////////////////
console.log("Assignment 13	Given an array of numbers, write a function that returns the sum of all numbers greater than the average of the array.	")
var numbers = [10, 20, 30, 40, 50];

var newans = numbers.reduce((p, c) => {
      return p + c;
}, 0)

var x = newans / numbers.length
var newans = numbers.filter((item) => { return item > x})
                    .reduce((p, c) => { return p + c}, 0)

console.log(newans);




///////////////////////////////////////////////
console.log("Assignment 14 Write a function that takes an array of strings and returns an array of strings that have the character 'e' in them, with the 'e' removed.")
let newstrings = ["apple", "banana", "grape", "pear"];

var newans = newstrings.filter(item=>item.includes("e")).map(item=>item.replace("e",""))
console.log(newans);




/////////////////////////////////////////////
console.log("Assignment 15	Given an array of objects representing orders with item and quantity, write a function that returns the total quantity of all items.")
let orders = [{"item": "apple", "quantity": 3}, {"item": "banana", "quantity": 2}, {"item": "cherry", "quantity": 5}];

var newans = orders.reduce((p,c)=>{
     return p+c.quantity;
},0);

console.log("total quantity of all items ::"+newans);



///////////////////////////////////////////////
console.log("Assignment 16 Group an array of objects by a specified key (e.g., category).");
var items = [{"name": "item1", "category": "A"}, {"name": "item2", "category": "B"}, {"name": "item3", "category": "A"}, {"name": "item4", "category": "C"}];
var groupedItems = items.reduce((grouped, item) => { (grouped[item.category] = grouped[item.category] || []).push(item); return grouped; }, {});
console.log("\nGrouped items by category ::", groupedItems);




///////////////////////////////////////////////
console.log("Assignment 17 Given an array of numbers, return the difference between the maximum and minimum values.");
var numbers = [10, 2, 34, 7, 22];
numbers.sort((a,b)=> a-b)
console.log(numbers);
var difference = numbers[numbers.length - 1] - numbers[0];
console.log("Difference between max and min values ::", difference);




///////////////////////////////////////////////
console.log("Assignment 18 Return the object with the highest score.");
let scores = [{"name": "Alice", "score": 85}, {"name": "Bob", "score": 90}, {"name": "Charlie", "score": 88}];
var highestScore = scores.reduce((maxObj, scoreObj) => 
      (scoreObj.score > maxObj.score) ? scoreObj : maxObj);
console.log("Object with the highest score ::", highestScore);



/////////////////////////////////////////////////
console.log("Assignment 19 Return a sorted array by price in ascending order.");
let products = [{"name": "item1", "price": 150}, {"name": "item2", "price": 200}, {"name": "item3", "price": 100}];
var sortedProducts = products.sort((a, b) => a.price - b.price);
console.log("Sorted array by price in ascending order ::", sortedProducts);



/////////////////////////////////////////////
console.log("Assignment 20 Given an array of strings, return a new array with each string replaced by its length if it contains more than 3 characters.");
var strings = ["a", "bb", "ccc", "dddd", "eeeee"];
var lengthsArray = strings.filter(str => str.length > 3).map(str => str.length);
console.log("New array with lengths of strings with more than 3 characters ::", lengthsArray);

// 1. Create an array and name it `groceries`, add 6 groceries to it
let groceries = ["apple", "banana", "knife", "bored", "book", "pen"];
// 2. Print the second element from the array `groceries`
console.log(groceries[1]);
// 3. Print how many elements are in the array (i.e length of the array)
console.log(groceries.length);
// 4. Print the last element in the array
console.log(groceries[groceries.length - 1]);
// 5. Remove the last element from the array and print it
console.log(groceries.pop());
// 6. Add two new and different elements to the end of the array
groceries.push("hala", "light");
console.log(groceries);
// 7. Create a new array named `firstThreeItems` and it’s elements are the first three elements from the `groceries` array.
let firstThreeItems = groceries.slice(0, 4);
console.log(firstThreeItems);

// 🌶️🌶️🌶️ **Challenge**

// 1. Delete the 3rd element in the array
console.log(firstThreeItems.splice(3, 1));
console.log(firstThreeItems);
// 2. Insert a new element at the beginning of the array
console.log(firstThreeItems.splice(0, 1, "first"));
console.log(firstThreeItems);
// 3. Remove the first two elements and replace them with “ketchup” and “chili”
console.log(firstThreeItems.splice(0, 2, "ketchup", "chili"));
console.log(firstThreeItems);

// The splice() method in JavaScript is used to add, remove, or replace elements in an array.
//  It modifies the original array and returns an array of removed elements.
//   The syntax is array.splice(start, deleteCount, item1, item2, ..., itemN),
//   where start is the index to begin changes, deleteCount is the number of elements to remove, and item1, item2, ..., itemN are elements to add.
//   For example, array.splice(2, 0, "Lemon", "Kiwi") adds elements,
// array.splice(2, 2) removes elements, and array.splice(2, 1, "Lemon", "Kiwi") replaces elements.
//  This method is versatile for array manipulation.

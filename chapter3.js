// ----------------------------- Practice Exercise 3.1 --------------------------------------------------
document.write("<h2>Practice Exercise 3.1</h2>");
// print shopping item list array in console 
var shoppingList = ["Milk", "Bread", "Apple"];
console.log(shoppingList);
document.write("Shopping Item List: " ,shoppingList);


 // Replace the Bread to Bananas
shoppingList[1] = "Bananas";
console.log(shoppingList);
document.write("By replacing the Bread to Bananas" ,shoppingList);

// -------------------------------Practice Exercise 3.2----------------------------------------------
// Practice Exercise 3.2
document.write("<h2>Practice Exercise 3.2</h2>");

// Create an empty array to use as a shopping list
document.write("<h4>1. Create an empty array to use as a shopping list</h4>");
var emptyArr = new Array(5);
console.log("This is empty array: " ,emptyArr);
document.write("This is empty array: " ,emptyArr);

// Add Milk, Bread, and Apples to your list.
document.write("<h4>2. Add Milk, Bread, and Apples to your list.</h4>");
var myArr = ["Milk", "Bread", "Apples"];
console.log("List of items: " ,myArr)
document.write("List of items: " ,myArr)

// Update 'Bread' with Bananas and Eggs.
document.write("<h4>3. Update 'Bread' with Bananas and Eggs.</h4>");
myArr.splice(1, 1, "Bananas", "Eggs");
console.log(myArr);
document.write(" Update 'Bread' with Bananas and Eggs.", myArr);


// Remove the last item from the array and output it into the console.
document.write("<h4>4. Remove the last item from the array and output it into the console.</h4>");
myArr.pop();
console.log(myArr);
document.write("By removing the last item from the array we got", myArr);

// Sort the list alphabetically
document.write("<h4>5. Sort the list alphabetically.</h4>");
myArr.sort();
console.log(myArr);
document.write("Sort the list alphabetically" ,myArr);

// Find and output the index value of Milk.
document.write("<h4>6. Find and output the index value of Milk.</h4>");
let item = "Milk";
let index = myArr.indexOf(item);
console.log(index);
document.write("Find and output the index value of Milk." ,index);

// After Bananas, add Carrots and Lettuce.
document.write("<h4>7.After Bananas, add Carrots and Lettuce.</h4>");
myArr.splice(1,0, "Carrots", "Lettuce");
console.log(myArr);
document.write("After Bananas, add Carrots and Lettuce." ,myArr);


// Create a new list containing Juice and Pop.
document.write("<h4>8. Create a new list containing Juice and Pop.</h4>");
let newArr = ["Juice", "Pop"];
console.log(newArr);
document.write("Create a new list containing Juice and Pop." ,newArr);

// Combine both lists, adding the new list twice to the end of the first list.
document.write("<h4>9. Combine both lists, adding the new list twice to the end of the first list.</h4>");
let combArr = [myArr + "," + newArr  + "," + newArr];
document.write("Combination of Arrays", combArr);

// Get the last index value of Pop and output it to the console.
document.write("<h4>10. Get the last index value of Pop and output it to the console.</h4>");
console.log("Combination of Array: " , combArr);
document.write("Get the last index of array " ,combArr);

// -------------------------------Practice Exercise 3.3----------------------------------------------

// Practice Exercise 3.3
document.write("<h2>Practice Exercise 3.3</h2>");
// Create an array containing three values: 1, 2, and 3
document.write("<h4>1. Create an array containing three values: 1, 2, and 3.</h4>");
let arr = [1, 2, 3];
console.log(arr);
document.write("Array with three values " ,arr);

// Nest the original array into a new array three times.
document.write("<h4>2. Nest the original array into a new array three times.</h4>");
let newArray = [arr + "," + arr + "," + arr];
console.log(newArray);
document.write("Nesting the original array into a new array three times." ,newArray);

// Output the value 2 from one of the arrays into the console.
document.write("<h4>3. Output the value 2 from one of the arrays into the console..</h4>");
console.log(arr[1]);
document.write("Outputing the value 2 from one of the arrays " ,arr[1]);

// ---------------------------------Practice Exercise 3.4-------------------------------------------------

document.write("<h2>Practice Exercise 3.4</h2>");

/* Create a new myCar object for a car. Add some properties, including, but not limited to, make and model,
 and values for a typical car or your car. Feel free to use booleans, strings, or numbers.*/
document.write("<h4>1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers..</h4>");

let myCar = {
    make : "Toyota",
    model : "camry",
    year : 2022,
    engineType : "Gasoline",
    hasSunroof: true,
}
console.log(myCar);
document.write("Creating an object for Car : " ,myCar);

// Create a variable that can hold the string value color. This variable  containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar. */
document.write("<h4>2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar..</h4>");

let colorVariable = "color";

myCar[colorVariable] = "blue";
console.log("Updated Color:", myCar[colorVariable]);
document.write("Updated Color:", myCar[colorVariable]);


// Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
document.write("<h4>3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase. </h4>");

let forSale = "for Sale";
myCar[forSale] = true;
console.log(myCar[forSale]);
document.write(myCar[forSale]);

// Output make and model into the console.
document.write("<h4>4. Output make and model into the console. </h4>");
console.log("Console of Make : " + myCar.make);
console.log("Console of Model: " + myCar.model);

document.write("Make : " + myCar.make ,"<br>");
document.write("Model: " + myCar.model);

// Output the value of forSale into the console.
document.write("<h4>5. Output the value of forSale into the console.</h4>");
console.log("Output of for sale : " + myCar[forSale]);
document.write("Output of for sale : " + myCar[forSale]);



// ---------------------------------Practice Exercise 3.5-------------------------------------------------
document.write("<h2>Practice Exercise 3.5</h2>");
// Create an object named people that contains an empty array that is called friends.
document.write("<h4> 1. Create an object named people that contains an empty array that is called friends.</h4>");
let people = {
    friends : []
}
console.log(people);
document.write("Object of People: " ,people);

// Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
document.write("<h4>2.  Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.</h4>");
let var1 = {
    firstName : "Alina",
    lastName : "Ahmed",
    Id : 101
}
let var2 = {
    firstName : "Sana",
    lastName : "Ali",
    Id : 101
}
let var3 = {
    firstName : "Dua",
    lastName : "Khan",
    Id : 101
}

// Add the three friends to the friend array.
document.write("<h4>3. Add the three friends to the friend array. 4. Output it to the console</h4>");
friends = [var1 , var2 ,var3];

// Output it to the console
console.log(friends);
document.write(friends);



// ------------------------------------Chapter projects-------------------------------------------
document.write("<h2>Chapter projects</h2>")
document.write("<h4>-----------------------------MANIPULATING AN ARRAY------------------------</h4>")

// Manipulating an array
// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console


const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

document.write("<h4>Take the following array: <br> const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]; <br> Remove the first item.</h4>")
//  Remove the first item.
rmvFirstItm = theList.shift();
console.log("Removing first item of array :" ,rmvFirstItm);
document.write("Removing first item of array :" ,rmvFirstItm);

//  Remove the last item.
document.write("<h4> Remove the last item.</h4>")
rmvLastItm = theList.pop();
console.log("Removing last item of array :" ,rmvLastItm);
document.write("Removing last item of array :" ,rmvLastItm);

// Add FIRST to the start of the array.
document.write("<h4> Add FIRST to the start of the array.</h4>")
theList.unshift("FIRST");
console.log("add FIRST as a first value of arry :" ,theList);
document.write("add FIRST as a first value of arry :" ,theList);


// Assign hello World to the fourth item value.
document.write("<h4>Assign hello World to the fourth item value.</h4>")
theList[3] = "Hello World";
console.log("Assigning hello World to the fourth item value." , theList);
document.write("Assigning hello World to the fourth item value." , theList);

// Assign MIDDLE to the third index value.
document.write("<h4>Assign MIDDLE to the third index value.</h4>")
theList[2] = "MIDDLE";
console.log("Assign MIDDLE to the third index value.", theList);
document.write("Assign MIDDLE to the third index value.", theList);

// Add LAST to the last position in the array.
document.write("<h4>Add LAST to the last position in the array.</h4>")
theList.push("LAST");
console.log("add LAST as a last value of arry :" ,theList);
document.write("add LAST as a last value of arry :" ,theList);

// Output it to the console
console.log("The Output : " , theList);
// document.write("The Output : " , theList);



// -----------------------------MANIPULATING AN ARRAY------------------------
document.write("<h4>-----------------------------COMPANY PRODUCT CATALOG------------------------</h4>")

// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and quantity.
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the 
//    console.
// 4. Access the quantity element of your third item, and log it to the console.
//    Experiment by adding and accessing more elements within your data structure.


// 1. Create an array to hold an inventory of store items.
let storeInventory  = [];

// 2. Create three items, each having the properties of name, model, cost, and quantity.
document.write("<h4></h4>");

let item1 = {
    name: "Laptop",
    model: "Dell",
    cost: 25000,
    quantity: 10
};
let item2 = {
    name: "Smartphone",
    model: "Samsung",
    cost: 30000,
    quantity: 5
};
let item3 = {
    name: "Computer",
    model: "HP",
    cost: 50000,
    quantity: 8
};
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the 
//    console.
document.write("<h4>1. Create an array to hold an inventory of store items. <br> 2. Create three items, each having the properties of name, model, cost, and quantity. <br> 3. Add all three objects to the main array using an array method, and then log the inventory array to the console</h4>");

storeInventory.push(item1, item2, item3);
console.log("Store Inventory Items List: ", storeInventory);
// document.write("Store Inventory Items List: ", storeInventory);
document.write("<pre>" + JSON.stringify(storeInventory, null, 2) + "</pre>");

// 4. Access the quantity element of your third item, and log it to the console.
document.write("<h4>4. Access the quantity element of your third item, and log it to the console.</h4>");
console.log("Accessing the quantity element of your third item 'Quantity' : ", storeInventory[2].quantity);
document.write("Accessing the quantity element of your third item 'Quantity' : ", storeInventory[2].quantity);


// -----------------------------------------Self-check quiz-----------------------------------------
document.write("<h4>----------------------SELF CHECK QUIZ--------------------</h4>");

document.write("<h2>Can you use const and update values within an array?</h2>");
document.write("<p>Yes, we can use const to declare an array, also can updated  values within an array but the reference to the array cannot be changed. </p>");

// 
document.write("<h2>Which property in an array gives the number of items contained in the array?</h2>");
document.write("<p>The length property returns the number of elements in an array. </p>");

// 
document.write("<h2>What is the output in the console? <br> const myArr1 = [1,3,5,6,8,9,15]; <br> console.log(myArr1 indexOf(0)); <br> console.log(myArr1.indexOf(3));</h2>");
document.write("<p>The output of myArr1.indexOf(0)  is   : -1 <br /> myArr1.indexOf(3) is : 1</p>");

// 
document.write("<h2>How do you replace the second element in an array myArr = [1,3,5,6,8,9,15] with the value 4?</h2>");
document.write("<p>By replacing the second element (index 1) with the value 4 like this : myArr[1] = 4;</p>");

// 
document.write("<h2>What is the output in the console? <br>const myArr2 = []; <br>myArr2[10] = 'test' <br> console.log(myArr2); <br> console.log(myArr2[2]);</h2>");
document.write("<p>[ <10 empty items>, 'test' ] <br> undefined</p>");

// 
document.write("<h2>What is the output in the console? <br>const myArr3 = [3,6,8,9,3,55,553,434]; <br> myArr3.sort(); <br> myArr3.length = 0; <br> console.log(myArr3[0]);</h2>");
document.write("<p>undefined</p>");
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);



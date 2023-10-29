// ----------------------------- Practice Exercise 4.1 --------------------------------------------------
document.write("<h2>------------------Practice Exercise 4.1-----------------------------</h2>");

// 
document.write("<p>1. Create a variable with a Boolean value.</p>");
let isAvailable = true;
// 
document.write("<p>2. Output the value of the variable to the console.</p>");
console.log(isAvailable);

// 
document.write("<p>2. Check whether the variable is true and if so, output a message to the console, using the following syntax:</p>");
if(isAvailable){
    console.log("My varibale's value is ", isAvailable);
}

// 
document.write("<p>2. Add another if statement with an ! in front of the variable to check whether the condition is not true, and create a message that will be printed to the console in that instance. You should have two if statements, one with an ! and the other without. You could also use an if and an else statement instead—experiment!</p>");
let isConditionTrue = true;
if(!isConditionTrue){
    console.log("The condition is false :", isConditionTrue)
}else{
    console.log("Ths condition is true : ", isConditionTrue);
}

// 
document.write("<p>2. Change the variable to the opposite to see how the result changes.</p>");
isConditionTrue = false;

if(!isConditionTrue){
    console.log("The condition is false :", isConditionTrue)
}
else{
    console.log("The condition is true :", isConditionTrue);
}

// ----------------------------- Practice Exercise 4.2 --------------------------------------------------
document.write("<h2>-------------Practice Exercise 4.2----------------------------</h2>");
document.write("<p>1. Create a prompt to ask the user's age</p>");
let ageString = prompt("Enter your age :");


// 
document.write("<p>2. Convert the response from the prompt to a number</p>");
// let age = parseInt(ageString);
let age = parseInt(ageString.replace(/\D/g, ''));
console.log(age) 

// 
document.write("<p>3. Declare a message variable that you will use to hold the console message for the user</p>");
let message;
if(isNaN(age)){
    console.log(message = "Please enter a valid number  ")
}

// 
document.write("<p>4. If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol</p>");
// 
document.write("<p>5. If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol</p>");
// 
document.write("<p>6. Provide a default else statement to set the message variable to deny entry if none are true</p>");
// 
document.write("<p>7. Output the response message variable to the console</p>");
// -------------------------------SOLUTION OF 4, 5, 6, 7--------------------------------
if (!isNaN(age)) {
    if (age >= 21) {
        console.log(message = "You're old enough to confirm entry to the venue and purchase alcohol.");
    }
    else if (age >= 19 && age<21 ) {
        console.log(message = "You can enter the venu but can't purchase alcohol.");
    }
    else if (age <19){
            console.log(message = "You're not eligible to enter the venue.");
    }
else{
    console.log(message = "Invalid input. Please enter a valid age as a number.");
    }
}


// ----------------------------- Practice Exercise 4.3 --------------------------------------------------
document.write("<h2>------------------Practice Exercise 4.3-----------------------------</h2>");
// 
document.write("<p>1. Create a Boolean value for an ID variable. <br > 2. Using a ternary operator, create a message variable that will check whether their ID is valid and either allow a person into a venue or not. <br> 3. Output the response to the console.</p>");
let inputID = prompt("Please enter your Id No. for verification");

let isValidID = inputID >= 1 && inputID <= 100;

let msg = isValidID ?  console.log("Welcome to the venue!") : console.log("Sorry, you cannot enter. Because your Id is not verified");


// ----------------------------- Practice Exercise 4.4 --------------------------------------------------
document.write("<h2>------------------Practice Exercise 4.4-----------------------------</h2>");
document.write("<p>In this exercise, we'll create a Magic 8-Ball random answer generator:</p> <br> 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results. <br> 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output. <br> 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.<br> 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value. <br> 5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.");

let number = prompt("Enter a number between 0-5");
let checkNumber = parseInt(number.replace(/\D/g, ''));

console.log("Check Number : ", checkNumber);

let endResponse;

if (isNaN(checkNumber)) {
    endResponse = "Please enter a valid number in digit form";
} else if (checkNumber < 0 || checkNumber > 5) {
    endResponse = "Please enter a number between 0-5";
} else {
    switch (checkNumber) {
        case 0:
            endResponse = "You got response 0";
            break;
        case 1:
            endResponse = "You got response 1";
            break;
        case 2:
            endResponse = "You got response 2";
            break;
        case 3:
            endResponse = "You got response 3";
            break;
        case 4:
            endResponse = "You got response 4";
            break;
        case 5:
            endResponse = "You got response 5";
            break;
        default:
            endResponse = "Unexpected value!";
            break;
    }
}
console.log(endResponse);


// ----------------------------- Practice exercise 4.5  --------------------------------------------------
document.write("<h2>------------------Practice exercise 4.5 -----------------------------</h2>");
document.write("<p>1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10 <br>2. Convert the prompt response to a number data type. <br> 3. Create a variable to use for the output message containing the value 'My Selection: '</p>");

document.write("<p>4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected. <br > 5. Use the switch break to add combined results for prizes. <br />6. Output the message back to the user by concatenating your prize variable strings and the output message string</p>");

// Step 1: Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
let prize = prompt("Set the prize value by selecting a number between 0 and 10:");

// Step 2: Convert the prompt response to a number data type
prize = parseInt(prize);

// Step 3: Create a variable to use for the output message containing the value "My Selection: "
let outputMessage = "My Selection : ";

// Step 4: Using the switch statement, provide a response back regarding a prize that is awarded depending on what number is selected
// Step 5: Use the switch break to add combined results for prizes
switch (prize) {
    case 0:
        console.log(outputMessage + prize + "  Congratulations! You won a small toy!");
        break;
    case 1:
    case 2:
    case 3:
       console.log(outputMessage + prize + " Congratulations! You won a coupon for a free meal.");
        break;
    case 4:
    case 5:
        console.log(outputMessage + prize + " Congratulations! You won a bag.");
        break;
    case 6:
    case 7:
    case 8:
        console.log(outputMessage + prize + " Congratulations! You won a weekend getaway.");
        break;
    case 9:
    case 10:
        console.log(outputMessage + prize + " Congratulations!  You won a brand new car!");
        break;
    default:
        console.log(outputMessage + prize + "Sorry, invalid selection. Please choose a number between 0 and 10.");
}

// // ----------------------------- Chapter projects  --------------------------------------------------
// document.write("<h2>------------------Chapter projects-----------------------------</h2>");
// document.write("<h2>------------------Evaluating a number game-----------------------------</h2>");

// number = prompt("Please enter your number");
// let dynamicNumber = Math.floor(Math.random() *100);
// console.log("Computer Generated number :", dynamicNumber);
// if(isNaN(number ||  number === null))
// {
//     alert("Please enter a valid number")
// }
// else if(number == dynamicNumber){
//     alert("Your number and computer generated number are matched. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
//     console.log("Your number and computer generated number are matched. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);

// }

// else if(number > dynamicNumber){
//     alert("Your number is greater than computer generated number. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
//     console.log("Your number is greater than computer generated number. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
// }
// else{
//     alert("Your number is less than computer generated number. Your number is : "+ number + ", Computer Generated number is : " + dynamicNumber);
//     console.log("Your number is less than computer generated number. Your number is : "+ number + ", Computer Generated number is : " + dynamicNumber);
// }



// ----------------------------- Chapter projects  --------------------------------------------------
// document.write("<h2>------------------Friend checker game-----------------------------</h2>");

// let friendsName = prompt("Please enter your name : ");

// switch(friendsName.toLowerCase()){
//     case "alia" || "Alia":
//     case "saba":
//     case "sana":
//     case "dua":
//     case "nida":
//         alert("Welcome friend! You are recognized");
//     break;
//     default:
//         alert("Sorry! That person is not a friend");
// }




















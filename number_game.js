// ----------------------------- Chapter projects  --------------------------------------------------

number = prompt("Please enter your number");
let dynamicNumber = Math.floor(Math.random() *100);
console.log("Computer Generated number :", dynamicNumber);
if(isNaN(number ||  number === null))
{
    alert("Please enter a valid number")
}
else if(number == dynamicNumber){
    alert("Your number and computer generated number are matched. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
    console.log("Your number and computer generated number are matched. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
    document.write("Your number and computer generated number are matched. <br> Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
}

else if(number > dynamicNumber){
    alert("Your number is greater than computer generated number. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
    console.log("Your number is greater than computer generated number. Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
    document.write("Your number is greater than computer generated number.  <br> Your number is : " + number + ", Computer Generated number is : " + dynamicNumber);
}
else{
    alert("Your number is less than computer generated number. Your number is : "+ number + ", Computer Generated number is : " + dynamicNumber);
    console.log("Your number is less than computer generated number. Your number is : "+ number + ", Computer Generated number is : " + dynamicNumber);
    document.write("Your number is less than computer generated number.  <br> Your number is : "+ number + ", Computer Generated number is : " + dynamicNumber);
}


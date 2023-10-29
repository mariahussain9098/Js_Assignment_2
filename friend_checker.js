
let friendsName = prompt("Please enter your name : ");

switch(friendsName.toLowerCase()){
    case "alia" || "Alia":
    case "saba":
    case "sana":
    case "dua":
    case "nida":
        alert("Welcome friend! You are recognized");
        document.write("<h3>Welcome friend! You are recognized</h3>");
    break;
    default:
        alert("Sorry! You are not recognized");
        document.write("<h3>Sorry! You are not recognized</h3>");

}
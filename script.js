// Assignment Code - Given line 2
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g", "h", "i", "j", "k", "l","m","n","o","p", "q", "r", "s","t", "u","v","w","x","y", "z"]
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var symbols = ['!','@','#','$','%','^','&','*','(',')','_','+']
//var criteria - with all characters in array
//var length of characters 8-128
//var passwordresult

console.log(lowercase)
console.log(uppercase)
console.log(numbers)
console.log(symbols)



function generatePassword() {
 
 
 //1. generate pswd
 //2. prompt user
 //
 //sign = window.prompt('How many characters do you want in your password', 'enter number 8-128', amount);
//store the user input on how many characters
 var characters =parseInt(window.prompt("Number of characters: 8-128", min =8, max =128));
  alert("You entererd " + characters);  //alert for how many characters 8-128)
  var lowercase =parseInt(window.alert("Shall we include lower case letters"));
  var uppercase =parseInt(window.alert("Shall we include upper case letters"));
  var numbers =parseInt(window.alert("Shall we include numbers"));
  var symbols =parseInt(window.alert("Shall we include sybmols"));
  //alert("You entererd " + uppercase);
  return "password";//password gets returned where secure pswd location is
}

function randomize()  {
  for (var i=0; i < length; i ++) {
    var special = Math.floor(Math.random() *(criteria.length));
    console.log(criteria)
    randompswd.push(criteria[special]);
  }
}

// Write password to the #password input - Given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - Given
generateBtn.addEventListener("click", writePassword);
//display password on button click

/*
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
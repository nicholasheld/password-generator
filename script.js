// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 
 
 //generate pswd
 // promt user
 //
 
 var characters =parseInt(window.prompt("Number of characters: 8-128"));
  alert("You entererd " + characters);
  return "password";

}
//alert for how many characters 8-128)
//sign = window.prompt('How many characters do you want in your password', 'enter number 8-128', amount);
//store the user input on how many characters

/*function declarelength()  {

  return;
}*/
//declarelength();
//sign = window.prompt('Do you want to include character types like lower case, upper case, numbers and symbols', 'no');
//store if say yes to these. assume yes. math.random() for all the different types

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
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
// Assignment Code - Given line 2
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
//var length of characters 8-128
//var criteria - concat lowercase, uppercase, numbers, and symbols? >randomize
//var passwordresult

console.log(lowercase)
console.log(uppercase)
console.log(numbers)
console.log(symbols)

function passwordOptions() {
  var passwordLength = parseInt(prompt("how many characters would you like in the password?"))

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters")
    return;
  }

  var hasSpecial = confirm("Click Okay to confirm special characters")

  var hasNumbers = confirm("Click okay to include numbers")

  var hasUpper = confirm("Click to include Uppercase letters")

  var hasLower = confirm("Click to include lowercase letters")

  if (hasSpecial === false &&
    hasNumbers === false &&
    hasUpper === false &&
    hasLower === false) {
    alert("Must select a character type")
    return;
  }

  //{} represent object
  var pwdOptions = {
    pwdLength: passwordLength,
    special: hasSpecial,
    numbers: hasNumbers,
    upper: hasUpper,
    lower: hasLower
  }

  console.log(pwdOptions)
  return pwdOptions;

}

function generatePassword() {
  var options = passwordOptions()

}


function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]
  return randomElement
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
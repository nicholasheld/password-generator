// Assignment Code - Given line 2
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
//var length of characters 8-128
//var criteria - concat lowercase, uppercase, numbers, and symbols? >randomize
var array = []
var pwdOptions
//This was a check for outputs
//console.log(lowercase)//console.log(uppercase)
//console.log(numbers)
//console.log(symbols)
//prompts for the user
function passwordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like in the password?"))

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters")
    console.log(passwordLength);
    return;
  }

  var hasSpecial = confirm("Click okay to include special characters")

  var hasNumbers = confirm("Click okay to include numbers")

  var hasUpper = confirm("Click okay to include Uppercase letters")

  var hasLower = confirm("Click okay to include lowercase letters")
//ensures that the user selected atlest one element
  if (hasSpecial === false &&
    hasNumbers === false &&
    hasUpper === false &&
    hasLower === false) {
    alert("Must select a character type")
    return;
  }

  console.log(array)
  //object with key values pairs of user slections
  var pwdOptions = {
    pwdLength: passwordLength,
    special: hasSpecial,
    numbers: hasNumbers,
    upper: hasUpper,
    lower: hasLower
  }

  //console.log(pwdOptions)
  return pwdOptions;

}
//This gets a random element from the array
function getRandomElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]
  return randomElement
}
//this function generates the password options depending on user selection and input
function generatePassword() {
  var options = passwordOptions()
  var result= []
  var possibleCharacters = []
  var guaranteedCharacters = []

if(options.special)  {
  possibleCharacters = possibleCharacters.concat(symbols)
  guaranteedCharacters.push(getRandomElement(symbols))
}
if(options.numbers)  {
  possibleCharacters = possibleCharacters.concat(numbers)
  guaranteedCharacters.push(getRandomElement(numbers))
}
if(options.lower)  {
  possibleCharacters = possibleCharacters.concat(lowercase)
  guaranteedCharacters.push(getRandomElement(lowercase))
}
if(options.upper)  {
  possibleCharacters = possibleCharacters.concat(uppercase)
  guaranteedCharacters.push(getRandomElement(uppercase))
}
//this gets a random character from our concated array for the length of that array
for(var i = 0; i < options.pwdLength; i++){
  var possibleChar = getRandomElement(possibleCharacters)
  result.push(possibleChar)
}
//esure we have all elements user selected and loop the length the user determined, for example if we said yes to special that it will have a special
for(var i =0; i < guaranteedCharacters.length; i++) {
result[i] = guaranteedCharacters[i]
}
//this joins the generated characters with the ensured ones 
return result.join("")
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
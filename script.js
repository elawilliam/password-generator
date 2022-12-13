var numbers = ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", ")", "(", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "/", "^", "_", "{", "}", "`", "~"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var employeeSelects = parseInt(
    prompt("Please choose a password length ranging from 8 to 128"), 10);

  if (Number.isNaN(employeeSelects)) {
    alert("Please enter a valid number ranging from 8 to 128");
    return null;
  }

  if (employeeSelects > 128) {
    alert("Please select less than 128 characters");
    return null;
  }

  if (employeeSelects < 8) {
    alert("Please select more than 8 characters");
    return null;
  }

  var confirmNumbers = confirm("Would you like numbers in your password?");
  var confirmUpperCaseLetters = confirm("Would you like upper case letters in your password?");
  var confirmLowerCaseLetters = confirm("Would you like lower case letters in your password?");
  var confirmSpecialCharacters = confirm("Would you like special characters in your password?");

  if (
    !confirmNumbers && !confirmUpperCaseLetters && !confirmLowerCaseLetters && !confirmSpecialCharacters){
    alert("Please select atleast one");
    return null;
  }

  var employeePasswordSelections = {
    employeeSelects: employeeSelects,
    confirmNumbers: confirmNumbers,
    confirmUpperCaseLetters: confirmUpperCaseLetters,
    confirmLowerCaseLetters: confirmLowerCaseLetters,
    confirmSpecialCharacters: confirmSpecialCharacters,
  }

  console.log(employeePasswordSelections)
  return employeePasswordSelections;
}

function createRandom (characters) {
  var randomCharacters = Math.floor(Math.random() * characters.length)
  var randomOptions = characters[randomCharacters]
  return randomOptions;
}

function createPassword() {
  var result = [];
  var possibleCharacters = [];
  var definiteCharacters = [];

  var options = generatePassword()
    if (!options) {
      return null;
  }

  console.log("options", options)
  if (options.confirmNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers)
    definiteCharacters.push(createRandom(numbers))
  }

  if (options.confirmUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters)
    definiteCharacters.push(createRandom(upperCaseLetters))
  }

  if (options.confirmLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters)
    definiteCharacters.push(createRandom(lowerCaseLetters))
  }

  if (options.confirmSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    definiteCharacters.push(createRandom(specialCharacters))
  }

  var size = options.employeeSelects - definiteCharacters.length

  console.log("employeeSelects", options.employeeSelects)

  for (i=0; i < size; i++) {
    definiteCharacters.push(createRandom(possibleCharacters))
  }
  return definiteCharacters.join("");
}


// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// the characters available for the employee to select, formatted in an array
var numbers = ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", ")", "(", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "/", "^", "_", "{", "}", "`", "~"];

var generateBtn = document.querySelector("#generate");

// the 'generatePassword' function creates the confirmation pop-ups used by the employee to decide what characters are in the password
function generatePassword() {

  // 'employeeSelects' is what value the employee enters into the pop-up
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

  // confirms what type of characters the employee wants to include in the password
  var confirmNumbers = confirm("Would you like numbers in your password?");
  var confirmUpperCaseLetters = confirm("Would you like upper case letters in your password?");
  var confirmLowerCaseLetters = confirm("Would you like lower case letters in your password?");
  var confirmSpecialCharacters = confirm("Would you like special characters in your password?");

  // the employee has to select atleast one character type in order for the password to be created
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

  // logs all the employee's password selections in the console
  console.log(employeePasswordSelections)
  return employeePasswordSelections;
}

// randomizes the characters
function createRandom (characters) {
  var randomCharacters = Math.floor(Math.random() * characters.length)
  var randomOptions = characters[randomCharacters]
  return randomOptions;
}

// creates the password based on the employee's selections for each character type and randomizes the values
function createPassword() {
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

  // runs through the possible choices based on employee selections
  for (i=0; i < size; i++) {
    definiteCharacters.push(createRandom(possibleCharacters))
  }
  return definiteCharacters.join("");
}


// provides the password to the employee
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generates the password button
generateBtn.addEventListener("click", writePassword);






var numbers = ['O', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '#', '$', '%', '&', ')', '(', '*', '+', '-', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '/', '^', '_', '{', '}', '`', '~'];

function passwordCriteria () {
  var userSelectsNumbers = confirm("Would you like numbers in your password?");
  var options = {
    userSelectsNumbers: userSelectsNumbers
  };
  return options;
}

function createRandom(length) {
  var randomNumberLength = Math.floor(Math.random() * length);
  return randomNumberLength;
}

function generatePassword() {
  var userSelects = passwordCriteria();
  var availableCharacters = [];

  var passwordStorage = [];
  if(userSelects.userSelectsNumbers) {
    availableCharacters = availableCharacters.concat(numbers);
  }

  for(var i = 0; i < 4; i++){
    passwordStorage.push(availableCharacters[createRandom(availableCharacters.length)])
  }

  return passwordStorage.join("")
}

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

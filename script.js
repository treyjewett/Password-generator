// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create the prompt for the user to set the length of the password.
passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
if (prompt < 8 || prompt > 128) {
  alert("Invalid number. Please enter a number between 8 and 128.");
}

// Create character possibilities using ACCII system.
var capStart = 65;
var lowStart = 97;
var numStart = 48;
var special = "!#$%&')(*+,-./:;<=>?@]/[^_`}|{~";

// Creating the alerts for the user to tailor the password characters.
cap = alert("Do you want the password to contain capital letters?");
low = alert("Do you want the password to contain lower-case letters?");
num = alert("Do you want the password to contain numbers?");
spec = alert("Do you want the password to contain special characters?");

// If none of the character alerts are answered, send an error message.
if (cap != true && low != true && num != true && spec != true) {
  alert("Error, no character selection. Please try again.")
}

// Create a function that gets a random number within a range.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Write the fuction that actually generates the password.
function generatePassword() {
  for (var i = 0; i < (passLength -1); i++) {
    while (true) {
      randNum = getRandomInt(4);
      if (randNum == 0 && cap) {
        randNum = getRandomInt(26);
        password = password.concat(string.fromCharCode(capStart + randNum));
      }
      else if (randNum == 1 && low) {
        randNum = getRandomInt(26);
        password = password.concat(string.fromCharCode(lowStart + randNum));
      }
      else if (randNum == 2 && num) {
        randNum = getRandomInt(10);
        password = password.concat(string.fromCharCode(numStart + randNum));
      }
      else if (randNum == 3 && spec) {
        randNum = getRandomInt(special.length);
        password = password.concat(special[randNum]);
      }
    }
  }
};

return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
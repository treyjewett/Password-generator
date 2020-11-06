// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create character possibilities using ACCII system.
var capStart = 65;
var lowStart = 97;
var numStart = 48;
var special = "!#$%&')(*+,-./:;<=>?@]/[^_`}|{~";

// Create the prompt for the user to set the length of the password.
passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
if (prompt < 8 || prompt > 128) {
  alert("Invalid number. Please enter a number between 8 and 128.");
}

// Creating the alerts for the user to tailor the password characters.
cap = alert("Do you want the password to contain capital letters?");
low = alert("Do you want the password to contain lower-case letters?");
num = alert("Do you want the password to contain numbers?");
spec = alert("Do you want the password to contain special characters?");

// If none of the character alerts are answered, send an error message.
if (cap != true && low != true && num != true && spec != true) {
  alert("Error, no character selection. Please try again.")
}

// Write the fuction that actually generates the password.
function generatePassword() {
  for (var i = 0; i < (passLength -1); i++) {
    while (true) {
      randNum = (Math.floor(Math.random() * passLength) % 4);
      if (randNum == 0 && cap) {
        randNum = (Math.floor(Math.random() * 26) % 26);
        password = password.concat(string.fromCharCode(capStart + randNum));
      }
      else if (randNum == 1 && low) {
        
      }
    }
  }
};

return password;
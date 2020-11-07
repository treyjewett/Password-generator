// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  let password = "";
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword(password);
}

// Write the fuction that actually generates the password.
function generatePassword(password) {

  // Create the prompt for the user to set the length of the password.
  passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  if (passLength < 8 || passLength > 128) {
    alert("Invalid number. Please enter a number between 8 and 128. Click Generate Password to try again.");
    return;
  }

  // Creating the alerts for the user to tailor the password characters.
  var cap = prompt("Do you want the password to contain capital letters? y / n");
  var low = prompt("Do you want the password to contain lower-case letters? y / n");
  var num = prompt("Do you want the password to contain numbers? y / n");
  var spec = prompt("Do you want the password to contain special characters? y / n");

  // If none of the character alerts are answered, send an error message.
  if (cap == "n" && low == "n" && num == "n" && spec == "n") {
    alert("Error, no character selection. Please try again.")
    generatePassword();
  }

  // Create character possibilities using ACCII system.
  var capStart = 65;
  var lowStart = 97;
  var numStart = 48;
  var special = "!#$%&')(*+,-./:;<=>?@]/[^_`}|{~";

  // Create a function that gets a random number within a range.
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  for (var i = 0; i < passLength;) {
    randNum = getRandomInt(4);
    if (randNum == 0 && cap == "y") {
      randNum = getRandomInt(26);
      password = password.concat(String.fromCharCode(capStart + randNum));
      i++;
    }
    else if (randNum == 1 && low == "y") {
      randNum = getRandomInt(26);
      password = password.concat(String.fromCharCode(lowStart + randNum));
      i++
    }
    else if (randNum == 2 && num == "y") {
      randNum = getRandomInt(10);
      password = password.concat(String.fromCharCode(numStart + randNum));
      i++
    }
    else if (randNum == 3 && spec == "y") {
      randNum = getRandomInt(special.length);
      password = password.concat(special[randNum]);
      i++
    }
  }
  return password;
};
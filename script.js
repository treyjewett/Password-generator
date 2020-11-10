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

  var passLength = 0;
  var cap = "";
  var low = "";
  var num = "";
  var spec = "";

  // Create the prompt for the user to set the length of the password.
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    if (passLength == null) {
      break;
    } else if (passLength < 8 || passLength > 128) {
      alert("Invalid number. Please enter a number between 8 and 128. Click Generate Password to try again.");
      return;
    } else {
      cap = prompt("Do you want the password to contain capital letters? y / n");
      if (cap == null) {
        break;
      } else {
        low = prompt(" Do you want the password to contain lower-case letters? y / n");
        if (low == null) {
          break;
        } else {
          num = prompt("Do you want the password to contain numbers? y / n");
          if (num == null) {
            break;
          } else {
            spec = prompt("Do you want the password to contain special characters? y / n");
            if (spec == null) {
              break;
            } else {
              if (cap == "n" && low == "n" && num == "n" && spec == "n") {
                alert("Error, no character selection.")
                return;
              }

              // Create character possibilities using ACCII Standards system.
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
            }
          }
        }
      }
    }
  }
};
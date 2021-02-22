// Assigning varibles 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// These are arrays of possible values: 
// Special characters 
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-","+"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This array will conatin letters that have been converted to Uppercase
space = [];

// This variable will be for when the code is executing outside of the if statments 
var choices;

// Lowercase to Uppercase conversion
var toUpper = function (x) {
    return x.toUpperCase();
};
// fucntion that creates a variable for when Uppercase characters come into play
alpha2 = alpha.map(toUpper);

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

// Begin Password Generator function
function writePassword() {
  enter = parseInt(prompt("Enter a password length between 8 and 128 characters"));

  // First if stament that decides if user choice is valid within the criteria
  if (!enter) {
      alert("Value Missing!");
  } else if (enter < 8 || enter > 128) {

      // Validates user input via prompt
      enter = parseInt(prompt("Please choose between 8 and 128 characters"));

  } else {
      // After user enter value, prompts about character types begin. 
      confirmNumber = confirm("Would you like this password to conatin Numbers?");
      confirmCharacter = confirm("Would you like this pasword to contain Special Characters?");
      confirmUppercase = confirm("Would you like this password to conatin Uppercase letters?");
      confirmLowercase = confirm("Would you like this password to contain Lowercase letters?");
  };

  // If statement for if user chooses cancel 4 times
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  // Else if statment for if user chooses ok 4 times
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = character.concat(number, alpha, alpha2);
  }
  // Else if statment for if the user chooses ok to 3 of the prompts
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }
  // Else if statement for if the user chooses ok to 2 of the prompts
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
  }
  // Else if statement for if the user chooses ok to 3 of the prompts
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = alpha;
  }
  // Statement that turns the "space" variable into Uppercase letters
  else if (confirmUppercase) {
      choices = space.concat(alpha2);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // This is the for loop that executes the random variable prodction
  // It executes the number of times the user enters in the password length 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // This joins the password array and makes strings for them to go into the textbox
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
//  Function that changes with generated password into a text inside the textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

// I found a lot of this stuff on w3 and GitHub. I had a difficult time figuring this out without Google!

} 
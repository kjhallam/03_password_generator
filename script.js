// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbolCase = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var passCombo = [];
var passCode = "";

function generatePassword() {
  
  // prompt for the length of the password
  var passwordLength = parseInt(prompt("How long would you like your password to be?"));
  console.log(passwordLength);

  if (passwordLength > 8 || passwordLength < 128) {
    parseInt(prompt("Your number (" +passwordLength+") meets requirements for characters",""));
  } else {(isNaN(passwordLength))
    parseInt(prompt("This is not a number. Please enter an valid number between 8 and 128", ""));
  }

 
// if (number < 100) {
//     document.write("Your number (" + number + ") is matches requirements", "");
// } else if (isNaN(number)) {
//     parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""));
// } else {
//     parseInt(prompt("Your number (" + number + ") is above 100. Please enter a number from 1 to 100", ""));
// }

  var useLowercase = confirm("Would you like to use lowercase letters?");
  console.log(useLowercase);

  var useUppercase = confirm("Would you like to use uppercase letters?");
  console.log(useUppercase);

  var useNumber = confirm("Would you like to use number?");
  console.log(useNumber);

  var useSymbol = confirm("Would you like to use special character?");
  console.log(useSymbol);

  if (useLowercase === true) {
    passCombo = passCombo.concat(lowerCase);
  }
  console.log(passCombo);

  if (useUppercase === true) {
    passCombo = passCombo.concat(upperCase);
  }
  console.log(passCombo);

  if (useNumber === true) {
    passCombo = passCombo.concat(numberCase);
  }
  console.log(passCombo);

  if (useSymbol === true) {
    passCombo = passCombo.concat(symbolCase);
  }
  else if
  (useLowercase === false && useUppercase === false && useNumber === false && useSymbol === false) {
    alert("You must have at least 1 character option selected!");
 }

  
  for (var i = 0; i < passwordLength; i++) {
    passCode = passCode + passCombo[Math.floor(Math.random() * passCombo.length)];
  }
  console.log(passCode);

  //  be careful with the type it receives --> string , you may want to use a number hint hint (parseInt(string))

  return (passCode);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

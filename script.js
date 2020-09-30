var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbolCase = ["!",  "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",  "]", "^", "`", "{", "|", "}", "~"];

var passCombo = [];
var passCode = "";

function generatePassword() {
  
 var passwordLength = (prompt("How long would you like your password to be?"));
    if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    var passwordLength = (prompt("Invalid number, please enter a number between 8 and 128"));
        
    } alert("Your password will contain (" +passwordLength+") characters.");
 
  var useLowercase = confirm("Would you like to use lowercase letters?");

  var useUppercase = confirm("Would you like to use uppercase letters?");
  
  var useNumber = confirm("Would you like to use number?");
 
  var useSymbol = confirm("Would you like to use special character?");
  
  if (useLowercase === false && useUppercase === false && useNumber === false && useSymbol === false) {
    alert("You must have at least 1 character option selected!");
 
  } else {
    if (useLowercase === true) {passCombo = passCombo.concat(lowerCase);}
    if (useUppercase === true) {passCombo = passCombo.concat(upperCase);}
    if (useNumber === true) {passCombo = passCombo.concat(numberCase);}
    if (useSymbol === true) {passCombo = passCombo.concat(symbolCase);}
 
   for (var i = 0; i < passwordLength; i++) {
    passCode = passCode + passCombo[Math.floor(Math.random() * passCombo.length)];}
  }
  return passCode; 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberCase = [0,1,2,3,4,5,6,7,8,9];

var symbolCase =["!",  "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",  "]", "^", "`", "{", "|", "}", "~"];
var passCombo = [];
var passCode = "";

function generatePassword(){

    var useLowercase = confirm('Would you like to use lowercase letters?')
    console.log(useLowercase);
    var useUppercase = confirm('Would you like to use uppercase letters?')
    console.log(useUppercase);
    var useNumber = confirm('Would you like to use number?')
    console.log(useNumber);
    var useSymbol = confirm('Would you like to use special character?')
    console.log(useSymbol);
    
     // prompt for the length of the password
     var passwordLength = prompt('How long would you like your password to be?')
      // console.log(passwordLength);
    
      if (useLowercase === true){
      passCombo = passCombo.concat(lowerCase);
    } 
    // console.log (passCombo);

      if (useUppercase === true){
      passCombo = passCombo.concat(upperCase);
    } 
      if (useNumber === true){
      passCombo = passCombo.concat(numberCase);
    } 
      if (useSymbol === true){
      passCombo = passCombo.concat(symbolCase);
    } 

    if (passwordLength < 8 || passwordLength > 128) {
      prompt ("Needs to be between 8 and 128 characters!"); passCode = "false";
    }
  


     for (var i = 0; i < passwordLength; i++){
       passCode = passCode + passCombo[Math.floor(Math.random() * passCombo.length)];
     }
     console.log(passCode);
      
    
     //be careful with the type it receives --> string , you may want to use a number hint hint (parseInt(string))
        // choose a length of at least 8 - 128 characters

    //  input should be validated and at least one character type should be selected
       //  prompts are answered
        // password is generated that matches the selected criteria
            

      return passCode;

      }  
      
      // Write password to the #password input
   function writePassword() {
        
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        
        passwordText.value = password;
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



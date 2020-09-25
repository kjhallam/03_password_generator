// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){

  //- present series of prompts for password criteria

    // select which criteria to include in the password
      // prompted for character types to include in the password
          //choose lowercase, uppercase, numeric, and/or special characters
    var useLowercase = confirm('Would you like to use lowercase letters?')
    var useUppercase = confirm('Would you like to use uppercase letters?')
    var useNumber = confirm('Would you like to use number?')
    var useSymbol = confirm('Would you like to use special character?')
    
    
     // prompt for the length of the password
     var passwordLength = prompt('How long would you like your password to be?')
     //be careful with the type it receives --> string , you may want to use a number hint hint (parseInt(string))
        // choose a length of at least 8 - 128 characters
        //  answer each prompt

    //  input should be validated and at least one character type should be selected
       //  prompts are answered
        // password is generated that matches the selected criteria
        // password is generated
        // password is either displayed in an alert or written to the page

        
      }  
      
      // Write password to the #password input
   function writePassword() {
        
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        
        passwordText.value = password;
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



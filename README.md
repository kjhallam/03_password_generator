# **Password Generator 1.0**
_______________________________________
### **Websites:**

 [GitHub] https://kjhallam.github.io/03_password_generator/

 [GitHub Repo] https://github.com/kjhallam/03_password_generator.git
_______________________________________

*Pseudo Code assisted in executing the "Password Generator".*

1. Identified 4 variable Arrays. 
--
(LowerCase, UpperCase, Numbers, & Symbols)

1. Identified 2 additional empty variables. -- (PassCombo & PassCode)

1. Located within the "generatePassword" function I created another variable identifiying the length of users password. A prompt occurred to request a specific number and if a number was not selected or it didn't meet the criteria between 8 and 128, another prompt for invalid number occurred. This gave the user a second chance to supply the number needed to generate the password.

1. An alert identified the correct number the users input into the previous prompt.
1. Then 4 more variables to address (useLowerCase),(useUpperCase), (useNumbers), & (useSymbols).
   - A confirm was requested on each of the 4 variables to see which characters the user wanted to use within their password.
   - If statements were "False"--an alert requesting at least 1 character needs to be selected. 
   - If at least 1 or more characters were confirmed.
    - Then a Loop appeared beginning the process of    generating the password.  
1. *Finally* - a password generated and displayed in the display window on the website. 
_______________________________________________________

### Completion Challenges

>The main challenge I faced was finding the order and flow of the javascript file. Working from top to bottom and how simple it was to crash the site by missing 1 ending or beginning bracket. 
Where to place the loop and where to place the prompts in my file. But once I got the order functionable then it was easier to understand why it was organized the way it was.

_______________________________________________________

### Mock-up
![Password Generator](SS-pass-generator.jpg)









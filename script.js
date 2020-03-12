// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  
  //Create password object 
  var password = {

    //create var newPassword to save randomly generated password
    newPassword: "",

    //Create array of all possible characters for password
    characterTypes: [["lowerCase","abcdefghijklmnopqrstuvwxyz", true],
                    ["upperCase" ,"ABCDEFGHIJKLMNOPQRSTUVWXYZ", false],
                    ["specialCharacters", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", false],
                    ["numbers","1234567890", false]],

    //Prompts user and saves their desired password length as long as its not to long or too short
    chooseLength: function (){
      var length = prompt('How many characters do you want your password to be?')

      if(length < 8){
        alert('The password is too short. \nIt must be a minimum of 8 characters.')

      }else if (length>128){
        alert('The password is too long. \nIt must be a maximum of 128 characters.')

      }else{
        this.chooseParameters()
        return length
      } 
    },

    //Choose passwords paramaeters
    chooseParameters: function(){

      this.characterTypes [0][2] = confirm('Do you want LOWER CASE LETTERS in your password?')
      this.characterTypes [1][2] = confirm('Do you want UPPER CASE LETTERS in your password?')
      this.characterTypes [2][2] = confirm('Do you want SPECIAL CHARACTERS in your password?')
      this.characterTypes [3][2] = confirm('Do you want NUMBERS in your password?')  

    },

    //generates a random character from the type you passed to random
    randomCharacter: function (type){

      //generates random number associating to type.length
      var character = Math.floor(Math.random()*(type.length))
      return type.charAt(character)

    },

    //generates and save password to this.newPassword
    passwordGen: function (){

      //saves value returned by chooseLength to chosenLength
      var  chosenLength = this.chooseLength()

      //as long as the newPassword's length is less then what the user wants keep adding characters to it
      for(var currentType = 0; this.newPassword.length < chosenLength; currentType++){

        //if the user wants that character
        if(this.characterTypes[currentType][2] === true){

          //add that character to password
            this.newPassword += this.randomCharacter(this.characterTypes[currentType][1])
        }

        //If the currentType length is greater then available types go back to the first chracterType
        if (currentType === 3){
          currentType = -1
        }  
      }
    }
  }


  //Generates new password
  password.passwordGen()

  return password.newPassword
  }





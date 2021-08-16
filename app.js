/*
-- create variables to gues the number range
-- variable to hold the answer value
-- form for the user to enter information
-- function to calculate and return value
-- prompts to enter information and confirm if correct
-- alert to show it is correct
*/


    var userNumber = 10
    var counter = 0
    var maxTries = 3
    const randomNumber = Math.floor(Math.random() * userNumber) + 1
    console.log('Random Number', randomNumber)

    function checkGuess() {
        console.log('hi')
      let myGuess = guess.value
      if (myGuess === randomNumber) {
        alert("Your guess was " + myGuess +" You got it right!");

      } else if (myGuess > randomNumber) {
        alert("Your guess was " + myGuess + ". That's too high. Try Again!");
             
      } else if (myGuess < randomNumber) {
          alert("Your guess was " + myGuess + ". That's too low. Try Again!");
    
     }
   }
   submitGuess.addEventListener('click', checkGuess)












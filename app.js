/*  use the Math.random() method to create a function that will return a random integer between two values (inclusive).

*/
 
// varial to access grab submit btn.
const subBtn = document.querySelector("#subBtn");

// onClick generate a random number.
subBtn.addEventListener("click", generateRandomNum);


function generateRandomNum() {
  // take the values from the input field
  // const fromNum = document.querySelector("#fromNum");
  // const toNum = document.querySelector("#toNum");

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(getRandomNumber)
  }
  result =  getRandomNumber(1, 100);
  console.log(result)
}

// HTML:
// -----------
// <p>Text 1: <input id="text1" type="text"></p>
        
// <p>Text 2: <input id="text2" type="text"></p>
        
// <p><button onclick="compareText()">Compare</button></p>

// function compareText() {
//   var text1 = document.getElementById("text1").value;
//   var text2 = document.getElementById("text2").value;
  
//   if (text1 == text2) {
//       alert("Same Text!");
//   } else {
//       alert("Different Texts.");
//   }
// }








// subBtn.addEventListener("click", getRandomNumber)

// function getRandomNumber () {
//   alert('Hello');
// }
// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const rollDice = () => getRandomNumber(1, 100);

// document.getElementById("random_number");
// //   document.getElementById("subBtn").addEventListener("click", function () {
      
// //     console.log(getRandomNumber);

// }
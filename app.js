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

function compareText() {
  var fromNum = document.getElementById("fromNum").value;
	if (fromNum > result) {
    alert('Correct!');
		// return num1 + ' is the biggest number';
	} else if (fromNum < result) {
    alert('Too low!');
		// return num2 + ' is the biggest number';
	} else {
    alert('Correct!')
		// return num3 + ' is the biggest number';
	}
}

// HTML:
// -----------
// <p>Text 1: <input id="text1" type="text"></p>
        
// <p>Text 2: <input id="text2" type="text"></p>
        
// <p><button onclick="compareText()">Compare</button></p>

// function compareText() {
//   var fromNum = document.getElementById("fromNum").value;
//   // var text2 = document.getElementById("text2").value;
  
//   if (fromNum == result) {
//       alert("You are!");
//   } else if {
//     (fromNum > result)
//       alert("Too high.");
//   } else {
//     (fromNum < result)
//     alert("Too low.");
// }
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
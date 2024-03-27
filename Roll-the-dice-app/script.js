let player1 = "player1";
let player2 = "player2";
let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

let dice1Image = document.querySelector(".img1");
let dice2Image = document.querySelector(".img2");

button1.addEventListener("click", rollTheDice);
button2.addEventListener("click", editNames);

let result = document.querySelector("h1");
function rollTheDice() {
  let mainContainer = document.getElementById("container");
  setTimeout(() => {
    let randomNumberForDice1 = Math.floor(Math.random() * 6) + 1;
    let randomNumberForDice2 = Math.floor(Math.random() * 6) + 1;
    dice1Image.setAttribute("src", "dice" + randomNumberForDice1 + ".png");
    dice2Image.setAttribute("src", "dice" + randomNumberForDice2 + ".png");

    if (randomNumberForDice1 === randomNumberForDice2) {
      result.innerHTML = "Draw!";
    } else if (randomNumberForDice1 < randomNumberForDice2) {
      result.innerHTML = player2 + "WINS!";
    } else {
      result.innerHTML = player1 + "WINS!";
    }
  }, 2500);
}

function editNames() {
  player1 = prompt("Change player1 name");
  player2 = prompt("Change player2 name");

  if (player1.length < 1 || player2.length < 1) {
    alert("please enter valid names");
    return;
  }
  p1.innerHTML = player1;
  p2.innerHTML = player2;
}

let oponentState = document
  .getElementById("oponent")
  .getElementsByTagName("h2");

let appRock = document.getElementById("appRock");
let appPaper = document.getElementById("appPaper");
let appScissors = document.getElementById("appScissors");

let vs = document.getElementById("vs");
let wait = document.getElementById("wait");

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijeras");

function playerAtack(atack) {
  document.getElementById("loadingPoints").style.display = "none";
  // show choosen items
  let userAtack = document.getElementById(`user${atack}`);

  userAtack.style.display = "block";
  wait.style.display = "none";
  vs.style.display = "table";

  //get a random number to assign an item to atack
  let randomItem = Math.floor(Math.random() * 3);

  //set item to atack
  switch (randomItem) {
    case 0:
      appRock.style.display = "block";
      break;

    case 1:
      appPaper.style.display = "block";
      break;

    case 2:
      appScissors.style.display = "block";
      break;
  }

  //set user item to a number so that it's easier to compare with the computer number
  let userItem;
  switch (atack) {
    case "Rock":
      userItem = 0;
      break;

    case "Paper":
      userItem = 1;
      break;

    case "Scissors":
      userItem = 2;
      break;
  }

  if (randomItem == userItem) {
    oponentState[0].innerHTML = "Es un empate";
    oponentState[0].style.color = "yellow";
  }

  if (randomItem == 0 && userItem == 1) {
    oponentState[0].innerHTML = "Has ganado";
    oponentState[0].style.color = "lightgreen";
  }

  if (randomItem == 0 && userItem == 2) {
    oponentState[0].innerHTML = "Has perdido";
    oponentState[0].style.color = "red";
  }

  if (randomItem == 1 && userItem == 0) {
    oponentState[0].innerHTML = "Has perdido";
    oponentState[0].style.color = "red";
  }

  if (randomItem == 1 && userItem == 2) {
    oponentState[0].innerHTML = "Has ganado";
    oponentState[0].style.color = "lightgreen";
  }

  if (randomItem == 2 && userItem == 0) {
    oponentState[0].innerHTML = "Has ganado";
    oponentState[0].style.color = "lightgreen";
  }

  if (randomItem == 2 && userItem == 1) {
    oponentState[0].innerHTML = "Has perdido";
    oponentState[0].style.color = "red";
  }

  //hide items and show reset
  piedra.style.display = "none";
  papel.style.display = "none";
  tijeras.style.display = "none";

  let playerG = document.getElementById("player");
  playerG.style.gridTemplateColumns = "none";
  playerG.style.placeContent = "inherit";

  //reset game
  let resetBtn = document.getElementById("reset");
  resetBtn.style.display = "grid";

  function resetGame() {
    oponentState[0].innerHTML = "Tu oponente está eligiendo";
    oponentState[0].style.color = "white";
    document.getElementById("loadingPoints").style.display = "block";

    appRock.style.display = "none";
    appPaper.style.display = "none";
    appScissors.style.display = "none";

    vs.style.display = "none";
    wait.style.display = "grid";

    userAtack.style.display = "none";

    let playerG = document.getElementById("player");
    playerG.style.gridTemplateColumns = "18.75% 18.75% 18.75%";
    playerG.style.placeContent = "center";

    piedra.style.display = "block";
    papel.style.display = "block";
    tijeras.style.display = "block";

    resetBtn.style.display = "none";
  }

  resetBtn.addEventListener("click", resetGame);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      resetGame();
    }
  });
}

//When click choose an item
piedra.addEventListener("click", (event) => {
  playerAtack("Rock");
});

papel.addEventListener("click", (event) => {
  playerAtack("Paper");
});

tijeras.addEventListener("click", (event) => {
  playerAtack("Scissors");
});

//When using keyboard choose an item

document.addEventListener("keydown", (event) => {
  if (event.code === "Digit3") {
    playerAtack("Scissors");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Digit2") {
    playerAtack("Paper");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Digit1") {
    playerAtack("Rock");
  }
});

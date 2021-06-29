let oponentState = document
  .getElementById("oponent")
  .getElementsByTagName("h2");

function playerAtack(atack) {
  document.getElementById("loadingPoints").style.display = "none";
  // show choosen items
  let userAtack = document.getElementById(`user${atack}`);
  userAtack.style.display = "block";
  document.getElementById("wait").style.display = "none";
  document.getElementById("vs").style.display = "table";

  //get a random number to assign an item to atack
  let randomItem = Math.floor(Math.random() * 3);

  //set item to atack
  switch (randomItem) {
    case 0:
      document.getElementById("appRock").style.display = "block";
      break;

    case 1:
      document.getElementById("appPaper").style.display = "block";
      break;

    case 2:
      document.getElementById("appScissors").style.display = "block";
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
  document.getElementById("piedra").style.display = "none";
  document.getElementById("papel").style.display = "none";
  document.getElementById("tijeras").style.display = "none";

  let playerG = document.getElementById("player");
  playerG.style.gridTemplateColumns = "none";
  playerG.style.placeContent = "inherit";

  //reset game
  let resetBtn = document.getElementById("reset");
  resetBtn.style.display = "grid";

  resetBtn.addEventListener("click", (event) => {
    userAtack.style.display = "none";

    document.getElementById("appRock").style.display = "none";
    document.getElementById("appPaper").style.display = "none";
    document.getElementById("appScissors").style.display = "none";
    document.getElementById("vs").style.display = "none";
    document.getElementById("wait").style.display = "grid";
    oponentState[0].innerHTML = "Tu oponente está eligiendo";
    oponentState[0].style.color = "white";
    document.getElementById("loadingPoints").style.display = "block";

    resetBtn.style.display = "none";

    let playerG = document.getElementById("player");
    playerG.style.gridTemplateColumns = "18.75% 18.75% 18.75%";
    playerG.style.placeContent = "center";

    document.getElementById("piedra").style.display = "block";
    document.getElementById("papel").style.display = "block";
    document.getElementById("tijeras").style.display = "block";
  });
}

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijeras");

piedra.addEventListener("click", (event) => {
  playerAtack("Rock");
});

papel.addEventListener("click", (event) => {
  playerAtack("Paper");
});

tijeras.addEventListener("click", (event) => {
  playerAtack("Scissors");
});

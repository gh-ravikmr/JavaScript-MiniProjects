let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was graw");
  msg.innerText = "Game is Draw Play Again!"
  msg.style.backgroundColor = "#081b31 "
};

const showwinner = (userWin) => {
  if (userWin) {
    console.log("you win");
    msg.innerText = "You Win"
    msg.style.backgroundColor = "green"
  } else {
    console.log("You Lost");
    msg.innerText = "You lose."
    msg.style.backgroundColor = "red"
  }
};

const playGame = (userChoice) => {
  const compChoice = gencompchoice();
  console.log("com choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showwinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

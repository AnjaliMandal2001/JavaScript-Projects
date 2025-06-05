// Select DOM elements
let choices = document.querySelectorAll(".choice");
let you = document.querySelector(".you-div");
let computer = document.querySelector(".computer");
let result = document.querySelector(".result");

// Load audio files
let winSound = new Audio("win.mp3");
let loseSound = new Audio("lose.mp3");
let drawSound = new Audio("draw.mp3");

// Handle choice click
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    let options = ["Stone", "Paper", "Scissor"];
    let compIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[compIndex];
    playGame(userChoice, computerChoice);
  });
});

// Game logic
function playGame(userChoice, computerChoice) {
  const emojis = {
    Stone: "👊",
    Paper: "✋",
    Scissor: "✌"
  };

  // Update emoji display
  you.innerText = emojis[userChoice];
  computer.innerText = emojis[computerChoice];

  // Animate emoji hands
  you.classList.add("animate-punch");
  computer.classList.add("animate-punch");

  setTimeout(() => {
    you.classList.remove("animate-punch");
    computer.classList.remove("animate-punch");
  }, 400); // match animation duration

  // Game result logic
  if (userChoice === computerChoice) {
    result.innerText = "Draw";
    result.style.boxShadow =
      "inset 2px 2px 10px rgba(16,198,222,0.8), -2px -2px 10px rgba(17,201,225,0.8)";
    result.style.color = "rgba(17,201,225,0.8)";
    drawSound.play();
  } else if (
    (userChoice === "Stone" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Stone") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    result.innerText = "YOU WIN";
    result.style.boxShadow =
      "inset 2px 2px 10px rgba(16,222,19,0.8), -2px -2px 10px rgba(16,222,19,0.8)";
    result.style.color = "rgba(16,222,19,0.8)";
    winSound.play();
  } else {
    result.innerText = "YOU LOSE";
    result.style.boxShadow =
      "inset 2px 2px 10px rgba(222,50,16,0.8), -2px -2px 10px rgba(222,50,16,0.8)";
    result.style.color = "rgba(222,50,16,0.8)";
    loseSound.play();
  }
}

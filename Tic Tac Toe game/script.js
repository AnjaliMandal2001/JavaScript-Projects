
let boxes = document.querySelectorAll(".boxes");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let span = document.querySelector("#result");
let reset = document.getElementById("reset");
let ng = document.getElementById("ng");
let turnX = true;

// Sound effects
const winnerSound = new Audio("winner.mp3");
const drawSound = new Audio("drawMatch.mp3");
const clickSound = new Audio("turn.mp3");

let WinnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Reset function shared by both buttons
function resetGame() {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.add("hover");
    });
    msg.classList.add("hide");
    turnX = true;
    turn1.classList.add("b-s");
    turn2.classList.remove("b-s");
}

// Attach reset to both buttons
reset.addEventListener('click', resetGame);
ng.addEventListener('click', resetGame);

// Game play logic
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerText !== "") return; // Prevent clicking filled box

        // ✅ Play turn sound
        clickSound.currentTime = 0;
        clickSound.play();

        if (turnX) {
            box.innerText = "X";
            box.style.color = "rgb(174,51,96)";
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
            turnX = false;
        } else {
            box.innerText = "O";
            box.style.color = "rgb(17,52,182)";
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s");
            turnX = true;
        }

        checkWinner();
    });
});

// Check for win or draw
function checkWinner() {
    let isDraw = true;

    for (let condition of WinnerCondition) {
        let box1 = boxes[condition[0]].innerText;
        let box2 = boxes[condition[1]].innerText;
        let box3 = boxes[condition[2]].innerText;

        if (box1 !== "" && box2 !== "" && box3 !== "") {
            if (box1 === box2 && box2 === box3) {
                showResult(box1);
                return;
            }
        }
    }

    boxes.forEach(box => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        showResult("Draw");
    }
}

// Show result and play appropriate sound
function showResult(result) {
    boxes.forEach(box => {
        box.disabled = true;
        box.classList.remove("hover");
    });

    msg.classList.remove("hide");

    if (result === "X") {
        span.innerText = "X";
        span.style.color = "rgb(174,51,96)";
        winnerSound.play();
    } else if (result === "O") {
        span.innerText = "O";
        span.style.color = "rgb(17,52,182)";
        winnerSound.play();
    } else {
        span.innerText = "It's a Draw!";
        span.style.color = "orange";
        drawSound.play();
    }
}



















/*
const winnerSound = new Audio("winner.mp3");
const drawSound = new Audio("drawMatch.mp3");
const clickSound = new Audio("turn.mp3");


let boxes=document.querySelectorAll(".boxes")
let turn1=document.querySelector(".turn1")
let turn2=document.querySelector(".turn2")
let msg=document.querySelector(".msg")
let span=document.querySelector("#result")
let reset=document.getElementById("reset")
let ng=document.getElementById("ng")
let turnX=true;


let WinnerCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

reset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.add("hover");
    });
    msg.classList.add("hide");
    // Keep current turn, don't change turnX
});


boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText="X"
            box.style.color="rgb(174,51,96)"
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
            turnX=false
        }
        else{
            box.innerText="O"
            box.style.color="rgb(17,52,182)"
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s");
            turnX=true;
        }
        checkWinner();
    })
})


function checkWinner(){
    let isDraw = true;

    for(let condition of WinnerCondition){
        let box1 = boxes[condition[0]].innerText;
        let box2 = boxes[condition[1]].innerText;
        let box3 = boxes[condition[2]].innerText;

        if(box1 !== "" && box2 !== "" && box3 !== ""){
            if(box1 === box2 && box2 === box3){
                showResult(box1);
                return;
            }
        }
    }

    boxes.forEach(box => {
        if(box.innerText === ""){
            isDraw = false;
        }
    });

    if(isDraw){
        showResult("Draw");
    }
}


function showResult(result){
    boxes.forEach(box => {
        box.disabled = true;
        box.classList.remove("hover");
    });

    msg.classList.remove("hide");

    if(result === "X"){
        span.innerText = "X";
        span.style.color = "rgb(174,51,96)";
    }
    else if(result === "O"){
        span.innerText = "O";
        span.style.color = "rgb(17,52,182)";
    }
    else {
        span.innerText = "It's a Draw!";
        span.style.color = "orange";
    }
}


ng.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.add("hover");
    });
    msg.classList.add("hide");
    turnX = true; // Reset to X
    turn1.classList.add("b-s");
    turn2.classList.remove("b-s");
});


reset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.add("hover");
    });
    msg.classList.add("hide");
    turnX = true;
    turn1.classList.add("b-s");
    turn2.classList.remove("b-s");
});
*/
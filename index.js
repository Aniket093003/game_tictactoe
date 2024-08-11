let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let Newgame = document.querySelector("#new-game");
let message_container = document.querySelector(".message-container");
let message = document.querySelector(".message");
let turnO = true;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");

    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

let showWinner = (winner) => {
  message.innerText = `Winner is ${winner} `;
  message_container.classList.remove("hide");
  disableboxes();
};

let checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};
let disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
let resetGame = ()=>{
     turnO=true;
     enableboxes();
     message_container.classList.add("hide");
};
resetButton.addEventListener("click", resetGame);
Newgame.addEventListener("click", resetGame);
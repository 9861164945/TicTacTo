let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbutton");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            return boxes[a].innerText; // Return the winner ('O' or 'X')
        }
    }
    return null; // No winner yet
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        turnO = !turnO;
        box.disabled = true;

        const winner = checkWinner();
        if (winner) {
            alert(`${winner} is the winner!`);
            resetGame();
        }
        
    });
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
}

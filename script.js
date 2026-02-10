let button = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let gameover = false;


let Winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

// function reset() {
//     box.innerText = "";
//     turn0 = true;
//     box.disabled = alse;
// }


let turn0 = true;

button.forEach(box => {
    box.addEventListener("click", () => {
        if (gameover) return;
        if (turn0) {
            box.innerText = "X"
            turn0 = false;

        } else {
            box.innerText = "O"
            turn0 = true;

        }
        box.disabled = true;
        WinnerCheck();
    });



});


function WinnerCheck() {
    Winner.forEach(patterns => {

        const a = button[patterns[0]].innerText;
        const b = button[patterns[1]].innerText;
        const c = button[patterns[2]].innerText;

        if (a && a === b && b === c) {
            alert(`Winner is ${a}`);
            button.forEach(box => box.disabled = true);
            gameover = true;
        }

    })

}

reset.addEventListener("click", () => {
    button.forEach(box => {

        box.innerText = "";
        box.disabled = false;
        // turn0 = true;

    });

    turn0 = true;
    gameover = false;


});

// winner segmaent 

// ya ou
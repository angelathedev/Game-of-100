let total = 0;
let totalEl = document.getElementById("total-el");
let messageEl = document.getElementById("message-el");
const newGameBtn = document.getElementById("newGame-el");
const inputEl = document.getElementById("input-el");
const submitBtn = document.getElementById("submit-el");
const instructionsP = document.getElementById("instructions-p");
const instructionsEl = document.getElementById("instructions-el");
let playerEl = document.getElementById("player-el");
let player1 = false;


function newGame() {
    total = 0;
    totalEl.textContent = "Total: " + 0;
    player1 = true;
    playerEl.textContent = "Player 1 turn";
    messageEl.textContent = "";
}

function incrementTotal() {
    let newInput = parseInt(inputEl.value)
    if(newInput > 0 && newInput < 10) {
        if(total + newInput > 100) {
            messageEl.textContent = "Total cannot exceed 100. Please choose another number.";
        } else {
            total = total + newInput;
            totalEl.textContent = "Total: " + total;
        if(player1 === true) {
                playerEl.textContent = "Player 2 turn";
                player1 = false;
            } else if (player1 === false) {
                playerEl.textContent = "Player 1 turn";
                player1 = true;
            }

        
            if(total === 100 && player1 === false) {
                messageEl.textContent = "Player 1, you have won the game!"
                playerEl.textContent = ""
            } else if(total === 100 && player1 === true) {
                messageEl.textContent = "Player 2, you have won the game!"
                playerEl.textContent = ""
            }
            }
        } 
    
      else {
                messageEl.textContent = "Please pick a number between 1 and 9";
            }
        
}

let dialog = document.querySelector(".dialog"); //     DIALOG
let btnResetGame = document.querySelector(".resetGame").addEventListener("click", () => {
    dialog.showModal()
});     
/* buttons to select player name */
let displayPlayer1Name = document.querySelector(".player1Name");
let player1Selection = document.querySelector(".player1Selection");
let btnX = document.querySelector(".imgX");  
let btnBurrito = document.querySelector(".imgBurrito");
let displayPlayer2Name = document.querySelector(".player2Name");   
let player2Selection = document.querySelector(".player2Selection");
let btnO = document.querySelector(".imgO");
let btnTaco = document.querySelector(".imgTaco");
btnX.addEventListener("click", ()=> {
    btnBurrito.classList.remove('imgSelected');
    btnX.classList.add('imgSelected');
    player1Selection.textContent="X";
    displayPlayer1Name.textContent="Player X";
});
btnBurrito.addEventListener("click", ()=>{
    btnX.classList.remove("imgSelected");
    btnBurrito.classList.add("imgSelected");
    player1Selection.textContent="Burrito";
    displayPlayer1Name.textContent="Burrito";
});
btnO.addEventListener("click", ()=> {
    btnTaco.classList.remove('imgSelected');
    btnO.classList.add('imgSelected');
    player2Selection.textContent="O";
    displayPlayer2Name.textContent="Player O";
});
btnTaco.addEventListener("click", ()=>{
    btnO.classList.remove("imgSelected");
    btnTaco.classList.add("imgSelected");
    player2Selection.textContent="Taco";
    displayPlayer2Name.textContent="Taco";
});
///////////////////////////////////////////////////////////////////////////
function createPlayer (name,sing) {                  //    PLAYER FUNC
    let playerName = name;
    let playerSign = sign
    let winScore = 0;
    let getScore = () => winScore;
    let incrementScore = () => winScore++;
    return {name,sign,getScore,incrementScore};
} 






let gameBoard = (function(){})();
/*
crear modulo juego que acepte dos jugadores
*/






//////////////////////////////////////////////////////////////////////////////
let btnStartGame = document.querySelector(".startGame").addEventListener("click", () => {
    dialog.close();
    //start the game!
})
dialog.showModal();
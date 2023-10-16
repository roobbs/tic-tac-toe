let dialog = document.querySelector(".dialog"); //open dialog
let btnStartGame = document.querySelector(".startGame");
btnStartGame.addEventListener("click", () => {
    dialog.close();
})
let btnResetGame = document.querySelector(".resetGame").addEventListener("click", () => {
    dialog.showModal()
});
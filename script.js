let boardContainer = document.querySelector(".gridContainer"); //////
let showTurn = document.querySelector(".displayTurn");
let dialog = document.querySelector(".dialog"); //     DIALOG
let btnResetGame = document.querySelector(".resetGame").addEventListener("click", () => {
    dialog.showModal();
});     
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
function createPlayer (name) {                  //    PLAYER FUNC
    let playerName = name;
    let signSrc = function(){
        let source;
        switch (name) {
            case "Burrito":
                source = "./images/burrito.png";
                break;
            case "Taco":
                source = "./images/taco.png";
                break;
            case "X":
                source = "./images/x.png";
                break;
            case "O":
                source = "./images/o.png";
                break;
        }
        return source;
    }
    let winScore = 0;
    let myTurn= true;
    let getScore = () => winScore;
    let incrementScore = () => winScore++;
    return {name,signSrc,getScore,incrementScore,myTurn};
} 
function createSquare (className) {
    let name = className;
    let addToContainer = function(){
        let square= document.createElement("div");
        square.classList.add(className);
        square.classList.add("grid");
        boardContainer.appendChild(square);
        let event = function (player1,player2) {
            square.addEventListener("click", ()=> {
                let owner="";
                if(square.textContent==="") {
                    if(player1.myTurn===true){
                        console.log(player1.name+" took this square");
                        square.textContent=player1.name;
                        let img = new Image();
                        img.src=player1.signSrc();
                        square.appendChild(img);
                        player1.myTurn=false;
                        player2.myTurn=true;
                        showTurn.textContent=player2.name+" 's Turn";

                    } else {
                        console.log(player2.name+" took this square");
                        square.textContent=player2.name;
                        let img = new Image();
                        img.src=player2.signSrc();
                        square.appendChild(img);
                        player2.myTurn=false;
                        player1.myTurn=true;
                        showTurn.textContent=player1.name+"'s Turn";
                    }
                }
            });
        }
        return event;
    }
    return {name,addToContainer};
}
let createBoard = function() {
    boardContainer.innerHTML="";
    let one= createSquare("one");
    let two= createSquare("two");
    let three = createSquare("three");
    let four = createSquare("four");
    let five = createSquare("five");
    let six = createSquare("six");
    let seven = createSquare("seven");
    let eight = createSquare("eight");
    let nine = createSquare("nine");  
    return {one,two,three,four,five,six,seven,eight,nine};
};
//////////////////////////////////////////////////////////////////////////////
let btnStartGame = document.querySelector(".startGame").addEventListener("click", () => {
    dialog.close();
    let player1 = createPlayer(player1Selection.textContent);
    let player2 = createPlayer(player2Selection.textContent);
    console.log(player1.name+" vs "+player2.name);
    player2.myTurn=false;
    showTurn.textContent=player1.name+"'s Turn";
    console.log(player1.name+"'s turn: "+player1.myTurn); //
    let board=createBoard();
    let sqr1 = board.one.addToContainer();
    sqr1(player1,player2);
    let sqr2 = board.one.addToContainer();
    sqr2(player1,player2);
    let sqr3 = board.one.addToContainer();
    sqr3(player1,player2);
    let sqr4 = board.one.addToContainer();
    sqr4(player1,player2);
    let sqr5 = board.one.addToContainer();
    sqr5(player1,player2);
    let sqr6 = board.one.addToContainer();
    sqr6(player1,player2);
    let sqr7 = board.one.addToContainer();
    sqr7(player1,player2);
    let sqr8 = board.one.addToContainer();
    sqr8(player1,player2);
    let sqr9 = board.one.addToContainer();
    sqr9(player1,player2);
})
dialog.showModal();
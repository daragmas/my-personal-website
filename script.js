const penteDiv = document.createElement('div');
penteDiv.className = 'pente';
let currentPlayer = "player1"

function passTurn(){
    if (currentPlayer == 'player1'){currentPlayer = 'player2'}
    else if (currentPlayer == 'player2'){currentPlayer = 'player1'}
}

function playGame(){
    document.addEventListener('mousedown', function (e) {
        // console.log(e.path[0].classList[1]);
        let cellSelect = document.getElementsByClassName(`${e.path[0].classList[1]}`);
        console.log(cellSelect[0].classList);
        if (cellSelect[0].classList.length < 3){
            cellSelect[0].classList.add(currentPlayer);
            passTurn()
        }  
    })
    

}

function makeGameBoard(){
    const gameBoard = document.createElement('div');
    gameBoard.className = 'gameBoard';
    penteDiv.appendChild(gameBoard);
    for (row = 1; row < 21; row++){
        for (col = 1; col < 21; col++){
            let cell = document.createElement('div');
            cell.className = `cell ${row}-${col}`;
            cell.style.setProperty('grid-area', `${row} / ${col}`);
            gameBoard.appendChild(cell)
        }
    }       
}

function gameStart(){
    penteDiv.removeChild(startButtton);
    console.log('test');
    makeGameBoard();
    playGame();
}



const startButtton = document.createElement('button');
startButtton.textContent = "Play";
startButtton.className = 'startButton';
startButtton.onclick = gameStart;

penteDiv.appendChild(startButtton);
document.body.appendChild(penteDiv);
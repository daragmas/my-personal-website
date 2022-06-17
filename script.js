const penteDiv = document.createElement('div');
penteDiv.className = 'pente';

function makeGameBoard(){
    const gameBoard = document.createElement('div');
    gameBoard.className = 'gameBoard';
    penteDiv.appendChild(gameBoard);
    for (col = 0; col < 20; col++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        gameBoard.appendChild(cell)
    }
}

function gameStart(){
    penteDiv.removeChild(startButtton);
    console.log('test');
    makeGameBoard();
}



const startButtton = document.createElement('button');
startButtton.textContent = "Play";
startButtton.className = 'startButton';
startButtton.onclick = gameStart;

penteDiv.appendChild(startButtton);
document.body.appendChild(penteDiv);
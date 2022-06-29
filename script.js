const penteDiv = document.createElement('div');
penteDiv.className = 'pente';
let currentPlayer = "player1"
const gridLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t']
let captures = {'player1':0, 'player2':0}

function passTurn(){
    if (currentPlayer == 'player1'){currentPlayer = 'player2'}
    else if (currentPlayer == 'player2'){currentPlayer = 'player1'}
}

function adjacentCheck(baseCell,rowModifier,colModifier){
    //target cell at select distance from base cell
    let baseCellClasses = baseCell[0].classList
    let targetCellRow = `${parseInt(baseCellClasses[1]) + rowModifier}`
    //console.log(targetCellRow)
     
    let colIndex = gridLetters.indexOf(baseCellClasses[2])
    let colIndexModded = colIndex + colModifier
    // console.log(colIndexModded)
    
    let targetCellCol = gridLetters[colIndexModded]
    if (targetCellRow < 1 || targetCellRow > 20) { return 0 }
    else if (colIndexModded < 0 || colIndexModded > 19) { return 0 }
    else {
        let targetCell = document.getElementsByClassName(`${targetCellRow} ${targetCellCol}`)
        //console.log(targetCell)

        //return player class, if any
        let targetCellClassList = targetCell[0].classList
        if (targetCellClassList.length > 3) {
            return targetCellClassList[3]
        }
        else{return false} 
    }
}


function captureCheck(lastPlacement){
    //go to last placed stone
    let checky = adjacentCheck(lastPlacement,1,1)
    //console.log(checky)
    //check for adjacent stones
    //if adjacent stone belonging to other player present, 
        //check if another opposing stone is next in line to that one
            //check if allied stone is on the other side of the two opposing stones
                // remove opposing stones from the board
                // add 2 to current player's capture total


}

function winCheck(lastPlacement){
    //check if player's capture total has reached 10
    if (captures[currentPlayer] == 10){console.log(`${currentPlayer} wins!`)}
    else{
        let adjacentStones = 0 //declare stone counter
        for(rowMod= -1; rowMod < 2; rowMod++){
            for(colMod= -1; colMod < 2; colMod++){
                if(adjacentCheck(lastPlacement,rowMod,colMod) == currentPlayer & (Math.abs(rowMod)+Math.abs(colMod) != 0)){ 
                    adjacentStones = 1 //check cells around last stone placed, but not the cell itself
                    let adjMod = 2
                    while (10>adjacentStones > 0){
                        if(adjacentCheck(lastPlacement, rowMod * adjMod, colMod * adjMod) == currentPlayer){
                            adjacentStones++
                            adjMod++
                        }
                        else if(adjacentCheck(lastPlacement,-rowMod,-colMod)==currentPlayer){
                            adjacentStones++
                            if (adjacentCheck(lastPlacement, -rowMod*2, -colMod*2) == currentPlayer) {
                                adjacentStones++}

                            // for(n=1;n<6-adjMod;n++){
                            //     console.log(n)
                            //     if (adjacentCheck(lastPlacement, -rowMod * n, -colMod * n)) { 
                            //         adjacentStones++ }
                            // }
                            console.log(adjacentStones)
                        }
                        else {adjacentStones=0}
                        }
                    // for(toWin=1;toWin<5;toWin++){ //if there is an allied cell adjacent, check stones in the same direction
                    //     if(adjacentCheck(lastPlacement,rowMod*toWin,colMod*toWin)==currentPlayer){ //if another allied stone is present...
                    //         adjacentStones++ //iterate adjacent stones
                    //         console.log(adjacentStones)
                    //         console.log(`${rowMod * toWin},${colMod * toWin}`)
                    //         if (adjacentStones == 5) { //if there are 4 stones next to the last stone placed, that means there's 5 in the row
                    //             alert(`${currentPlayer} wins!`)
                    //         }
                    //         //TODO: check opposite direction for allied stones in case of middle placement
                    //     }
                    //     else{ //if an empty cell or an opposing stone is after the allied stone, stop counting
                    //         adjacentStones = 0
                    //     }
                        
                    // }
                }
            }
        }
    }
}

function playGame(){
    document.addEventListener('mousedown', function (e) {
        let cellClass = e.path[0].classList
        if (cellClass.contains('cell')) { 
            let cellSelect = document.getElementsByClassName(`${e.path[0].classList}`);
            // console.log(cellSelect[0].classList);
            // console.log(cellSelect)
            if (cellSelect[0].classList.length < 4){
                cellSelect[0].classList.add(currentPlayer);
                captureCheck(cellSelect)
                winCheck(cellSelect)
                passTurn()
                console.log(currentPlayer)
            }
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
            cell.className = `cell ${row} ${gridLetters[col-1]}`;
            cell.style.setProperty('grid-area', `${row} / ${col}`);
            gameBoard.appendChild(cell)
        }
    }       
}

function gameStart(){
    penteDiv.removeChild(startButtton);
    console.log('start');
    makeGameBoard();
    playGame();
}



const startButtton = document.createElement('button');
startButtton.textContent = "Play";
startButtton.className = 'startButton';
startButtton.onclick = gameStart;

penteDiv.appendChild(startButtton);
document.body.appendChild(penteDiv);
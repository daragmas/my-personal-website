// const h2 = document.createElement('h2');
// h2.textContent = "This content added by JavaScript";

// document.querySelector('body').appendChild(h2);

function gameStart(){
    console.log('test');
}
const penteDiv = document.createElement('div');
penteDiv.className = 'pente';

const startButtton = document.createElement('button');
startButtton.textContent = "Play";
startButtton.onclick = gameStart;

penteDiv.appendChild(startButtton);
document.body.appendChild(penteDiv);
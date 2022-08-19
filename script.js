const board = document.querySelector('#board');

const sqs = 16;

for (let i = 0; i < sqs; i++) {
    const col = document.createElement('div');
    col.classList.add('col');
    col.setAttribute('style', 'flex-grow: 1; border-right: .5px solid grey; display: flex; flex-direction: column;');
    for (let j = 0; j < sqs; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', 'flex-grow: 1; border-top: .5px solid grey;');
        col.appendChild(cell);
    }    
    board.appendChild(col);
}

const cells = document.querySelectorAll('.cell');
for (cell of cells) {
   cell.addEventListener('mouseover', colorIn);
   
}

function colorIn(){
    this.style.background = "black";
}
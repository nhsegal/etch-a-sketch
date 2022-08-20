const board = document.querySelector('#board');
const cellNumber = document.getElementById("cell-number");
let sqs = 16;

cellNumber.addEventListener('change', () => {
    sqs = cellNumber.value; 
    redraw();
})

function redraw() {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
      }
    for (let i = 0; i < sqs; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.setAttribute('style', 'flex-grow: 1; display: flex; flex-direction: column;');
        for (let j = 0; j < sqs; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute(
                'style', 
                `flex-grow: 1; border: .5px solid grey; border-radius: ${(100/sqs)}px;`);
            col.appendChild(cell);
        }    
        board.appendChild(col);
    }
    const cells = document.querySelectorAll('.cell');
    for (cell of cells) {
        cell.addEventListener('mouseover', colorIn);
   
    }
}




function colorIn(){
    const redSlider = document.querySelector('#redSlider');
    const greenSlider = document.querySelector('#greenSlider');
    const blueSlider = document.querySelector('#blueSlider');
    this.style.background = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
}

redraw();
function changeColour(event) {
    let square = event.target;
    square.style.backgroundColor = 'gray';

}

function createGrid(dimension) {

    document.documentElement.style.setProperty('--size', `${100*(1/(dimension+1))}%`);
    console.log(`${100*(1/(dimension+1))}%`);

    let board = document.querySelector(".board");

    for (let i = 1; i < dimension*dimension; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        //square.innerHTML += i;
        square.addEventListener('mouseover', changeColour);
        board.appendChild(square);
        
    }
    console.log(dimension*dimension);
    console.log(board.children.length);
}

function removeGrid() {
    
    let board = document.querySelector(".board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

let promptButton = document.querySelector('.square-count');

promptButton.addEventListener('click', function() {
    let inp = prompt('X by X:');

    if (inp === null || inp.trim() === '') {
        alert("Try again");
    }

    removeGrid();
    createGrid(Number(inp));
});

let board = document.querySelector(".board");
for (let i = 0; i < board.children.length; i++) {
    let square = board.children[i];
    square.addEventListener('mouseover', changeColour);
}

createGrid(16);
        
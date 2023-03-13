let color = "black";
let click = true;

function fillBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
} 
}

fillBoard(16);

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        fillBoard(input);
    }
    else{
        console.log("Board size not in range");
    }
}

function colorSquare() {
    if (click) {
        if ((color==="random")) {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
    }
} 

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
    if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
    }
})
/* function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.style.width = (100/cols) + '%';
    cell.style.height = (100/rows) + '%';
  };
};

function setGridSize(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.innerHTML = "";
  makeRows(rows, cols);
}

makeRows(16, 16); */
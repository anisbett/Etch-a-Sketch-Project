const container = document.getElementById("container");

function makeRows(rows, cols) {
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

makeRows(16, 16);
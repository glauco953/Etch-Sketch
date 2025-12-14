const gridSize = 16;

let rows = [];
let items = new Array();
const sandbox = document.createElement("div");
sandbox.classList.add("sandbox");

const generateRowItems = function (rowIndex) {
  for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
    items[rowIndex][columnIndex] = document.createElement("div");
    let subcontainer = document.createElement("div");
    subcontainer.classList.add("square-container");
    items[rowIndex][columnIndex].classList.add("square");
    subcontainer.appendChild(items[rowIndex][columnIndex]);
    rows[rowIndex].appendChild(subcontainer);
  }
};

for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
  rows[rowIndex] = document.createElement("div");
  rows[rowIndex].classList.add("row");
  items[rowIndex] = [];
  generateRowItems(rowIndex);
  sandbox.appendChild(rows[rowIndex]);
}

const root = document.body;
root.appendChild(sandbox);

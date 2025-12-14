const gridSize = 16;
const squareWidthPercentage = 100 / gridSize;

let squares = [];
const root = document.body;
const sandbox = document.createElement("div");
sandbox.classList.add("sandbox");

const controlPanel = document.createElement("div");
controlPanel.classList.add("panel");

const cPanelTitle = document.createElement("h2");
cPanelTitle.textContent = "Select the grid width: ";
controlPanel.appendChild(cPanelTitle);

const gridLengthInput = document.createElement("input");
gridLengthInput.setAttribute("type", "number");
controlPanel.appendChild(gridLengthInput);

const refreshButton = document.createElement("button");
refreshButton.textContent = "Clear";
controlPanel.appendChild(refreshButton);

const activateSquare = function (e) {
  e.target.classList.add("active");
};

for (let i = 0; i < gridSize * gridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("id", i);
  square.style.width = squareWidthPercentage + "%";
  square.addEventListener("mouseenter", activateSquare);
  sandbox.appendChild(square);
}

root.appendChild(controlPanel);
root.appendChild(sandbox);

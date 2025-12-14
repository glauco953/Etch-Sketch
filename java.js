let gridSize = 16;
let squareWidthPercentage = 100 / gridSize;

const refreshHandler = function (e) {
  e.preventDefault();
  const newSize = document.getElementById("size").value;
  if (newSize > 200 || newSize <= 0) {
    alert("Invalid size");
    return;
  }
  gridSize = newSize;
  squareWidthPercentage = 100 / gridSize;
  buildGrid();
};

const activateSquare = function (e) {
  e.target.classList.add("active");
};

const root = document.body;

const controlPanel = document.createElement("form");
controlPanel.classList.add("panel");
controlPanel.setAttribute("onSubmit", "#");

const cPanelTitle = document.createElement("h2");
cPanelTitle.textContent = "Select the grid width: ";
controlPanel.appendChild(cPanelTitle);

const gridLengthInput = document.createElement("input");
gridLengthInput.setAttribute("id", "size");
gridLengthInput.setAttribute("type", "number");
controlPanel.appendChild(gridLengthInput);

const refreshButton = document.createElement("button");
refreshButton.textContent = "Restart";
refreshButton.addEventListener("click", refreshHandler);
controlPanel.appendChild(refreshButton);
root.appendChild(controlPanel);

function buildGrid() {
  const oldSandbox = document.getElementById("grid");
  if (oldSandbox) oldSandbox.remove();
  const sandbox = document.createElement("div");
  sandbox.classList.add("sandbox");
  sandbox.setAttribute("id", "grid");
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", i);
    square.style.width = squareWidthPercentage + "%";
    square.addEventListener("mouseenter", activateSquare);
    sandbox.appendChild(square);
  }

  root.appendChild(sandbox);
}

buildGrid();

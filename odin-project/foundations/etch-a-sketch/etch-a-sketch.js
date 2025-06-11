
const btn = document.querySelector("#btn");
const grid = document.querySelector('#grid');



function createGrid(grid, x = 16, y = 16){
  // one row
  let oneRow = createRow(ncol = y);
  grid.appendChild(oneRow);
}


function createRow(ncol = 16) {
  let row = document.createElement("div");  
  row.classList.add('row');

  for (let i = 0; i < ncol-1; i++) {
    const square = document.createElement("div");  
    square.classList.add("square");
    row.appendChild(square)
  }
  return row
}
createGrid(grid, 16)
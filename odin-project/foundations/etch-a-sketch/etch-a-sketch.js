
const btn = document.querySelector("#btn");
const grid = document.querySelector('#grid');



function createGrid(grid, x = 16, y = 16){
  for (let i = 0; i < x-1; i++) {
    let row = createRow(ncol = y);
    grid.appendChild(row);
  }
}


function createRow(ncol = 16) {

  // create a div for each row
  // each row will have class row, with display: flex
  let row = document.createElement("div");  
  row.classList.add('row');

  for (let i = 0; i < ncol-1; i++) {
    // each square has flex: 1
    const square = document.createElement("div");  
    square.classList.add("square");
    row.appendChild(square)
  }
  return row
}
createGrid(grid, 16)
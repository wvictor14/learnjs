const grid = document.querySelector('#grid');

function createGrid(grid, x = 16){
  for (let i = 0; i < x-1; i++) {
    let row = createRow(ncol = x);
    grid.appendChild(row);
  }
}

function createRow(ncol = 16) {

  // create a div for each row
  // each row will have class row, with display: flex
  let row = document.createElement("div");  
  row.classList.add('row');

  // square height is page width / number of squares, minus margin*2
  const square_h = 960/ncol - 4;

  for (let i = 0; i < ncol-1; i++) {
    // each square has flex: 1
    const square = document.createElement("div");  
    square.classList.add("square");
    square.style.height = square_h;
    row.appendChild(square)
  }
  return row
}

// create an initial grid
createGrid(grid, 16)

// set up the hover effect 
// first get all the squares
const squares = grid.querySelectorAll('.square');

// add mouseover event listener to each square
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add('hovered')
  });
});

// set up button
const btn = document.querySelector("#new");
btn.addEventListener('click', () => {
  let nsquares = prompt('Enter a number below 100');
  grid.innerHTML = '';
  createGrid(grid, nsquares);
});

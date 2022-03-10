// set starting color
let color = 'black';

// function to populate board
function populateBoard(size) {
  // make variables selecting the board and squares
  let board = document.querySelector('.board');
  let square = document.querySelectorAll('div');
  // set grid template columns and rows
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // add small outside border to the board
  board.style.border = '2px solid black';
  // set variable to make sure the gameboard is square from the size variable
  let amount = size * size;
  // create the divs that make up the board
  for (var i = 0; i < amount; i++) {
    let square = document.createElement('div');
    // add event listener to capture mouse position
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = "white"
    // insert divs into the board
    board.insertAdjacentElement('beforeend', square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 || input <= 100) {
    populateBoard(input);
  } else {
    console.log("Enter a valid number");
  }

}

function colorSquare() {
  if (color == 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }

}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector('.board');
  let square = document.querySelectorAll('div');
  square.forEach((div) => div.style.backgroundColor = 'white');

}

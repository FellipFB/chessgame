const board = document.getElementById('board');
const pieces = {
  'r': 'img/bR.png',
  'n': 'img/bN.png',
  'b': 'img/bB.png',
  'q': 'img/bQ.png',
  'k': 'img/bK.png',
  'p': 'img/bP.png',
  'R': 'img/wR.png',
  'N': 'img/wN.png',
  'B': 'img/wB.png',
  'Q': 'img/wQ.png',
  'K': 'img/wK.png',
  'P': 'img/wP.png',
};

const startPosition =
  'rnbqkbnr' +
  'pppppppp' +
  '........' +
  '........' +
  '........' +
  '........' +
  'PPPPPPPP' +
  'RNBQKBNR';

function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add((Math.floor(i / 8) + i) % 2 === 0 ? 'light' : 'dark');
    square.dataset.index = i;
    
    const piece = startPosition[i];
    if (piece !== '.') {
      const img = document.createElement('img');
      img.src = pieces[piece];
      img.classList.add('piece');
      img.draggable = true;
      img.dataset.piece = piece;
      square.appendChild(img);
    }
    
    board.appendChild(square);
  }
}

createBoard();

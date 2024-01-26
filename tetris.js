const canvs = document.getElementById("tetris");
const contextCvs = canvs.getContext("2d");

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const VACANT = "WHITE" // empty square

//draw square

function drawSquare(x, y, color) {
    contextCvs.fillStyle = color;
    contextCvs.fillRect(x * SQ, y * SQ, SQ, SQ);

    contextCvs.strokeStyle = "BLACK";
    contextCvs.strokeRect(x * SQ, y * SQ, SQ, SQ);
};
//create the board

let board = [];

for (r = 0; r < ROW; r++) {
    board[r] = [];
    for (c = 0; c < COL; c++) {
        board[r][c] = VACANT;
    };
};

//draw the board

function drawBoard() {
    for (r = 0; r < ROW; r++) {
        for (c = 0; c < COL; c++) {
            drawSquare(c, r, board[r][c])
        }
    };
};
drawBoard();

//the pieces and their color
const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "yellow"],
    [O, "blue"],
    [L, "purple"],
    [I, "cyan"],
    [J, "orange"],
];
//initiate a piece
let p = new Piece(PIECES[0][0], PIECES[0][1]);

//The Object piece

function Piece(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoN = 0; //start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];

    //we need control the pieces
    this.x = 5;
    this.y = 7;
};



//draw a piece to the board
Piece.prototype.draw = function () {
    for (r = 0; r < this.activeTetromino.length; r++) {
        for (c = 0; c < this.activeTetromino.length; c++) {
            //we draw only occupied squares
            if (this.activeTetromino[r][c])
                drawSquare(this.x + c, this.y + r, this.color)
        }
    };
};


p.draw();
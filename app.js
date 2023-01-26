const Players = (name, score, marker) => {

  const getScore = () => score;
  const getName = () => name;
  return {
    name,
    score,
    marker,
    getScore,
    getName
  }
};


//Where we update information, scores, and such


const GameBoard = (function GameBoard() {
  const boardArray = ["X", "O", null, null, null, null, "O", null, null];

  const getBoard = () => boardArray;

  const placeMarker = (index, marker) => {
    if (boardArray[index] !== null) {
      return
    };
    boardArray[index] = marker;
  }


  return {
    getBoard,
    placeMarker,

  }
})();

const ScreenController = (function ScreenController() {
  const board = document.querySelector('.gameBoard');
  board.addEventListener('click', (e) => {
    console.log(e.target.dataset.number);
  })
})();


const Game = (() => {
  const player1 = Players("Player 1", 0, "X");
  const player2 = Players("Player 2", 0, "O");

  let activePlayer = player1;

  const _switchPlayerTurn = () => {
    if (activePlayer === player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  }

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {

    console.log(`${getActivePlayer().name}'s turn`);
  }

  const playRound = () => {
    _switchPlayerTurn();
    printNewRound();
  }

  printNewRound();

  return {
    playRound,
    getActivePlayer
  }
})();

Game.playRound();
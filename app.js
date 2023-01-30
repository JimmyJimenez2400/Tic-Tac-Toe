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
      return;
    };
    boardArray[index] = marker;
  }


  return {
    getBoard,
    placeMarker,

  }
})();



const Game = (() => {
  const player1 = Players("Player 1", 0, "X");
  const player2 = Players("Player 2", 0, "O");

  const board = GameBoard.getBoard();

  const {
    placeMarker
  } = GameBoard;

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

  const playRound = (e) => {
    let playerInput = e.currentTarget.dataset.number
    placeMarker(playerInput, getActivePlayer().marker);
    e.currentTarget.textContent = getActivePlayer().marker;
    _switchPlayerTurn();

    printNewRound();
    console.log(`${board}`);
    console.log(typeof board);
    console.log(GameBoard.getBoard());
  }

  printNewRound();

  return {
    playRound,
    getActivePlayer,
  }
})();

const ScreenController = (function ScreenController() {
  const {
    playRound
  } = Game;
  const board = document.querySelectorAll('.square');
  board.forEach(element => {
    element.addEventListener('click', playRound);
  })
})();
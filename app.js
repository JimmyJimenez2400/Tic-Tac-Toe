// Create a way to make player objects
const Players = (name, score) => {
  return {
    name,
    score
  };
};

// create an object for interfacing with a board
const GameBoard = (() => {
  const gameBoard = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];
  const board = document.getElementById('gameBoard')
  const _createDivs = () => {
    for (let i = 0; i <= 2; i++) {
      const divHolder = document.createElement('div');
      divHolder.classList.add('row');

      board.appendChild(divHolder);
    }
  }
  _createDivs();
  const _createButtons = (array) => {
    for (let i = 0; i < array.length; i++) {
      const createButton = document.createElement('button');
      createButton.classList.add('square');
      // This was will go through array, what do we want it to do or happen?
      // Well we want to essentially make buttons base on length
      // then, append those buttons to board container
      // Hopefully it works
      board.appendChild(createButton);
    }
  }
  const displayButtons = () => {
    _createButtons(gameBoard);
  }
  return {
    gameBoard,
    displayButtons
  };
})();

// tie these thing together to control flow of the game in another object
const controlFlowOfGame = () => {
  const player1 = Players('player1', 0);
  const player2 = Players('player2', 0);
  const board = GameBoard;

  board.displayButtons();
  return {
    controlFlowOfGame
  };
}

controlFlowOfGame();
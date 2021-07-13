//Gameboard object
const gameboard = (() => {
    let _gameGrid = ['X',,,,,,,,,];

    let getGameGrid = () => {
        return _gameGrid;
    };

    const resetGameGrid = () => {
        _gameGrid = [,,,,,,,,];
        setBoard();
    };

    const setPiece = ( box, sign ) => {
        _gameGrid[box] = sign;
        setBoard();
    };

    const setBoard = () => {
        const boxes = document.querySelectorAll('div.box');
        let boxesArr = Array.from(boxes);

        for (let i = 0; i < boxesArr.length; i++) {
            boxesArr[i].textContent = _gameGrid[i];
        }
    };

    return {getGameGrid, resetGameGrid, setPiece, setBoard};
})();

//Display controller object
const displayController = (() => {

})();



//Handles the game's logic. Checks for win conditions.
const gameController = (() => {
    let roundCounter = 1;
    let _boxes = document.querySelectorAll('div.box');
    let _boxesArr = Array.from(_boxes);
    const _resetButton = document.querySelector('button.cwosant');

    //Adds event listeners for boxes and reset button and sets up the board.
    const init = (() => {
        for (let i = 0; i < _boxesArr.length; i++) {
            _boxesArr[i].addEventListener('click', () => {
        
                gameboard.setPiece(i, 'X');
            });
        }

        _resetButton.addEventListener('click', () => {
            gameboard.resetGameGrid();
        });

        gameboard.setBoard();
    })();
})();



//Player controller
const player = () => {
    const _playerSign = 'X';

    let getPlayerSign = () => {
        return _playerSign;
    }

    return {getPlayerSign};
};


//Scratchpad
///////////////////////////////////////////////////////////////////////////

//Check for wincons after each play
const winCons = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//If roundCounter hits 9 then match is a draw
let roundCounter = 1;


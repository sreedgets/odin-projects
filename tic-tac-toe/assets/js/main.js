//Gameboard object
const gameboard = (() => {
    let _gameGrid = ['X', 'O',,, 'X',, 'O',,,];

    const getGameGrid = (() => {
        return _gameGrid;
    })();

    const resetGameGrid = () => {
        _gameGrid = [,,,,,,,,];
    }

    const setPiece = ( box, sign ) => {
        _gameGrid[box] = sign;
    }

    return {getGameGrid, resetGameGrid, setPiece};
})();

//Display controller object
const displayController = (() => {
})();


//Handles the game's logic. Checks for win conditions.
const gameController = (() => {

})();

//Player controller
const player = () => {

};




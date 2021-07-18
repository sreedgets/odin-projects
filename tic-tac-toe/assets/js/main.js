//Gameboard object
const gameboard = (() => {
    let _gameGrid = [,,,,,,,,,];

    let getGameGrid = (e) => {
        return _gameGrid[e];
    };

    const resetGameGrid = () => {
        _gameGrid = [,,,,,,,,];
    };

    const setPiece = ( box, sign ) => {
        if (!_gameGrid[box]) {
            _gameGrid[box] = sign;
            setBoard();
            console.log(gameController.checkWin(gameboard));
        } else {
            console.log('Pick a different spot');
        }  
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



//Player controller
const Player = (sign) => {
    const _playerSign = sign;

    let getPlayerSign = () => {
        return _playerSign;
    };

    return {getPlayerSign};
};

//Handles the game's logic. Checks for win conditions.
const gameController = (() => {
    let _player1 = Player('X');
    let _playerAi = Player('O');
    let _roundCounter = 1;
    let _boxes = document.querySelectorAll('div.box');
    let _boxesArr = Array.from(_boxes);
    const _resetButton = document.querySelector('button.cwosant');

    const _checkRows = (board) => {
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = i * 3; j < i * 3 + 3; j++) {
                row.push(board.getGameGrid(j));
            }
    
            if (row.every(e => e === 'X') || row.every(e => e === 'O')) {
                return true;
            }
        }
        return false;
    }
    
    const _checkColumns = (board) => {
        for (let i = 0; i < 3; i++) {
            let column = [];
            for (let j = 0; j < 3; j++) {
                column.push(board.getGameGrid(i + 3 * j));
            }
            if (column.every(e => e === 'X') || column.every(e => e === 'O')) {
                return true;
            }
        }
        return false;
    }
    
    const _checkDiagonal = (board) => {
        const diag1 = [gameboard.getGameGrid(0), gameboard.getGameGrid(4), gameboard.getGameGrid(8)];
        const diag2 = [gameboard.getGameGrid(2), gameboard.getGameGrid(4), gameboard.getGameGrid(6)];

        if (diag1.every(e => e === 'X') || diag1.every(e => e === 'O') || diag2.every(e => e === 'X') || diag2.every(e => e === 'O')) {
            return true;
        } else {
            return false;
        }
    }

    const checkWin = board => {
        if (_checkRows(board) || _checkColumns(board) || _checkDiagonal(board)) {
            return true;
        } else {
            return false;
        }
    }
    //Adds event listeners for boxes and reset button and sets up the board.
    const init = (() => {
        for (let i = 0; i < _boxesArr.length; i++) {
            _boxesArr[i].addEventListener('click', () => {
        
                gameboard.setPiece(i, _player1.getPlayerSign());
            });
        }

        _resetButton.addEventListener('click', () => {
            gameboard.resetGameGrid();
            gameboard.setBoard();
        });

        gameboard.setBoard();
    })();
    return {checkWin};
})();


//Scratchpad
///////////////////////////////////////////////////////////////////////////


//If roundCounter hits 9 then match is a draw

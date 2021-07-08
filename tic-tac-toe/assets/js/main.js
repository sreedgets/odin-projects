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


//Scratchpad
///////////////////////////////////////////////////////////////////////////

const buttonController = (() => {
    const _button = document.querySelector('button.cwosant');

    const hitIt = (() => {
        _button.addEventListener('click', () => {
            console.log('got eet');
        });
    })(); 

    const getButton = () => {
        return _button;
    };

    return {getButton, hitIt};
})();

const boxes = document.querySelectorAll('div.box');
let boxesArr = Array.from(boxes);
let i = 0;
boxesArr.forEach(box => {
    box.textContent = gameboard.getGameGrid[i];
    i++
});


/*
for (let i = 0; i < boxesArr.length; i++) {
    boxesArr[i].textContent = gameboard.getGameGrid[i];
}

const buttonController = (() => {
    const _button = document.querySelector('button.cwosant');

    _button.addEventListener('click', () => {
        console.log('got eet');
    });

    const getButton = () => {
        return _button;
    };

    return {getButton};
})();
*/


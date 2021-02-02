"use strict";
exports.__esModule = true;
exports.createBoard = exports.swipe = void 0;
function combineRight(strippedArray) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        for (var i = strippedArray.length - 1; i >= 0; i--) {
            if (strippedArray[i + 1] === strippedArray[i]) {
                strippedArray[i + 1] = strippedArray[i] * 2;
                strippedArray[i] = 0;
            }
        }
        // Strip dead spots
        strippedArray = strippedArray.filter(function (n) { return n > 0; });
    }
    // add in zeros from the right
    while (strippedArray.length < 4) {
        strippedArray.unshift(0);
    }
    //return proccessed row
    return strippedArray;
}
function combineLeft(strippedArray) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        for (var i = 1; i < strippedArray.length; i++) {
            if (strippedArray[i - 1] === strippedArray[i]) {
                strippedArray[i - 1] = strippedArray[i] * 2;
                strippedArray[i] = 0;
            }
        }
        // Strip dead spots
        strippedArray = strippedArray.filter(function (n) { return n > 0; });
    }
    // add in zeros from the right
    while (strippedArray.length < 4) {
        strippedArray.push(0);
    }
    //return proccessed row
    return strippedArray;
}
function swipe(board, direction) {
    var newBoard = [];
    if (direction === "right" || direction === "left") {
        board.map(function (row) {
            //remove zeroes 
            var zerosStrippedArray = row.filter(function (num) { return num !== 0; });
            //push processed row into result board 
            var afterSwipe = [];
            if (direction === "right")
                afterSwipe = combineRight(zerosStrippedArray);
            if (direction === "left")
                afterSwipe = combineLeft(zerosStrippedArray);
            newBoard.push(afterSwipe);
        });
    }
    else {
        newBoard = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        if (direction === "up") {
            var col1 = combineLeft([board[0][0], board[1][0], board[2][0], board[3][0]].filter(function (num) { return num !== 0; }));
            var col2 = combineLeft([board[0][1], board[1][1], board[2][1], board[3][1]].filter(function (num) { return num !== 0; }));
            var col3 = combineLeft([board[0][2], board[1][2], board[2][2], board[3][2]].filter(function (num) { return num !== 0; }));
            var col4 = combineLeft([board[0][3], board[1][3], board[2][3], board[3][3]].filter(function (num) { return num !== 0; }));
            for (var i = 0; i < 4; i++) {
                newBoard[i][0] = col1[i];
                newBoard[i][1] = col2[i];
                newBoard[i][2] = col3[i];
                newBoard[i][3] = col4[i];
            }
        }
        else {
            var col1 = combineRight([board[0][0], board[1][0], board[2][0], board[3][0]].filter(function (num) { return num !== 0; }));
            var col2 = combineRight([board[0][1], board[1][1], board[2][1], board[3][1]].filter(function (num) { return num !== 0; }));
            var col3 = combineRight([board[0][2], board[1][2], board[2][2], board[3][2]].filter(function (num) { return num !== 0; }));
            var col4 = combineRight([board[0][3], board[1][3], board[2][3], board[3][3]].filter(function (num) { return num !== 0; }));
            for (var i = 0; i < 4; i++) {
                newBoard[i][0] = col1[i];
                newBoard[i][1] = col2[i];
                newBoard[i][2] = col3[i];
                newBoard[i][3] = col4[i];
            }
        }
    }
    // Add another Two
    var coords = findOpenLocation(newBoard);
    newBoard[coords[0]][coords[1]] = 2;
    return newBoard;
}
exports.swipe = swipe;
function randomNum() {
    return Math.floor(Math.random() * Math.floor(4));
}
function findOpenLocation(board) {
    var x = randomNum();
    var y = randomNum();
    do {
        x = randomNum();
        y = randomNum();
    } while (board[x][y] > 0);
    return [x, y];
}
function createBoard() {
    var board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    board[randomNum()][randomNum()] = 2;
    var loc = findOpenLocation(board);
    board[loc[0]][loc[1]] = 2;
    return board;
}
exports.createBoard = createBoard;

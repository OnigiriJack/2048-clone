function combineRight(strippedArray: number[]) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        for (let i = strippedArray.length - 1; i >= 0; i--) {
            if (strippedArray[i + 1] === strippedArray[i]) {
                strippedArray[i + 1] = strippedArray[i] * 2;
                strippedArray[i] = 0;
            }
        }
        // Strip dead spots
        strippedArray = strippedArray.filter(n => n > 0);
    }
    // add in zeros from the right
    while (strippedArray.length < 4) {
        strippedArray.unshift(0);
    }
    //return proccessed row
    return strippedArray
}

function combineLeft(strippedArray: number[]) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        for (let i = 1; i < strippedArray.length; i++) {
            if (strippedArray[i - 1] === strippedArray[i]) {
                strippedArray[i - 1] = strippedArray[i] * 2;
                strippedArray[i] = 0;
            }
        }
        // Strip dead spots
        strippedArray = strippedArray.filter(n => n > 0);
    }
    // add in zeros from the right
    while (strippedArray.length < 4) {
        strippedArray.push(0);
    }
    //return proccessed row
    return strippedArray
}
module.exports = function swipe(board: number[][], direction: string) {
    let newBoard: number[][] = [];
    if (direction ===  "right" || direction === "left") {
        board.map(row => {
            //remove zeroes 
            let zerosStrippedArray = row.filter(num => num !== 0);
            //push processed row into result board 
            let afterSwipe: number[] = [];
            if (direction === "right") afterSwipe = combineRight(zerosStrippedArray);
            if (direction === "left") afterSwipe = combineLeft(zerosStrippedArray);
            newBoard.push(afterSwipe);
        });
    } else {
        newBoard = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
           ];
        if (direction === "up") {
            let col1 = combineLeft([board[0][0], board[1][0], board[2][0], board[3][0]].filter(num => num !== 0))    
            let col2 = combineLeft([board[0][1], board[1][1], board[2][1], board[3][1]].filter(num => num !== 0))
            let col3 = combineLeft([board[0][2], board[1][2], board[2][2], board[3][2]].filter(num => num !== 0))
            let col4 = combineLeft([board[0][3], board[1][3], board[2][3], board[3][3]].filter(num => num !== 0))
            for (let i = 0; i < 4; i++) {
                newBoard[i][0] = col1[i]
                newBoard[i][1] = col2[i]
                newBoard[i][2] = col3[i]
                newBoard[i][3] = col4[i]
            }
        } else {
            let col1 = combineRight([board[0][0], board[1][0], board[2][0], board[3][0]].filter(num => num !== 0))    
            let col2 = combineRight([board[0][1], board[1][1], board[2][1], board[3][1]].filter(num => num !== 0))
            let col3 = combineRight([board[0][2], board[1][2], board[2][2], board[3][2]].filter(num => num !== 0))
            let col4 = combineRight([board[0][3], board[1][3], board[2][3], board[3][3]].filter(num => num !== 0))
            for (let i = 0; i < 4; i++) {
                newBoard[i][0] = col1[i]
                newBoard[i][1] = col2[i]
                newBoard[i][2] = col3[i]
                newBoard[i][3] = col4[i]
            }
        }
    }
    return newBoard;
}



export {}
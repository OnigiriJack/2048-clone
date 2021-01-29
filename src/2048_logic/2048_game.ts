let grid: number[][]=  [
        [0, 0, 2, 16],
        [16, 2, 16, 0],
        [0, 32, 0, 32],
        [8, 4, 2, 2]
    ]

function combineRight(strippedArray: number[]) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        for (let i = strippedArray.length - 2; i > 0; i--) {
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

function swipe(board: number[][]) {
    let newBoard: number[][] = [];
    board.map(row => {
        //remove zeroes 
        let zerosStrippedArray = row.filter(num => num !== 0);
        //push processed row into result board 
        newBoard.push(combineLeft(zerosStrippedArray));
    });
    return newBoard;
}

console.log(swipe(grid))

export {}
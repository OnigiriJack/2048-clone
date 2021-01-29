function combineRight(strippedArray: number[]) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        //console.log("here" + strippedArray[strippedArray.length - 2])
       // console.log("first " + strippedArray[strippedArray.length - 2] + "second "+ strippedArray[strippedArray.length - 1])
        for (let i = strippedArray.length - 1; i >= 0; i--) {
        //   console.log(strippedArray[i] + i )
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
    board.map(row => {
        //remove zeroes 
        let zerosStrippedArray = row.filter(num => num !== 0);
        //push processed row into result board 
        let afterSwipe: number[] = [];
        if (direction === "right") afterSwipe = combineRight(zerosStrippedArray);
        if (direction === "left") afterSwipe = combineLeft(zerosStrippedArray);

        newBoard.push(afterSwipe);
    });
    return newBoard;
}


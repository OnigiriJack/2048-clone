var grid = [
    [0, 0, 2, 16],
    [16, 2, 16, 0],
    [0, 32, 0, 32],
    [8, 4, 2, 2]
];
function combineRight(strippedArray) {
    // Addition algorithm 
    if (strippedArray.length > 1) {
        //console.log("here" + strippedArray[strippedArray.length - 2])
        // console.log("first " + strippedArray[strippedArray.length - 2] + "second "+ strippedArray[strippedArray.length - 1])
        for (var i = strippedArray.length - 1; i >= 0; i--) {
            //   console.log(strippedArray[i] + i )
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
module.exports = function swipe(board, direction) {
    var newBoard = [];
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
    return newBoard;
};

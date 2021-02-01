// TODO Up and down functions 
// push up uses combine left and push down uses combine right
// ideas  take each column and turn into a row and process it.
/*
col 1 = [0][0] [1][0] [2][0] [3][0]
col 2 = [0][1] [1][1] [2][1] [3][1]


process each one

set the newboard equal to those values
for
for (let i = 0; i < 4; i++) {
    
}
*/
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
        // create mini arrays
        newBoard = [
            [0, 0, 2, 16],
            [0, 16, 2, 16],
            [0, 0, 0, 64],
            [0, 128, 4, 2]
        ];
        var col1 = combineLeft([board[0][0], board[1][0], board[2][0], board[3][0]].filter(function (num) { return num !== 0; }));
        var col2 = combineLeft([board[0][1], board[1][1], board[2][1], board[3][1]].filter(function (num) { return num !== 0; }));
        var col3 = combineLeft([board[0][2], board[1][2], board[2][2], board[3][2]].filter(function (num) { return num !== 0; }));
        var col4 = combineLeft([board[0][3], board[1][3], board[2][3], board[3][3]].filter(function (num) { return num !== 0; }));
        console.log(col4);
        for (var i = 0; i < 4; i++) {
            newBoard[i][0] = col1[i];
            newBoard[i][1] = col2[i];
            newBoard[i][2] = col3[i];
            newBoard[i][3] = col4[i];
        }
        //console.log("newvoalkansflknasdfkjadsnf;knasdjfnsad;jfds;fh;ahsdf;has;dfhas;jkjsdahkjlahfkljdhkljafhdkjahfkjhadfkhaskldfhsdkard " )
        console.log(newBoard);
        return newBoard;
    }
    return newBoard;
};

import React from 'react';
import Grid from "./2048_grid";
import './App.css';
import { useState, useEffect } from 'react';
import { swipe, createBoard } from "./2048_logic/2048_game"
function App() {
  const [board, setBoard] = useState([[0]])

  function move(direction: any) {
    console.log(direction.key)
    let dir = "";
    // if (direction === 38) dir = "up"
    // if (direction === 40) dir = "down"
    // if (direction === 37) dir = "left"
    // if (direction === 39) dir = "right"
    setBoard(swipe(board, dir))
  }
  useEffect(() => {
    let freshBoard = createBoard();
    console.log(freshBoard)
    setBoard(freshBoard);
    // initialize board
  }, [])
  return (
    <div className="App">

      <input onKeyPress={move} />
      <h1>hello world</h1>
      <Grid board={board} />
      {/* <button onClick={() => move("up")}>
        up
      </button>
      <button onClick={() => move("down")}>
        down
      </button>
      <button onClick={() => move("right")}>
        right
      </button>
      <button onClick={() => move("left")}>
        left
      </button> */}
    </div>
  );
}

export default App;

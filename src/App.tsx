import React from 'react';
import Grid from "./2048_grid";
import './App.css';
import { useState, useEffect } from 'react';
import { swipe, createBoard } from "./2048_logic/2048_game"


function App() {
  const [board, setBoard] = useState([[0]])
  window.addEventListener('keyup', move);

  function move(direction: any) {
    // console.log(direction.keyCode)
    // let dir = "";
    // if (direction.keycode === 38) dir = "up";
    // if (direction.keycode === 40) dir = "down";
    // if (direction.keycode === 37) dir = "left";
    // if (direction.keycode === 39) dir = "right";

    setBoard(swipe(board, direction))
  }

  useEffect(() => {
    let freshBoard = createBoard();
    console.log(freshBoard)
    setBoard(freshBoard);
  }, []);


  return (
    <div onKeyUp={move} className="App">

      <h1>hello world</h1>
      <Grid board={board} />
      <button onClick={() => move("up")}>
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
      </button>

    </div>
  );
}

export default App;

import React from 'react';
import Grid from "./2048_grid";
import './App.css';
import { useState, useEffect } from 'react';
import { swipe, createBoard } from "./2048_logic/2048_game";
import useKey from "./useKey";

function App() {

  useKey("KeyD", () => setBoard(swipe(board, "right")));
  useKey("KeyW", () => setBoard(swipe(board, "up")));
  useKey("KeyS", () => setBoard(swipe(board, "down")));
  useKey("KeyA", () => setBoard(swipe(board, "left")));

  const [board, setBoard] = useState([[0]])

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  return (
    <div className="App">
      <h1>2048 clone</h1>
      <h2>Use the W, A, S, D arrow keys to move the tiles</h2>
      <Grid board={board} />
    </div>
  );
}

export default App;

import React from 'react';
import Grid from "./2048_grid";
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { swipe, createBoard } from "./2048_logic/2048_game"

function useKey(key: any, cb: any) {
  const callbackref = useRef(cb)
  useEffect(() => {
    callbackref.current = cb;
  })
  useEffect(() => {
    function handle(e: any) {
      if (e.code === key) {
        callbackref.current(e)
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle)
  }, [key])
}

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
      <h2>Use the W,A,S,D arrow keys to move the tiles</h2>
      <Grid board={board} />
    </div>
  );
}

export default App;

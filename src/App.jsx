import styled from "styled-components";
import React, { useState } from 'react'
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {

  const [isGameStarted,setIsGameStarted]=useState(false)


  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
    {isGameStarted? <GamePlay></GamePlay> : <StartGame toggle={toggleGamePlay}></StartGame>}
    </>
  )
}

export default App


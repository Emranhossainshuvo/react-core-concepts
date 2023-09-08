import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Click from './Click'
import Users from './Users'
import Friends from './friends'
import './Friends.css'

function App() {
  
  function handleClick () {
    alert('how are you?')
  }

  const handleClickTwo = () => {
    confirm('you okay?')
  }
  const paramButton = (num) => {
    alert(num + 5);
  } 
  const square = (n) => {
    confirm(n*n);
  }

  return (
    <>
      <h2>React core concepts</h2> 
      <Friends></Friends>
      <Users></Users>
      <Click></Click>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClickTwo}>Click me please</button>
      <button onClick={() => {prompt('do you like this?')}}>function button</button>
      <button onClick={() => paramButton(2)}>param button</button>
      <button onClick={() => square(5)}> click it</button>
    </>
  )
}

export default App

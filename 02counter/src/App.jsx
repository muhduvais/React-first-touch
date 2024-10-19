import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React Beginner {counter} </h1>
      <h2>Counter value: {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button> {' '}
      <button
      onClick={decreaseValue}
      >Remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App

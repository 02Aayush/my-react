import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// problem add value should not go above 20 and remove should not be negative

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addvalue = () =>{
    
    // if (counter<20) {
    //   // counter = counter + 1; //logic 1
    //   // setCounter(counter); // logic 1
    // }
    setCounter(counter => Math.min((counter + 1), 20)); // logic 2

    
  }

  const removeValue = () => {
    // if (counter>0) {  // logic 1
    //   // setCounter(counter - 1);
    // }
    setCounter(counter => Math.max((counter - 1), 0)) // logic 2

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

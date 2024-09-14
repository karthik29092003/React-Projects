import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


 let [counter, setCounter] = useState(15)

  const addValue=()=>{
   
    
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      /// The above code gives 16 as output
     

      ///below code gives 19 as output(increases by 4)
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    
    
  }

  const removeValue=()=>{
    
      setCounter(counter-1)
   
    
  }
  
  return (

    <>
      <h1>chai aur react</h1>

      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

      <p>footer: {counter}</p>

    </>
  )
}

export default App

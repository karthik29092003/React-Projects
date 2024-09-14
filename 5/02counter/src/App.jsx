import { useState } from 'react'
///import { useState,useEffect,... } from 'react'   ///(we can import hooks like this)
///import React,{ useState } from 'react'           ///(Importing React)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 // let counter = 16       (variable get's updated but not on DOM(display on browser)) so use hook below

 let [counter, setCounter] = useState(15)

  const addValue=()=>{
    /*counter++
    setCounter(counter) */
    // OR
    if(counter<20){
      setCounter(counter+1)
    }
    
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  
  return (

    /////eventhough we have't imported REACT it's parsing tree (it's working) bcz of Babble

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

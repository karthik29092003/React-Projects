import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj={
    userName:"karthik",
    age:21
  }
  let myarr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>

      {/* img Tags are closed if any found */}


    {/* Instead of using directly code here we can Import  */}
   {/* <Card username="Chai" myOBJ={myObj} myARR={myarr}/> */}
   <Card username="Chai" btnTxt="visit me!"/>
   <Card  username="Lisa"  />    {/* default btnTxt is shown here */}
   <Card/>
  

    </>
  )
}

export default App

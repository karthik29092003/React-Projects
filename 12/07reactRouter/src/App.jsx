import { useState } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ACTUALLY WE DONT NEED App.jsx file to implement this  */}
     {/* Assembling together */}
     {/* the below way is not working bcz of router */}
     {/* <Header/>
     <Home/>
     <Footer/> */}
     
    </>
  )
}

export default App

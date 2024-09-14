
import { useState } from "react"    /////importing the state

function App() {
  const [color, setColor] = useState("olive")    ///initial state 

  return (
   <div className="w-full h-screen duration-200 "   //bg-slate-500 or 
    style={{backgroundColor:color}}  ///inline CSS in React   
   >

   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">

   {/* onClick={setColor("red")} it is wrong bcz onClick{} needs function itself not a returned value */}

    <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"       
    style={{backgroundColor:"red"}}
    >Red</button>

    <button onClick={()=>setColor("black")} className=" bg-black  outline-none px-4 py-1 rounded-full text-white shadow-lg" //// I did't use inline CSS
    
    >Black</button>


<button onClick={()=>setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"grey"}}
    >Grey</button>

<button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"green"}}
    >Green</button>

    </div>

   </div>

   </div>
  ) 
}

export default App



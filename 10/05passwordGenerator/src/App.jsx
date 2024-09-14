import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); //// default length of password is 8
  const [numAllowed, setNumAllowed] = useState(false); //// initially numbers are not allowed
  const [charAllowed, setCharAllowed] = useState(false); //// initially characters are not allowed
  const [password, setPassword] = useState(""); //// we are assigning it state, bcz it needs to be updated frequently



///////   useRef and useEffect note taking
///////   HOW Can we implement 'passwordGenerator' without useCallback?
///////   

/// useRef Hook
const passwordRef=useRef(null)


  const passwordGenerator = useCallback(() => {        /// useCallback memozoies, optimies,caches the function(Not RUN)  (if any changes in dependencies)
    //// Cache

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890"; //// if nums are selected
    if (charAllowed) str += "!@#$%^&*(){}:<>?/]["; //// if chars are selected

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);  ///
      pass += str.charAt(char);                                             // pass = str.charAt(char);(it's wrong bcz it overrides 'pass')
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed,setPassword]);         //// including setPassword or not doesnt effect rerenders(bcz it is func given by react, react knows it is stable)
                                                             //// But if you include password as dependency it causes infinite loop bcz 
                                                            ////  whenever dependencies change useEffect run agains(runnung effect again changes password) and this loop continues
  /// passwordGenerator()  We cant call function directly (React limits the number of renders to prevent an infinite loop.)(in console) 
  /// instead we use hook below


  
////
////
const copypasswordtoclipboard=useCallback(()=>{
  passwordRef.current?.select()
 // passwordRef.current?.setSelectionRange(5,4)
window.navigator.clipboard.writeText(password)

}
,[password])


  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed,passwordGenerator])   ///// we use useEffect to gain RUN func if any dependencies change

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none py-1 px-3 w-full "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypasswordtoclipboard} className="bg-blue-700 text-white px-3 py-0.5 shrink-0 outline-none">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">

           <input type="range" min={6} max={99}  value={length} className="cursor-pointer"    //// slider
           onChange={(e)=>{
              setLength(e.target.value)
           }}
           
           />
          <label >Length:{length}</label>

          </div>

          <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={()=>{
            setNumAllowed((prev)=>!prev)                 /////// value gets reversed ( t-->f and f-->t ) (in callbacks we get acess to prev element)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev)                 /////// value gets reversed ( t-->f and f-->t ) (in callbacks we get acess to prev element)
          }}
          />
          <label htmlFor="charInput">Characters</label>    
                                                             {/* htmlFor is similar to 'for' in label of HTML */}
          </div>

        </div>

      </div>
    </>
  );
}

export default App;

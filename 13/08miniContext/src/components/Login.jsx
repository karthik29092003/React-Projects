import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username,setUsername]=useState('')
  const [password, setPassword] = useState('')

  ////how to fetch values from  UserContex? (Ans: useContext hook)
  const {setUser}=useContext(UserContext)   
  //it gives both user and setUser but we are only destructuring setUser
///The setUser in Login.jsx is a local variable (a constant) that you have destructured from the context
///It’s possible that Login is implicitly inside the UserContextProvider because the UserContextProvider is wrapping a parent component that contains Login (e.g., App).

  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password}) //sending data
  }


  return (
    <div>

       <h2>Login</h2>
       <input
        type="text" 
        placeholder='username'
        
        value={username}
        onChange={(e)=>setUsername(e.target.value)} 
        />
          {"    "}
       <input 
       type="text" 
       placeholder='password' 
       value={password}
       onChange={(e)=>setPassword(e.target.value)} 
       />
          {"    "}
       <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login


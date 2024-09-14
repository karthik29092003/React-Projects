import React, { useState,useContext } from "react";
import UserContext from "./UserContext";



const UserContextProvider=({children})=>{

//he setUser defined in UserContextProvider is part of the context 
//and is used globally within components that consume UserContext
const [user,setUser]=React.useState(null)
// or if we need,we can call APIs(useEffect())


return(

 ////Wrapping using Provider
    <UserContext.Provider value={{user,setUser}}>   
    
    {children}
    </UserContext.Provider>

)

}

export default UserContextProvider
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

///we can directly call JSX(We can use this instead of React.createElement() but with some complications)
//import {jsx as _jsx} from 'react/jsx-runtime.js'

import App from './App.jsx'


//// creating our own function instead of using from App.jsx
function MyApp(){

 return(
    <div>
        <h1>Custom App!</h1>
    </div>
 )

}


//// as it is said whatever is there in MyApp() gets converted to this react element, here we are manually converting to element 

/* const reactElement = {

    type:'a',
    props: {
       href:'https://google.com',
       target:'_blank'
    },
    children: 'Click me to visit google' 


}

*/

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser='chai aur react'


///this is similar to above 'reactElement' but it is of React not custom one
/// this method is injected by transpiler(bable)
const reactElement=React.createElement(

   'a',                                          ///tag
   {href:'https://google.com', target:'_blank'}, ///object(attributes)
   'click me to visit google   ' ,                   /// text

   ///here we write only evaluated expression (objects)
   /// after tree is completed Variable injections(evaluated expressions) come
   anotherUser
     
)

createRoot(document.getElementById('root')).render(
    //<App/>
  
   //<MyApp />  //  (Works)

    //// or we can also implement it normally instead of JSX syntax (But it is not recommended)
    //// MyApp()

   // reactElement //// It doen't work bcz we cant render Object
                   ////  It is custom react element but there is no custom render function like in customreact.js file
                   //// It is not working might be bcz of syntax, keys, values...

  // anotherElement     ////this gets converted to tree 
  
  reactElement
  
)

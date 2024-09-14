import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

/* 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //the above part is enough but if we children we can add
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />, ///element you want to render
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

*/

//new syntax (alternative to above one)(mostly preffered)
const router=createBrowserRouter(

createRoutesFromElements(

    <Route path="/" element={<Layout/>}>

      {/* <Route path="" element={<Home/>}/> */}
     < Route index element={<Home />} /> {/* Default route for "/" */}
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>           
      {/* /// we get access of 'userid' in User.jsx component  */}
      <Route
       loader={


         githubInfoLoader 

        // (OR) we can directly call here
        // async ()=>{
        //   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        //   return response.json()
          
       }

              //loader fetches data (before than useEffect) and keeps it in cache memory
       path="github"
       element={<Github/>}
        />

    </Route>

)

)






createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* we should not render App bcz we used React Router we should go to Router */}
    {/* <App /> */}

    {/* It works only after taking props(router) */}
    <RouterProvider router={router} />
  </StrictMode>
);

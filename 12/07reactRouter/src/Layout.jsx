//// this file can aslo be named as "Root.jsx"
//// the work in this file can also be done in App.jsx but for optimization we are preffering this file

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    
    <>
    
    <Header/>
    {/* outlet : it enables us to make changes in between header and footer keeping them constant
    if it was inserted below footer then everything below footer can be changed and header and footer cant be changed
    */}
    <Outlet/>     
    <Footer/>

    </>


  )
}

export default Layout


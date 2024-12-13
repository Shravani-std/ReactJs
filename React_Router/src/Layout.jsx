import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
        <Header/>

    {/*Outlet:  Header and footer will change but it does not affects inside body */}
         <Outlet/> 
        <Footer/>
        </>
    )
}

export default Layout



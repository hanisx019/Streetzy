import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import { Outlet } from 'react-router-dom' 


const UserLayout = () => {
  return (
    <>
        {/*Header : its permament for all user layouts*/}
        <Header/>  

        {/*Main Content : Outlet contain multiples nested routes which chnages dynamically based n the current url */}
        <Outlet/>

        {/*Footer : its permanent for all user layouts*/}
        <Footer/>
    </>
  )
}

export default UserLayout
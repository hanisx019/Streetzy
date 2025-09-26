import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Main from '../Main/Main'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {
  return (
    <>
        {/*Header*/}
        <Header/>

        {/*Main Content*/}
        <Main>
          <Outlet/>
        </Main>

        {/*Footer*/}
        <Footer/>
    </>
  )
}

export default UserLayout
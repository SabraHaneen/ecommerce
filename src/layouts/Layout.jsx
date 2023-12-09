import React from 'react'
import Navbar from '../componentes/web/navbar/Navbar'
import Footer from '../componentes/web/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
   <>
   <Navbar />
   <Outlet/>
   <Footer/>
   </>
  )
}

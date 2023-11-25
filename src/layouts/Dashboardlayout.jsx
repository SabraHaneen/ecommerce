import React from 'react'
import Footer from '../componentes/dashboard/footer/Footer'
import Navbar from '../componentes/web/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Dashboardlayout() {
  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>

  </>
  )
}

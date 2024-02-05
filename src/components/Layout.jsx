import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  const [showNavMenu, setShowNavMenu] = useState(false)
  return (
    <>
      <Navbar showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

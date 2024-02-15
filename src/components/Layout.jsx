import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useDarkMode } from "../hooks/useDarkMode"

const Layout = () => {
  const [showNavMenu, setShowNavMenu] = useState(false)
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  // useEffect(() => {

  // }, [])
  return (
    <>
      <Navbar
        showNavMenu={showNavMenu}
        setShowNavMenu={setShowNavMenu}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

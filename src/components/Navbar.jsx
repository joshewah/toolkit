import React, { useState } from "react"
import Logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa6"
import { FaTimes, FaArrowRight } from "react-icons/fa"

const Navbar = ({ showNavMenu, setShowNavMenu }) => {
  const handleNavClick = () => {
    if (!showNavMenu) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden"
      }
    } else {
      document.body.style.overflow = "unset"
    }
    setShowNavMenu((prev) => !prev)
  }

  return (
    <>
      <header className="dark:bg-dark-theme--bg dark:text-dark-theme--text sticky top-0 z-50 bg-white py-4 shadow-lg">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="Logo of a toolbox" className="w-8" />
            <span className="text-lg font-extrabold tracking-wide">
              TOOLkit
            </span>
          </Link>
          <button className="text-3xl sm:hidden" onClick={handleNavClick}>
            {showNavMenu ? <FaTimes /> : <FaBars />}
          </button>
          <nav className="hidden items-center gap-4 text-sm font-medium sm:flex ">
            <NavLink to="tools">Tools</NavLink>
            <NavLink to="support">Support</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink
              to="suggest"
              className="rounded-md bg-primary px-6 py-2 tracking-wide text-white transition-all hover:bg-blue-700"
            >
              Suggest
            </NavLink>
          </nav>
        </div>
        {showNavMenu && (
          <nav className="dark:bg-dark-theme--bg container flex h-screen flex-col gap-6 bg-background pt-12 text-lg font-semibold">
            <Link
              className={
                "dark:bg-dark-theme--card-bg flex items-center justify-between rounded-full bg-gray-200 px-4 py-2"
              }
              onClick={handleNavClick}
              to="tools"
            >
              Tools
              <FaArrowRight className="text-lg" />
            </Link>
            <Link
              className={
                "dark:bg-dark-theme--card-bg flex items-center justify-between rounded-full bg-gray-200 px-4 py-2"
              }
              onClick={handleNavClick}
              to="support"
            >
              Support
              <FaArrowRight className="text-lg" />
            </Link>
            <Link
              className={
                "dark:bg-dark-theme--card-bg flex items-center justify-between rounded-full bg-gray-200 px-4 py-2"
              }
              onClick={handleNavClick}
              to="about"
            >
              About
              <FaArrowRight className="text-lg" />
            </Link>
            <Link
              className={
                "dark:bg-dark-theme--card-bg flex items-center justify-between rounded-full bg-gray-200 px-4 py-2"
              }
              onClick={handleNavClick}
              to="suggest"
            >
              Suggest
              <FaArrowRight className="text-lg" />
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}

export default Navbar

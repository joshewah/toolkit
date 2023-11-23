import React from "react"
import Logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa6"

const Navbar = () => {
  // TODO: import a custom hook to determine the width of the page in accordance with the the browsers inner width to conditionally render the navigation
  return (
    <>
      <header className="bg-background sticky top-0 z-50 py-4 shadow-lg">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="Logo of a toolbox" className="w-8" />
            <span className="text-lg font-extrabold tracking-wide">
              TOOLkit
            </span>
          </Link>
          {/* TODO: fix the mobile nav */}
          <FaBars className="text-3xl md:hidden" />
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex ">
            <NavLink to="tools">Tools</NavLink>
            <NavLink to="support">Support</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink
              to="suggest"
              className="bg-primary rounded-md px-6 py-2 tracking-wide text-white transition-all hover:bg-blue-700"
            >
              Suggest
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar

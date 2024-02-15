import React from "react"
import { Link } from "react-router-dom"
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <footer className="bg-background-active py-6 dark:bg-dark--background-alternate dark:text-dark--text">
        <div className="container flex flex-col">
          <nav className="mb-6 flex justify-between">
            <ul className="flex flex-col gap-2 text-lg font-semibold md:flex-row md:items-center">
              <li>
                <Link to="tools" className="mr-0 md:mr-6">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="support" className="mr-0 md:mr-6">
                  Support
                </Link>
              </li>
              <li>
                <Link to="about" className="mr-0 md:mr-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="privacy" className="mr-0 md:mr-6">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="suggest" className="mr-0 md:mr-6">
                  Suggest
                </Link>
              </li>
            </ul>
            <ul className="flex gap-2">
              <li>
                <a href="https://www.linkedin.com/in/josh-taylor-163066252/">
                  <FaLinkedin className="text-5xl" />
                </a>
              </li>
              <li>
                <a href="https://github.com/joshewah">
                  <FaSquareGithub className="text-5xl" />
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm dark:text-dark--text">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer

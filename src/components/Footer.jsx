import React from "react"
import { Link } from "react-router-dom"
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <section className="bg-secondary">
        <div className="container py-8 text-white">
          <h4 className="mb-6 text-4xl font-semibold">TOOLkit</h4>
          <p className="mb-4">
            This project is an aim to collate a collection of curated tools for
            people who create websites.
          </p>
          <p>
            Do you ever get that feeling when you stumble across a new tool
            whilst scrolling the social media or find a tutorial and think oh
            thats cool I could use that or when someone mentions something that
            they use on a regular basis to improve their workflow and you just
            think, why did I not know about this sooner? Yes? Well you've found
            a tool to find tools!
          </p>
        </div>
      </section>
      <footer className="bg-background-alt py-6">
        <div className="container flex flex-col text-white">
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
          <p className="text-sm text-gray-400">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer

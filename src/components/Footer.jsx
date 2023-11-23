import React from "react"
import { Link } from "react-router-dom"
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <section className="bg-secondary">
        <div className="container max-w-prose py-8 text-white">
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
      <footer className="bg-background-alt">
        <div className="container flex items-center justify-between py-6 text-white">
          <p>Copyright {new Date().getFullYear()}</p>
          <nav className="flex items-center gap-2">
            <Link to="tools">Tools</Link>
            <Link to="support">Support</Link>
            <Link to="about">About</Link>
            <Link to="privacy">Privacy</Link>
            <a href="https://github.com/joshewah">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/josh-taylor-163066252/">
              <FaSquareGithub className="text-3xl" />
            </a>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer

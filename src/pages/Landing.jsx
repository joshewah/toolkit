import { useEffect } from "react"
import AnimatedTags from "../components/LandingPage/AnimatedTags"
import Featured from "../components/LandingPage/Featured"
import Recent from "../components/LandingPage/Recent"
import Categories from "../components/LandingPage/Categories"
import useScrollToTop from "../hooks/useScrollToTop"
import { Link } from "react-router-dom"
import { FaCirclePlus, FaCircleArrowRight } from "react-icons/fa6"
import "../components/LandingPage/StarEffect.css"
import useSparkle from "../hooks/useSparkle"
import FooterExtended from "../components/FooterExtended"

const Landing = ({ tools, tags }) => {
  const scrollToTop = useScrollToTop()
  useEffect(() => {
    scrollToTop()
    useSparkle()
  }, [])

  const rows = 3
  return (
    <main className="flex flex-1 flex-col bg-background text-text transition-colors dark:bg-dark--background  dark:text-dark--text">
      <header className="container flex flex-col items-center py-16 md:pb-16 md:pt-32">
        <section className="mb-20 flex flex-col items-center">
          <h1 className="mb-10 bg-gradient-to-r from-primary from-30% to-alternate bg-clip-text text-center text-5xl font-bold tracking-normal text-transparent sm:text-6xl md:text-7xl md:leading-tight lg:text-8xl">
            Resources for your web{" "}
            <span className="magic">
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-text bg-gradient-to-r from-primary from-30% to-alternate bg-clip-text text-center font-bold tracking-normal text-transparent">
                TOOLkit
              </span>
            </span>
          </h1>
          <p className="mb-20 max-w-prose text-center text-xl leading-8">
            Everyone craftsman needs a tool belt, so here's one for the web
            developers & designers who want to de-clutter there bookmarks and
            mind.
          </p>
          <div className="flex gap-4">
            <Link
              to={"tools"}
              className="flex w-full items-center justify-center gap-x-2 rounded-md bg-primary p-2 font-medium tracking-wide text-white dark:bg-gradient-to-r dark:from-primary dark:from-55% sm:w-[210px] sm:gap-x-4 sm:px-6 sm:py-2 sm:text-lg sm:transition-all sm:hover:bg-blue-700"
            >
              Browse Tools
              <FaCircleArrowRight />
            </Link>

            <Link
              to={"suggest"}
              className=" dark:ring-none dark:from-dark-theme--bg-alt dark:sm:hover:bg-dark-theme--bg-alt flex w-full items-center justify-center gap-x-2 rounded-md bg-gradient-to-r from-55% p-2 font-medium tracking-wide text-primary ring-[3px] ring-inset ring-primary hover:bg-primary hover:text-white   dark:text-white dark:ring-0 sm:w-[210px] sm:gap-x-4 sm:px-6 sm:py-2 sm:text-lg  sm:transition-all  dark:sm:hover:text-white "
            >
              Suggest
              <FaCirclePlus />
            </Link>
          </div>
        </section>
      </header>
      <section className="w-full py-8">
        <AnimatedTags tags={tags} rows={rows} />
      </section>
      <Featured tags={tags} tools={tools} />
      <Recent tags={tags} tools={tools} />
      <Categories tags={tags} />
      <FooterExtended />
    </main>
  )
}

export default Landing

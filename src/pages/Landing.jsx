import { useEffect } from "react"
import AnimatedTags from "../components/LandingPage/AnimatedTags"
import Featured from "../components/LandingPage/Featured"
import Recent from "../components/LandingPage/Recent"
import Categories from "../components/LandingPage/Categories"
import useScrollToTop from "../hooks/useScrollToTop"
import { Link } from "react-router-dom"
import { FaCirclePlus, FaCircleArrowRight } from "react-icons/fa6"

const Landing = ({ tools, tags }) => {
  const scrollToTop = useScrollToTop()
  useEffect(() => {
    scrollToTop()
  }, [])

  const rows = 6
  return (
    <main className=" flex flex-1 flex-col">
      <header className="container flex flex-col items-center py-16 md:mb-24 md:py-20 lg:flex-row">
        <section className="mb-12 lg:mb-0">
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Resources for your web toolkit
          </h1>
          <p className="mb-6">
            Every craftsman needs a tool belt, so here's one for the web
            developers & designers.
          </p>
          <div className="flex gap-4">
            <Link
              to={"tools"}
              className="flex w-full items-center justify-center gap-x-2 rounded-md bg-primary p-2 font-medium tracking-wide text-white sm:w-[210px] sm:gap-x-4 sm:px-6 sm:py-2 sm:text-lg sm:transition-all sm:hover:bg-blue-700"
            >
              Browse Tools
              <FaCircleArrowRight />
            </Link>

            <Link
              to={"suggest"}
              className="dark:bg-dark-theme--bg-alt dark:ring-none flex w-full items-center justify-center gap-x-2 rounded-md p-2 font-medium tracking-wide text-primary ring-[3px] ring-inset ring-primary dark:text-white dark:ring-0 dark:hover:ring-primary sm:w-[210px] sm:gap-x-4 sm:px-6 sm:py-2 sm:text-lg sm:transition-all sm:hover:bg-primary  sm:hover:text-white "
            >
              Suggest
              <FaCirclePlus />
            </Link>
          </div>
        </section>
        <section className="w-full md:px-12 lg:w-1/2">
          <AnimatedTags tags={tags} rows={rows} />
        </section>
      </header>
      <Featured tags={tags} tools={tools} />
      <Recent tags={tags} tools={tools} />
      <Categories tags={tags} />
    </main>
  )
}

export default Landing

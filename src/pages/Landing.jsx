import { useEffect } from "react"
import AnimatedTags from "../components/LandingPage/AnimatedTags"
import Featured from "../components/LandingPage/Featured"
import Recent from "../components/LandingPage/Recent"
import Categories from "../components/LandingPage/Categories"
import useScrollToTop from "../hooks/useScrollToTop"

const Landing = ({ tools, tags }) => {
  const scrollToTop = useScrollToTop()
  useEffect(() => {
    scrollToTop()
  }, [])

  const rows = 6
  return (
    <main className="flex flex-1 flex-col">
      <header className="container flex flex-col items-center pb-16 pt-8 md:mb-24 md:py-20 lg:flex-row">
        <section className="mb-12 lg:mb-0">
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Resources for your web toolkit
          </h1>
          <p>
            Every craftsman needs a tool belt, so here's one for the web
            developers & designers.
          </p>
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

import { useEffect } from "react"
import Featured from "../components/Featured"
import AnimatedTags from "../components/AnimatedTags"
import Recent from "../components/Recent"
import useScrollToTop from "../hooks/useScrollToTop"

const Landing = ({ tags }) => {
  const scrollToTop = useScrollToTop()
  useEffect(() => {
    scrollToTop()
  }, [])
  const rows = 6
  return (
    <main className="flex flex-1 flex-col">
      <header className="container flex flex-col items-center pb-16 pt-8 md:mb-24 md:py-20 lg:flex-row">
        <section className="mb-12 lg:mb-0">
          <h1 className="mb-6 text-6xl font-semibold leading-tight tracking-tight">
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
      <Featured tags={tags} />
      <Recent tags={tags} />
    </main>
  )
}

export default Landing

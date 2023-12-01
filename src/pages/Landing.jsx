import { useEffect } from "react"
import Featured from "../components/Featured"
import AnimatedTags from "../components/AnimatedTags"
import Recent from "../components/Recent"
import useScrollToTop from "../hooks/useScrollToTop"

const Landing = ({ tools, tags }) => {
  const scrollToTop = useScrollToTop()
  useEffect(() => {
    scrollToTop()
  }, [])

  const recentTools = tools.filter((tool) => {
    const dateAdded = new Date(tool.dateAdded.toDate().getTime())
    const todayDate = new Date()

    const diffTime = Math.abs(dateAdded - todayDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays < 7
  })

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
      <Recent tags={tags} recentTools={recentTools} />
    </main>
  )
}

export default Landing

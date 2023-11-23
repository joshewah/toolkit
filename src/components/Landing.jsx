import Featured from "./Featured"
import AnimatedTags from "./AnimatedTags"

const Landing = () => {
  // TODO: custom hook to determine rows based on width
  const rows = 6
  return (
    <main className="flex flex-1 flex-col">
      <header className="container flex flex-col items-center pb-16 pt-8 md:mb-24 md:py-20 lg:flex-row">
        <section className="mb-12 lg:mb-0">
          <h1 className="mb-6 text-6xl font-semibold leading-tight tracking-tight">
            Resources for your web toolkit
          </h1>
          <p>
            Everyone craftsman needs a tool belt, so here's one for the web
            developers & designers.
          </p>
        </section>
        <section className="w-full px-12 lg:w-1/2">
          <AnimatedTags rows={rows} />
        </section>
      </header>
      <Featured />
    </main>
  )
}

export default Landing

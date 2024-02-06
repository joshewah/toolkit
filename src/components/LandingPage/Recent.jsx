import Card from "../Card"
import { FaClock } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Recent = ({ tools, tags }) => {
  const recentTools = tools.sort((a, b) => b.dateAdded - a.dateAdded)

  // const recentTools = tools.map((tool) => {
  //   const dateAdded = new Date(tool.dateAdded.toDate().getTime())
  //   const todayDate = new Date()

  //   const diffTime = Math.abs(dateAdded - todayDate)
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  //   return diffDays
  // })

  const recentElements = recentTools.slice(0, 3).map((tool) => (
    <Link to={`tools/${tool.id}`} key={tool.id}>
      <Card tool={tool} tags={tags} isLandingPage={true} />
    </Link>
  ))

  return (
    <section className=" pt-12">
      <div className="container">
        <div className=" flex justify-between">
          <h2 className="tracking flex items-center gap-2 text-2xl font-semibold md:text-4xl ">
            Newest Additions <FaClock />
          </h2>
          <Link
            to={`tools?sort=newest`}
            state={{ query: "featured" }}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>
        <div className="scroll--hidden flex flex-1 flex-col items-center gap-12 overflow-visible overflow-x-auto py-12 sm:flex-row">
          {recentElements}
        </div>
      </div>
    </section>
  )
}

export default Recent

import Card from "./Card"
import { FaClock } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Recent = ({ recentTools, tags }) => {
  const recentElements = recentTools.map((tool) => (
    <Card tool={tool} key={tool.id} tags={tags} />
  ))

  return (
    <section className=" py-12">
      <div className="container">
        <div className=" flex justify-between">
          <h2 className="tracking flex items-center gap-2 text-2xl font-semibold md:text-4xl ">
            Most Recent <FaClock />
          </h2>
          <Link
            to={`tools?category=recent`}
            state={{ query: "featured" }}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>
        <div className="scroll--hidden flex flex-1 gap-12 overflow-visible overflow-x-auto  py-12">
          {recentElements}
        </div>
      </div>
    </section>
  )
}

export default Recent

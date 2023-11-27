import Card from "./Card"
import { FaClock } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Recent = ({ data, tags }) => {
  // TODO: This should either filter by the date property on the data
  const featuredData = data.filter((tool) => {
    return tool.category.includes("featured")
  })

  const featuredElements = featuredData.map((tool) => (
    <Card tool={tool} key={tool.id} tags={tags} />
  ))

  return (
    <section className=" py-12">
      <div className="container">
        <div className=" mb-12 flex justify-between">
          <h2 className="tracking flex gap-2 text-4xl font-semibold ">
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
        <div className="flex flex-wrap justify-around gap-8">
          {featuredElements}
        </div>
      </div>
    </section>
  )
}

export default Recent

import { Link } from "react-router-dom"
import { FaGrip } from "react-icons/fa6"

const Categories = ({ tags }) => {
  const categoryElements = tags.map((tag) => {
    return (
      <Link
        to={`tools?category=${tag.category.toLowerCase()}`}
        className={`flex gap-4 rounded-full text-center text-lg font-medium transition-all hover:opacity-70`}
        style={{
          backgroundColor: tag.backgroundColor,
          color: tag.color,
        }}
      >
        <span
          className="block max-w-fit rounded-full p-4 text-2xl"
          style={{ backgroundColor: tag.backgroundColor, color: tag.color }}
        >
          {tag.icon}
        </span>
        <p className={`flex items-center `}>{tag.category}</p>
      </Link>
    )
  })
  return (
    <section className=" py-12">
      <div className="container">
        <h2 className="tracking flex items-center gap-2 text-2xl font-semibold md:text-4xl ">
          Categories <FaGrip />
        </h2>
        <div className={`grid gap-4 py-12 md:grid-cols-2 lg:grid-cols-3`}>
          {categoryElements}
        </div>
      </div>
    </section>
  )
}

export default Categories

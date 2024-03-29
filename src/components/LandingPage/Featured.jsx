import React from "react"
import { BsStars } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Card from "../Card"

const Featured = ({ tools, tags }) => {
  const featuredTools = tools.filter((tool) => {
    return tool.category.includes("featured")
  })

  const featuredElements = featuredTools.map((tool) => (
    <Link to={`tools/${tool.id}`} key={tool.id}>
      <Card tool={tool} tags={tags} isLandingPage={true} darkMode={true} />
    </Link>
  ))

  return (
    <section className="bg-gradient-to-b from-transparent from-10% via-primary to-transparent to-90% py-12 dark:bg-gradient-to-b dark:from-transparent dark:via-primary dark:to-transparent">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="tracking flex items-center gap-2 text-2xl font-semibold md:text-4xl">
            Featured <BsStars className="text-[#fcc419]" />
          </h2>
          <Link
            to={`tools?category=featured`}
            className="flex items-center gap-2  hover:underline hover:underline-offset-4"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>
        <div className="scroll--hidden flex flex-1 flex-col items-center gap-12 overflow-visible overflow-x-auto py-12 sm:flex-row">
          {featuredElements}
        </div>
      </div>
    </section>
  )
}

export default Featured

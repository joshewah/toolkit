import React from "react"
import { BsStars } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Featured = () => {
  return (
    <section className="bg-primary min-h-[50vh] py-10">
      <div className="container flex justify-between">
        <h2 className="tracking flex gap-2 text-4xl font-semibold text-white">
          Featured <BsStars className="text-yellow-500" />
        </h2>
        <Link
          to={"tools"}
          state={{ query: "featured" }}
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
        >
          View All
          <FaArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default Featured

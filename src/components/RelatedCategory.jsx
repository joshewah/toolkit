import React from "react"
import { Link } from "react-router-dom"

const RelatedCategory = ({ category }) => {
  return (
    <Link
      key={category}
      to={`..?category=${category}`}
      className=" pr-4 text-lg font-medium text-text underline-offset-2 hover:underline dark:text-dark--text-alternate"
    >
      {`#${category[0].toUpperCase()}${category.slice(1)}`}
    </Link>
  )
}

export default RelatedCategory

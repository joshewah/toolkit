import React from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

const RelatedTools = ({ relatedTools, category, tags }) => {
  const relatedElements = relatedTools.map((relatedTool) => (
    <Link to={`../${relatedTool.id}`} key={relatedTool.id}>
      <Card tool={relatedTool} tags={tags} />
    </Link>
  ))

  const relatedElementsWrapped = (
    <div className="flex flex-1 flex-col items-center gap-12 overflow-visible overflow-x-auto py-12 sm:flex-row">
      {...relatedElements}
    </div>
  )
  return (
    <div>
      <h4 className="text-3xl font-semibold sm:mb-4 lg:text-4xl ">
        More of {category}
      </h4>
      {relatedElementsWrapped}
    </div>
  )
}

export default RelatedTools

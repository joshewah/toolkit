import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { FaGift } from "react-icons/fa6"
import CostTag from "./CostTag"

const Card = ({ tool, tags, isLandingPage, darkMode }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  // TODO make it so this applies when only the category tag is hovered
  const handleTagOutlineStyle = (category) => {
    const [tagStyles] = tags.filter((tag) => {
      return tag.category.toLowerCase() === category
    })

    const styles = {
      border: `2px solid ${tagStyles.backgroundColor}`,
      // color: `${tagStyles.backgroundColor}`,
      // backgroundColor: `${tagStyles.color}`,
      // backgroundColor: `${tagStyles.backgroundColor}`,
    }
    return styles
  }

  const addSearchParams = (e, key, value) => {
    e.preventDefault()
    e.stopPropagation()
    const newParams = new URLSearchParams(searchParams)
    newParams.set(key, value)
    setSearchParams(newParams)
  }

  return (
    <div
      className={`flex h-[500px] min-w-[350px] max-w-[350px] flex-1 flex-col overflow-hidden rounded-lg bg-background-alternate dark:bg-dark--background-alternate md:transition-all md:hover:-translate-y-2 md:hover:bg-background-active md:hover:shadow-lg md:hover:dark:bg-dark--background-active`}
      key={tool.title}
    >
      <img
        src={tool.previewImage}
        alt={`Preview image of the site ${tool.title}`}
        className="aspect-video w-full rounded-xl p-2 drop-shadow-2xl"
      />

      <div className="flex flex-grow flex-col bg-inherit px-4 py-6 text-text dark:text-dark--text">
        <div className="flex-grow">
          <p className="mb-4 text-2xl font-semibold text-text dark:text-dark--text-alternate">
            {tool.title}
          </p>
          {tool.category.length ? (
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium">
              {tool.category.map((category) => (
                <button
                  key={category}
                  onClick={(e) => addSearchParams(e, "category", category)}
                  className="rounded-full px-2 py-[0.5px]"
                  style={handleTagOutlineStyle(category)}
                >
                  {category[0].toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          ) : null}
          <p className={`mb-8 text-sm leading-normal`}>
            {tool.description.length > 120
              ? `${tool.description.slice(0, 120)}...`
              : tool.description}
          </p>
        </div>
        <div className="flex-shrink">
          <CostTag id={tool.id} cost={tool.cost} />
        </div>
      </div>
    </div>
  )
}

export default Card

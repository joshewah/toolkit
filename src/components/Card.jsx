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
      color: `${tagStyles.color}`,
      backgroundColor: `${tagStyles.backgroundColor}`,
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
      className={`${
        darkMode
          ? "dark:text-text dark:border-none dark:bg-white"
          : "dark:bg-dark-theme--card-bg dark:border-dark-theme--bg-alt dark:from-dark-theme--bg-alt dark:from-10%"
      }   flex h-[500px] min-w-[350px] max-w-[350px] flex-1 flex-col overflow-hidden rounded-lg border-[3px] bg-gradient-to-br from-gray-200 from-10% to-white to-30% shadow-lg dark:bg-gradient-to-br  md:transition-all md:hover:-translate-y-2 md:hover:scale-[1.01] md:hover:shadow-2xl`}
      key={tool.title}
    >
      <img
        src={tool.previewImage}
        alt={`Preview image of the site ${tool.title}`}
        className="dark:border-dark-theme--bg-alt aspect-video w-full rounded-xl border-white p-2 drop-shadow-2xl"
      />

      <div className="flex flex-grow flex-col px-4 py-6">
        <div className="flex-grow">
          <p className="mb-4 text-2xl font-semibold">{tool.title}</p>
          {tool.category.length ? (
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium">
              {tool.category.map((category) => (
                <button
                  key={category}
                  onClick={(e) => addSearchParams(e, "category", category)}
                  className="rounded-full px-3 py-1"
                  style={handleTagOutlineStyle(category)}
                >
                  {category[0].toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          ) : null}
          <p
            className={`mb-8 text-sm leading-normal text-gray-600 ${
              darkMode ? "dark:text-text" : "dark:text-gray-200"
            } `}
          >
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

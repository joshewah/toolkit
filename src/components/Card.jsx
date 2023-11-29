import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import previewImage from "../assets/preview-template.png"

const Card = ({ tool, tags }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  // TODO make it so this applies when only the category tag is hovered
  const handleTagOutlineStyle = (category) => {
    const [tagStyles] = tags.filter((tag) => {
      return tag.category.toLowerCase() === category
    })

    const styles = {
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: `${tagStyles.backgroundColor}`,
    }
    return styles
  }

  handleTagOutlineStyle("design")

  const addSearchParams = (e, key, value) => {
    e.preventDefault()
    e.stopPropagation()
    const newParams = new URLSearchParams(searchParams)
    newParams.set(key, value)
    setSearchParams(newParams)
  }

  return (
    <Link
      to={`${tool.id}`}
      key={tool.title}
      className="block max-w-[350px] overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl"
    >
      <div>
        <img
          src={previewImage}
          alt={`Preview image of the site ${tool.title}`}
          className="aspect-video w-full rounded-xl border-4 border-white"
        />
        <div className="px-4 py-6">
          <p className="mb-4 text-2xl font-semibold">{tool.title}</p>
          {tool.category.length ? (
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium">
              {tool.category.map((category) => (
                <button
                  key={category}
                  onClick={(e) => addSearchParams(e, "category", category)}
                  className="rounded-md px-2"
                  style={handleTagOutlineStyle(category)}
                >
                  {category[0].toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          ) : null}
          <p className="mb-8 text-sm leading-normal text-gray-600">
            {tool.description.length > 40
              ? `${tool.description.slice(0, 160)}...`
              : tool.description}
          </p>
          <div className="flex justify-between">
            <button
              key={tool.id}
              className="rounded-2 rounded-lg border-[3px] border-green-400 bg-green-200 px-2 text-green-900"
              onClick={(e) => addSearchParams(e, "cost", tool.cost)}
            >
              {tool.cost}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
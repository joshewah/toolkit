import { FaGrip } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useRef, useEffect } from "react"

const ToolsNav = ({
  search,
  setSearch,
  handleCategoryMenu,
  isCategoryMenuOpen,
  tags,
}) => {
  const handleFormChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const categoryElements = tags.map((tag) => {
    return (
      <Link
        to={`?category=${tag.category.toLowerCase()}`}
        className={`group flex items-center gap-4 rounded-full text-xl font-medium brightness-[.95] transition-all  hover:saturate-[3] `}
        style={{ backgroundColor: tag.color }}
        onClick={handleCategoryMenu}
      >
        <span
          style={{ backgroundColor: tag.color, color: tag.backgroundColor }}
          className="block max-w-fit rounded-full p-4 text-2xl"
        >
          {tag.icon}
        </span>
        <p className={`flex h-full flex-1`}>{tag.category}</p>
      </Link>
    )
  })

  return (
    <nav className="relative flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap gap-4">
        <button
          className="flex min-h-[40px] min-w-[120px] items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium text-text-dark"
          onClick={handleCategoryMenu}
        >
          Categories
          <FaGrip />
        </button>
        <div
          className={`absolute left-0 top-14 z-40 flex max-h-[400px] w-full flex-col flex-wrap gap-4 rounded-lg bg-white p-10 shadow-2xl shadow-gray-600  ${
            isCategoryMenuOpen ? "block" : "hidden"
          } `}
        >
          {categoryElements}
        </div>
        <select className="min-h-[40px] min-w-[120px] rounded-md border-2 border-black px-3 py-1 text-sm font-medium text-text-dark">
          <option selected value="here">
            Sort
          </option>
          <option value="Option 1">Option 1</option>
        </select>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleFormChange}
          className="min-h-[40px] min-w-[240px] rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium text-text-dark"
        />
      </form>
    </nav>
  )
}

export default ToolsNav

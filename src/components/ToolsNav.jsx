import { FaGrip } from "react-icons/fa6"
import { Link } from "react-router-dom"

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
        style={{ backgroundColor: tag.backgroundColor, color: tag.color }}
        className={`flex items-center gap-2 rounded-full px-4 py-1 font-medium`}
        onClick={handleCategoryMenu}
      >
        {tag.icon}
        {tag.category}
      </Link>
    )
  })

  console.log(tags)

  return (
    <nav className="flex flex-wrap items-center justify-between">
      <div className="relative flex flex-wrap gap-4">
        <button
          className="flex min-h-[40px] min-w-[120px] items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium text-text-dark"
          onClick={handleCategoryMenu}
        >
          Categories
          <FaGrip />
        </button>
        <div
          className={`absolute left-0 top-14 z-40 flex w-[30vw] flex-wrap gap-4 rounded-lg bg-background p-4 shadow-2xl shadow-gray-700  ${
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

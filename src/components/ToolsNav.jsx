import { FaGrip } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
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

  // ? These are all of the category links on the category menu reduced to an array of Links
  const categoryElements = tags.map((tag) => {
    return (
      <Link
        to={`?category=${tag.category.toLowerCase()}`}
        className={`flex gap-4 rounded-full text-center text-lg font-medium text-black brightness-[.95] transition-all hover:outline hover:outline-2 hover:saturate-200`}
        style={{
          backgroundColor: tag.color,
          outlineColor: tag.backgroundColor,
        }}
        onClick={handleCategoryMenu}
      >
        <span
          className="block max-w-fit rounded-full p-4 text-2xl"
          style={{ backgroundColor: tag.color, color: tag.backgroundColor }}
        >
          {tag.icon}
        </span>
        <p className={`flex items-center `}>{tag.category}</p>
      </Link>
    )
  })

  return (
    <nav className="items-between dark:text-text relative flex flex-col-reverse justify-between gap-4 text-text-dark sm:flex-row">
      <div className=" flex flex-wrap justify-between gap-4 ">
        <button
          className=" flex min-h-[40px] flex-grow basis-1/3 items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium sm:min-w-[120px]"
          onClick={handleCategoryMenu}
        >
          Categories
          <FaGrip />
        </button>
        <div
          className={`dark:bg-dark-theme--card-bg dark:text-dark-theme--text absolute top-16 z-50 flex h-fit w-full flex-col rounded-lg bg-white px-10 py-8 shadow-2xl shadow-gray-600 ${
            isCategoryMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="mb-10 flex items-center justify-between text-2xl">
            <p className=" font-semibold">All Categories</p>
            <button onClick={handleCategoryMenu}>
              <FaTimes />
            </button>
          </div>
          <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3`}>
            {categoryElements}
          </div>
        </div>
        <select className="min-h-[40px] flex-grow basis-1/3 rounded-md border-2 border-black px-3 py-1 text-sm font-medium sm:min-w-[120px]">
          <option selected value="default">
            Sort
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="category">Category</option>
        </select>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleFormChange}
          className="min-h-[40px] w-full rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium text-text-dark sm:max-w-[240px]"
        />
      </form>
    </nav>
  )
}

export default ToolsNav

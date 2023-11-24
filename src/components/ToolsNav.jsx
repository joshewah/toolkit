import { useState } from "react"
import { FaStar } from "react-icons/fa6"

const ToolsNav = () => {
  const [search, setSearch] = useState("")
  const handleFormChange = (e) => {
    e.preventDefault()

    setSearch(e.target.value)
  }
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap gap-4">
        <select className="text-text-dark min-h-[40px] min-w-[120px] rounded-md border-2 border-black px-3 py-1 text-sm font-medium">
          <option disabled selected value="here">
            Category
          </option>
          <option value="Option 1">Option 1</option>
        </select>
        <select className="text-text-dark min-h-[40px] min-w-[120px] rounded-md border-2 border-black px-3 py-1 text-sm font-medium">
          <option disabled selected value="here">
            Sort
          </option>
          <option value="Option 1">Option 1</option>
        </select>
        <button className=" text-text-dark flex min-h-[40px] min-w-[120px] items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium">
          <FaStar />
          My faves
        </button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleFormChange}
          className="text-text-dark min-h-[40px] min-w-[240px] rounded-md border-2 border-black bg-white px-3 py-1 text-sm font-medium"
        />
      </form>
    </nav>
  )
}

export default ToolsNav

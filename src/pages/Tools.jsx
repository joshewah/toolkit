import { useState } from "react"
import ToolsNav from "../components/ToolsNav"
import { Link, useSearchParams } from "react-router-dom"
import Card from "../components/Card"

const Tools = ({ data, tags }) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const queryCategory = searchParams.get("category")
  const [headerDetails] = tags.filter(
    (tag) => tag.category.toLowerCase() === queryCategory,
  )

  const handleCategoryMenu = () => {
    setIsCategoryMenuOpen((prev) => !prev)
  }

  const styles = queryCategory
    ? {
        backgroundColor: headerDetails.backgroundColor,
        color: headerDetails.color,
      }
    : null

  // TODO: refactor
  const displayedTools =
    queryCategory && search
      ? data.filter(
          (tool) =>
            tool.category.includes(queryCategory) &&
            tool.title.toLowerCase().includes(search.toLowerCase()),
        )
      : search
        ? data.filter((tool) =>
            tool.title.toLowerCase().includes(search.toLowerCase()),
          )
        : queryCategory
          ? data.filter((tool) => tool.category.includes(queryCategory))
          : data

  const toolElements = displayedTools.map((tool) => (
    <Card tool={tool} key={tool.id} tags={tags} />
  ))

  return (
    <>
      <header style={styles} className="mb-12">
        <div className="container py-12 ">
          {queryCategory ? (
            <div className={`mb-8 flex items-center gap-4 text-4xl font-bold`}>
              {headerDetails.icon}
              <h2>{headerDetails.category}</h2>
            </div>
          ) : (
            <div className={`mb-8 flex items-center gap-4 text-4xl font-bold`}>
              All Tools
            </div>
          )}
          <ToolsNav
            search={search}
            setSearch={setSearch}
            handleCategoryMenu={handleCategoryMenu}
            isCategoryMenuOpen={isCategoryMenuOpen}
            tags={tags}
          />
          {!toolElements.length ? (
            <h4 className="mt-12 text-xl font-medium">No tools found.</h4>
          ) : null}
        </div>
      </header>
      <main className={`mb-20 mt-8 flex flex-1`}>
        {toolElements.length ? (
          <section className="container flex flex-wrap justify-around gap-8">
            {toolElements}
          </section>
        ) : null}
      </main>
    </>
  )
}

export default Tools

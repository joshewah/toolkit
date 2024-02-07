import { useState, useEffect } from "react"
import ToolsNav from "../components/ToolsNav"
import { Link, useSearchParams } from "react-router-dom"
import Card from "../components/Card"
import useScrollToTop from "../hooks/useScrollToTop"

const Tools = ({ tags, tools }) => {
  const scrollToTop = useScrollToTop()
  useEffect(() => {
    scrollToTop()
  }, [])
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
      }
    : null

  // TODO: refactor
  const displayedTools =
    queryCategory && search
      ? tools.filter(
          (tool) =>
            tool.category.includes(queryCategory) &&
            tool.title.toLowerCase().includes(search.toLowerCase()),
        )
      : search
        ? tools.filter((tool) =>
            tool.title.toLowerCase().includes(search.toLowerCase()),
          )
        : queryCategory
          ? tools.filter((tool) => tool.category.includes(queryCategory))
          : tools

  const toolElements = displayedTools.map((tool) => (
    <Link to={tool.id} key={tool.id}>
      <Card tool={tool} tags={tags} />
    </Link>
  ))

  return (
    <>
      <header style={styles} className="sm:mb-12">
        <div className="container py-12 ">
          {queryCategory ? (
            <div
              className={`mb-8 flex items-center gap-4 text-4xl font-bold text-white`}
            >
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
          <section className="container flex flex-wrap justify-around gap-12">
            {toolElements}
          </section>
        ) : null}
      </main>
    </>
  )
}

export default Tools

import { useState } from "react"
import ToolsNav from "../components/ToolsNav"
import { useSearchParams } from "react-router-dom"

const Tools = ({ tags }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryCategory = searchParams.get("category")
  const [headerDetails] = tags.filter(
    (tag) => tag.category.toLowerCase() === queryCategory,
  )
  const styles = queryCategory
    ? {
        backgroundColor: headerDetails.backgroundColor,
        color: headerDetails.color,
      }
    : null

  console.log(styles)

  return (
    <>
      <header style={styles}>
        <div className="container py-12 ">
          {queryCategory ? (
            <div className={`mb-8 flex items-center gap-4 text-4xl font-bold`}>
              {headerDetails.icon}
              <h2>{headerDetails.category}</h2>
            </div>
          ) : (
            <div className={`mb-8 flex items-center gap-4 text-4xl font-bold`}>
              Tools
            </div>
          )}
          <ToolsNav />
        </div>
      </header>
      <main className={`flex flex-1`}>
        <section className="container">hello</section>
      </main>
    </>
  )
}

export default Tools

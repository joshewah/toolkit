import { useState } from "react"
import ToolsNav from "../components/ToolsNav"
import { Link, useSearchParams } from "react-router-dom"
import Card from "../components/Card"

const Tools = ({ data, tags }) => {
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

  const allTools = data.map((tool) => (
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
          <ToolsNav />
        </div>
      </header>
      <main className={`mb-20 mt-8 flex flex-1`}>
        <section className="container flex flex-wrap justify-around gap-8">
          {allTools}
        </section>
      </main>
    </>
  )
}

export default Tools

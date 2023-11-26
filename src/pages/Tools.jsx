import { useState } from "react"
import ToolsNav from "../components/ToolsNav"
import { Link, useSearchParams } from "react-router-dom"
import Card from "../components/Card"

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

  const allData = [
    {
      id: 1,
      title: "Realtime Colors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: ["design", "inspiration"],
      views: 123,
      dateSubmitted: "21/2/2019",
      dateAdded: "17/4/2019",
      siteLink: "https://www.realtimecolors.com",
      cost: "Free",
      previewImage: "",
      fullImage: "",
    },
    {
      id: 2,
      title: "Realtime Colors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: ["design", "inspiration"],
      views: 123,
      dateSubmitted: "21/2/2019",
      dateAdded: "17/4/2019",
      siteLink: "https://www.realtimecolors.com",
      cost: "Free",
      previewImage: "",
      fullImage: "",
    },
    {
      id: 3,
      title: "Realtime Colors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: ["design", "inspiration"],
      views: 123,
      dateSubmitted: "21/2/2019",
      dateAdded: "17/4/2019",
      siteLink: "https://www.realtimecolors.com",
      cost: "Free",
      previewImage: "",
      fullImage: "",
    },
  ]

  const allTools = allData.map((tool) => (
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

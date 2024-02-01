import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getToolById } from "../firebase-config"
import { FaGift } from "react-icons/fa6"
import { Link } from "react-router-dom"

const ToolDetails = () => {
  const { toolId } = useParams()
  const [tool, setTool] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolData = await getToolById(toolId)
        setTool(toolData)
        console.log(tool)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoaded(true)
      }
    }
    fetchTool()
  }, [])

  console.log(tool)

  return (
    <main className="container mt-8 flex-1">
      <Link
        to={".."}
        className="mb-8 flex w-max flex-wrap items-center gap-2 rounded-lg bg-primary p-2 font-medium text-white"
      >
        &larr; All Tools
      </Link>
      {isLoaded && tool ? (
        <>
          <article className="flex gap-8 rounded-lg bg-white p-6">
            <div className="w-1/3">
              <img
                src={tool.previewImage}
                alt={`Image of the landing page for the site ${tool.title}`}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold">{tool.title}</h1>
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2 flex w-min items-center gap-2 rounded-lg border-2 border-free-color bg-free-background px-2 font-medium text-free-color">
                  <FaGift className="text-sm" />
                  {tool.cost}
                </div>
                <a
                  href={tool.siteLink}
                  className="text-blue-700 underline underline-offset-4 transition-all hover:text-blue-800"
                >
                  {tool.siteLink}
                </a>
              </div>
              <p>{tool.description}</p>
            </div>
          </article>
        </>
      ) : (
        <p>No tool</p>
      )}
    </main>
  )
}

export default ToolDetails

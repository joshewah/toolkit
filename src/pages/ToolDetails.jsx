import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getToolById, getToolsByCategory } from "../firebase-config"
import { FaGift, FaHouseChimney } from "react-icons/fa6"
import { FaRegHeart, FaExternalLinkAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import Card from "../components/Card"

const ToolDetails = ({ tags }) => {
  const { toolId } = useParams()
  const [tool, setTool] = useState({})
  const [relatedTools, setRelatedTools] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // ? This will fetch the tool by id from the firebase db
  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolData = await getToolById(toolId)
        setTool(toolData)
        // ! DEBUG
        // This is what it should use
        // console.log(toolData.category[0])
        const relatedTools = await getToolsByCategory("inspiration", toolId)
        console.log(relatedTools)
        setRelatedTools(relatedTools)
        console.log(relatedTools)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoaded(true)
      }
    }
    fetchTool()
  }, [toolId])

  return (
    <main className="container mt-8 flex-1">
      {isLoaded && tool ? (
        <>
          <div className="mb-4 flex sm:mb-12">
            <img
              src={tool.previewImage}
              alt={`Image of the landing page on the site ${tool.title}`}
              className=" mb-6 rounded-lg transition-all sm:shadow-2xl lg:w-3/4"
            />
          </div>

          <header className="mb-8 border-b-4 pb-8 md:mb-12">
            <h2 className="mb-1 text-3xl font-semibold lg:mb-2 lg:text-4xl">
              {tool.title}
            </h2>
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <div>
                {tool.category.map((toolCategory) => (
                  <Link
                    key={toolCategory}
                    to={`..?category=${toolCategory}`}
                    className="pr-4 text-lg font-medium text-gray-600 underline-offset-2 hover:underline"
                  >
                    {`${toolCategory[0].toUpperCase()}${toolCategory.slice(1)}`}
                  </Link>
                ))}
              </div>
              <button
                key={tool.id}
                className="rounded-2 flex w-min items-center gap-2 rounded-lg border-2 border-free-color bg-free-background px-2 font-medium text-free-color "
                onClick={(e) => addSearchParams(e, "cost", tool.cost)}
              >
                <FaGift className="text-sm" />
                {tool.cost}
              </button>
            </div>

            <div className="flex gap-4 text-2xl transition-all">
              <Link
                className="rounded-full bg-gray-200 p-3 hover:bg-gray-300"
                to={tool.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </Link>
              <button className="rounded-full bg-gray-200 p-3 hover:bg-gray-300">
                <FaRegHeart />
              </button>
            </div>
          </header>

          <article className="mb-24 flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
            <div>
              <h3 className="mb-4 text-3xl font-semibold sm:mb-4 lg:text-4xl">
                About
              </h3>
              <p className="max-w-prose font-medium text-gray-700">
                {tool.description}
              </p>
            </div>
            <div>
              <h4 className="text-3xl font-semibold sm:mb-4 lg:text-4xl">
                More of {tool.category[0]}
              </h4>
              {relatedTools.map((tool) => (
                <Card tool={tool} key={tool.id} tags={tags} />
              ))}
            </div>
          </article>
        </>
      ) : isLoaded && !tool ? (
        <div>
          <h1 className="pb-6 text-4xl font-semibold">
            Oops, this page doesn't seem to exist.
          </h1>
          <Link
            to="/"
            className="flex w-max flex-wrap items-center gap-2 rounded-lg bg-primary p-2 text-white"
          >
            <FaHouseChimney />
            Back home
          </Link>
        </div>
      ) : (
        !isLoaded && <div>Loading...</div>
      )}
    </main>
  )
}

export default ToolDetails

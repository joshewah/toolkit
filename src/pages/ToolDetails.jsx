import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getToolById, getToolsByCategory } from "../firebase-config"
import { Link } from "react-router-dom"
import Card from "../components/Card"
import useScrollToTop from "../hooks/useScrollToTop"
import ImageHeader from "../components/ImageHeader"
import RelatedTools from "../components/RelatedTools"
import Missing from "./Missing"
import ButtonPanel from "../components/ButtonPanel"
import CostTag from "../components/CostTag"
import RelatedCategory from "../components/RelatedCategory"

const ToolDetails = ({ tags }) => {
  const { toolId } = useParams()
  const [tool, setTool] = useState({})
  const [relatedTools, setRelatedTools] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const scrollToTop = useScrollToTop()

  // ? This will fetch the tool by id from the firebase db anytime the id is changed
  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolData = await getToolById(toolId)
        setTool(toolData)
        const relatedTools = await getToolsByCategory(
          toolData.category[0],
          toolId,
        )
        setRelatedTools(relatedTools)
        window.scrollTo(0, 0)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoaded(true)
      }
    }
    scrollToTop()
    fetchTool()
  }, [toolId])

  return (
    <main className="container mt-8 flex-1">
      {isLoaded && tool ? (
        <>
          <ImageHeader previewImage={tool.previewImage} title={tool.title} />

          <article className="dark:bg-dark-theme--card-bg mb-8 rounded-b-2xl bg-white p-8 md:mb-12">
            <div className="flex justify-between">
              <h2 className="mb-1 text-3xl font-semibold lg:mb-2 lg:text-4xl">
                {tool.title}
              </h2>
              <CostTag id={tool.id} cost={tool.cost} />
            </div>
            <div className="dark:border-b-dark-theme--bg-alt mb-10 flex items-center justify-between border-b-[3px] border-b-gray-300 pb-10 sm:mb-10">
              <div className="flex flex-wrap">
                {tool.category.map((category) => (
                  <RelatedCategory key={category} category={category} />
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <ButtonPanel siteLink={tool.siteLink} />

              <div className=" flex flex-col gap-2">
                <h3 className="flex-shrink text-3xl font-semibold sm:mb-4 lg:text-4xl">
                  About
                </h3>
                <p className="max-w-prose flex-grow font-medium">
                  {tool.description}
                </p>
              </div>
            </div>
          </article>

          <RelatedTools
            relatedTools={relatedTools}
            category={tool.category[0]}
            tags={tags}
          />
        </>
      ) : isLoaded && !tool ? (
        <Missing />
      ) : (
        !isLoaded && <div>Loading...</div>
      )}
    </main>
  )
}

export default ToolDetails

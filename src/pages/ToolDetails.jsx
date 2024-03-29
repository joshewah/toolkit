import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getToolById, getToolsByCategory } from "../firebase-config"
import useScrollToTop from "../hooks/useScrollToTop"
import ImageHeader from "../components/ImageHeader"
import RelatedTools from "../components/RelatedTools"
import Missing from "./Missing"
import ButtonPanel from "../components/ButtonPanel"
import CostTag from "../components/CostTag"
import RelatedCategory from "../components/RelatedCategory"

const ToolDetails = ({ tags, tools }) => {
  const { toolId } = useParams()
  const [tool, setTool] = useState({})
  const [relatedTools, setRelatedTools] = useState([])
  const [hasRelatedTools, setHasRelatedTools] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const scrollToTop = useScrollToTop()

  // ? This will fetch the tool by id from the firebase db anytime the id is changed
  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolData = await getToolById(toolId)
        setTool(toolData)
        let relatedTools = await getToolsByCategory(
          toolData.category[0],
          toolId,
        )

        if (relatedTools.length == 0) {
          setHasRelatedTools(false)
          relatedTools = await getToolsByCategory("featured", toolId)
        }

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
    <main className=" bg-background pt-4 dark:bg-dark--background sm:pt-8">
      {isLoaded && tool ? (
        <article className="container flex-1">
          <ImageHeader previewImage={tool.previewImage} title={tool.title} />

          <div className="mb-16 rounded-b-2xl bg-background-alternate p-4 text-text dark:bg-dark--background-alternate dark:text-dark--text  md:mb-12">
            <div className="mb-2 flex flex-wrap justify-between gap-2">
              <h2 className="mb-1 text-3xl font-semibold lg:mb-2 lg:text-4xl">
                {tool.title}
              </h2>
              <CostTag id={tool.id} cost={tool.cost} />
            </div>
            <div className="mb-4 flex items-center justify-between border-b-[3px] border-b-background-active pb-4 dark:border-b-background-active sm:mb-10">
              <div className="flex flex-wrap">
                {tool.category.map((category) => (
                  <RelatedCategory key={category} category={category} />
                ))}
              </div>
            </div>

            <div className="flex flex-col-reverse gap-4 sm:flex-row">
              <ButtonPanel siteLink={tool.siteLink} />

              <div className="mb-4 flex flex-col gap-2 sm:mb-8">
                <h3 className="flex-shrink text-2xl font-semibold sm:mb-4 lg:text-4xl">
                  About
                </h3>
                <p className="max-w-prose flex-grow">{tool.description}</p>
              </div>
            </div>
          </div>

          <RelatedTools
            relatedTools={relatedTools}
            category={`${hasRelatedTools ? tool.category[0] : "featured"}`}
            tags={tags}
          />
        </article>
      ) : isLoaded && !tool ? (
        <Missing />
      ) : (
        !isLoaded && <div>Loading...</div>
      )}
    </main>
  )
}

export default ToolDetails

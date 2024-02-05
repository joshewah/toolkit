import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import Landing from "./pages/Landing"
import Tools from "./pages/Tools"
import Support from "./pages/Support"
import About from "./pages/About"
import Suggest from "./pages/Suggest"
import Privacy from "./pages/Privacy"
import ToolDetails from "./pages/ToolDetails"
import Missing from "./pages/Missing"
import { BsStars } from "react-icons/bs"
import {
  FaRobot,
  FaFlask,
  FaBook,
  FaPalette,
  FaWandMagicSparkles,
  FaFont,
  FaLightbulb,
  FaCamera,
  FaDrawPolygon,
  FaShieldHalved,
} from "react-icons/fa6"
import { FaCode, FaTools, FaPenNib } from "react-icons/fa"

import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"

function App() {
  // TODO: Turn into custom hook
  const [tools, setTools] = useState([])
  useEffect(() => {
    const toolCollectionRef = collection(db, "tools")
    const getTools = async () => {
      try {
        const data = await getDocs(toolCollectionRef)
        setTools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      } catch (error) {
        console.error(error)
      }
    }

    getTools()
  }, [])

  const [tags, setTags] = useState([
    {
      backgroundColor: "#495057",
      color: "#f8f9fa",
      category: "AI",
      icon: <FaRobot />,
    },
    {
      backgroundColor: "#F03E3E",
      color: "#fff5f5",
      category: "Colours",
      icon: <FaPalette />,
    },
    {
      backgroundColor: "#D6336C",
      color: "#fff0f6",
      category: "Learning",
      icon: <FaBook />,
    },
    {
      backgroundColor: "#AE3EC9",
      color: "#f8f0fc",
      category: "Inspiration",
      icon: <FaLightbulb />,
    },
    {
      backgroundColor: "#7048E8",
      color: "#f3f0ff",
      category: "Design",
      icon: <FaPenNib />,
    },
    {
      backgroundColor: "#4263EB",
      color: "#edf2ff",
      category: "CSS Generators",
      icon: <FaWandMagicSparkles />,
    },

    {
      backgroundColor: "#1C7ED6",
      color: "#e7f5ff",
      category: "VS Code Extensions",
      icon: <FaCode />,
    },
    {
      backgroundColor: "#1098AD",
      color: "#e3fafc",
      category: "Testing",
      icon: <FaFlask />,
    },
    {
      backgroundColor: "#0CA678",
      color: "#e6fcf5",
      category: "Photography",
      icon: <FaCamera />,
    },
    {
      backgroundColor: "#37B24D",
      color: "#ebfbee",
      category: "Typography",
      icon: <FaFont />,
    },
    {
      backgroundColor: "#74B816",
      color: "#f4fce3",
      category: "Illustrations",
      icon: <FaDrawPolygon />,
    },
    {
      backgroundColor: "#fcc419",
      color: "#fff9db",
      category: "Featured",
      icon: <BsStars />,
    },
    {
      backgroundColor: "#F59F00",
      color: "#fff9db",
      category: "Service",
      icon: <FaTools />,
    },
    {
      backgroundColor: "#F76707",
      color: "#fff4e6",
      category: "Icons",
      icon: <FaShieldHalved />,
    },
  ])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing tags={tags} tools={tools} />} />
            <Route path="tools">
              <Route index element={<Tools tags={tags} tools={tools} />} />
              <Route
                path=":toolId"
                element={<ToolDetails tools={tools} tags={tags} />}
              />
            </Route>
            <Route path="support" element={<Support />} />
            <Route path="about" element={<About />} />
            <Route path="suggest" element={<Suggest />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

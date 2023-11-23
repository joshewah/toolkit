import React from "react"
import "./AnimatedTags.css"
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

const AnimatedTags = ({ rows }) => {
  const TAGS = [
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
      backgroundColor: "#F59F00",
      color: "#fff9db",
      category: "Services",
      icon: <FaTools />,
    },
    {
      backgroundColor: "#F76707",
      color: "#fff4e6",
      category: "Icons",
      icon: <FaShieldHalved />,
    },
  ]

  const DURATION = 28000
  const TAGS_PER_ROW = 8

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random())

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    )
  }

  const Tag = ({ tagInfo }) => {
    const { backgroundColor, color, category } = tagInfo
    const { icon } = tagInfo

    return (
      <div
        className="tag"
        style={{
          backgroundColor: backgroundColor,
          color: color,
          boxShadow: `0 0.1rem 0.2rem ${backgroundColor}`,
          boxShadow: `0 0.1rem 0.5rem ${backgroundColor}`,
          boxShadow: `0 0.2rem 1rem ${backgroundColor}`,
        }}
      >
        {icon}
        {category}
      </div>
    )
  }

  return (
    <div className="tag-list">
      {[...new Array(rows)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag tagInfo={tag} key={tag.category} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  )
}

export default AnimatedTags

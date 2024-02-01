import React from "react"
import "./AnimatedTags.css"

import { Link } from "react-router-dom"

const AnimatedTags = ({ tags, rows }) => {

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
      <Link
        to={`tools?category=${category.toLowerCase()}`}
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
      </Link>
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
          {shuffle(tags)
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

import React from "react"
import { Link } from "react-router-dom"
import { FaRegHeart, FaExternalLinkAlt } from "react-icons/fa"

const ButtonPanel = ({ siteLink }) => {
  return (
    <div className="mb-12 flex flex-col gap-4 text-2xl transition-all">
      <Link
        className="dark:bg-dark-theme--bg-alt dark:hover:text-dark-theme--card-bg rounded-full bg-gray-200 p-3 transition-all hover:bg-gray-300"
        to={siteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt />
      </Link>
    </div>
  )
}

export default ButtonPanel

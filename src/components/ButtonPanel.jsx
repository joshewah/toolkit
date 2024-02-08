import React from "react"
import { Link } from "react-router-dom"
import { FaRegHeart, FaExternalLinkAlt } from "react-icons/fa"

const ButtonPanel = ({ siteLink }) => {
  return (
    <div className="flex flex-col gap-4 self-end text-2xl transition-all sm:mb-12 sm:self-start ">
      <Link
        className="dark:bg-dark-theme--bg-alt dark:hover:text-dark-theme--card-bg max-w-fit flex-shrink rounded-full bg-gray-200 p-3 transition-all hover:bg-gray-300"
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

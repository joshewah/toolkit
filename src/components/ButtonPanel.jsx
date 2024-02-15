import React from "react"
import { Link } from "react-router-dom"
import { FaRegHeart, FaExternalLinkAlt } from "react-icons/fa"

const ButtonPanel = ({ siteLink }) => {
  return (
    <div className="flex flex-col gap-4 self-end text-2xl transition-all sm:mb-12 sm:self-start ">
      <Link
        className="dark:hover:text-dark-theme--card-bg max-w-fit flex-shrink rounded-full bg-background-alternate p-3 transition-all hover:bg-background-active dark:bg-dark--background-alternate hover:dark:bg-dark--background-active"
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

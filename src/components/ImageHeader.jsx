import React from "react"

const ImageHeader = ({ previewImage, title }) => {
  return (
    <div className="flex aspect-video">
      <img
        src={previewImage}
        alt={`Image of the landing page on the site ${title}`}
        className="dark:border-dark-theme--card-bg w-full rounded-t-2xl  border-[24px] border-white shadow-inner"
      />
    </div>
  )
}

export default ImageHeader

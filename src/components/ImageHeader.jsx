import React from "react"

const ImageHeader = ({ previewImage, title }) => {
  return (
    <div className="flex aspect-video">
      <img
        src={previewImage}
        alt={`Image of the landing page on the site ${title}`}
        className="w-full rounded-t-2xl border-[10px]  border-background-alternate shadow-inner dark:border-dark--background-alternate sm:border-[24px]"
      />
    </div>
  )
}

export default ImageHeader

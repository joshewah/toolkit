import React from "react"
import { FaGift } from "react-icons/fa6"

const CostTag = ({ id, cost }) => {
  return (
    <button
      key={id}
      className="rounded-2 flex max-h-8 w-min items-center gap-2 rounded-lg border-2 border-free-color bg-free-background px-2 font-medium text-free-color "
      //   onClick={(e) => addSearchParams(e, "cost", cost)}
    >
      <FaGift className="text-sm" />
      {cost}
    </button>
  )
}

export default CostTag

import React from "react"
import { FaGift } from "react-icons/fa6"

const CostTag = ({ id, cost }) => {
  return (
    <button
      key={id}
      className="flex max-h-8 w-min items-center gap-2 rounded-md bg-free-color px-2 font-medium text-white"
      //   onClick={(e) => addSearchParams(e, "cost", cost)}
    >
      <FaGift className="text-sm" />
      {cost}
    </button>
  )
}

export default CostTag

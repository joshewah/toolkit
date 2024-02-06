import React from "react"
import { Link } from "react-router-dom"
import { FaHouseChimney } from "react-icons/fa6"

const Missing = () => {
  return (
    <main className="container flex-1">
      <h1 className="pb-6 text-4xl font-semibold">
        Oops, this page doesn't seem to exist.
      </h1>
      <Link
        to="/"
        className="flex w-max flex-wrap items-center gap-2 rounded-lg bg-primary p-2 text-white"
      >
        <FaHouseChimney />
        Back home
      </Link>
    </main>
  )
}

export default Missing

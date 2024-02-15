import React from "react"
import FooterExtended from "../components/FooterExtended"

const Support = () => {
  return (
    <main className="flex flex-1 flex-col bg-background dark:bg-dark--background">
      <section className="container flex-grow text-text dark:text-dark--text">
        <h2 className="pb-6 pt-12 text-4xl font-bold">Support</h2>
        <p>This page is currently in development. Come back soon 😁</p>
      </section>
      <FooterExtended />
    </main>
  )
}

export default Support

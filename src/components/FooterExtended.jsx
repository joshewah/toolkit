import React from "react"

const FooterExtended = () => {
  return (
    <section className=" bg-gradient-to-t from-background-active from-70% to-background text-text transition-colors dark:bg-gradient-to-b dark:from-dark--background dark:from-70% dark:to-dark--background-alternate dark:text-dark--text">
      <div className="container pb-8 pt-12">
        <h4 className="mb-6 text-4xl font-semibold">TOOLkit</h4>
        <p className="mb-4">
          This project is an aim to collate a collection of curated tools for
          people who create websites.
        </p>
        <p>
          Do you ever get that feeling when you stumble across a new tool whilst
          scrolling the social media or find a tutorial and think oh thats cool
          I could use that or when someone mentions something that they use on a
          regular basis to improve their workflow and you just think, why did I
          not know about this sooner? Yes? Well you've found a tool to find
          tools!
        </p>
      </div>
    </section>
  )
}

export default FooterExtended

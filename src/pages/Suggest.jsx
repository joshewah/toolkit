const Suggest = () => {
  const googleForm = (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfBFNGdHl8L4cAj7TNFEMEGamti48zxnlYx6i9aBIxJbLuttA/viewform?embedded=true"
      width="1000px"
      height="1000px"
    >
      Loading…
    </iframe>
  )

  // console.log(googleForm)

  return (
    <main className="flex flex-1">
      <section className="container mt-6 min-h-screen">
        <h2 className="pb-6 pt-12 text-4xl font-bold">Suggest</h2>
        <p className="mb-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi labore
          inventore facilis tenetur eaque adipisci laborum esse repellendus iure
          suscipit sunt ea deserunt dolore, non nulla quibusdam quasi hic
          recusandae aut! Quia rerum excepturi odit itaque aliquam similique
          explicabo quibusdam officia laudantium qui fugiat, eaque saepe
          consequuntur, earum, veritatis libero?
        </p>
        {googleForm}
      </section>
    </main>
  )
}

export default Suggest

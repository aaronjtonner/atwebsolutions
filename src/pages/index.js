import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/heros/hero"
import Clients from "../components/clients"
import Bio from "../components/bio"
import Featured from "../components/featured"
import FormContact from "../components/forms/formContact"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Clients />
      <Bio />
      <Featured title="featured project" />
      <FormContact />
      <Clients />
    </Layout>
  )
}

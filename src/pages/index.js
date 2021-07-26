import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/heros/hero"
import Clients from "../components/clients"
import Bio from "../components/bio"
import FormContact from "../components/forms/formContact"
import GallerySingle from "../components/gallery/gallerySingle"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Clients />
      <Bio />
      <GallerySingle title="featured project" />
      <FormContact />
      <Clients />
    </Layout>
  )
}

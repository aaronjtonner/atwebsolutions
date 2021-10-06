import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/heros/hero"
import Clients from "../components/clients"
import Bio from "../components/bio"
import FormContact from "../components/forms/formContact"
import GalleryFeatured from "../components/gallery/galleryFeatured"
import GoogleReviewsFeatured from "../components/testimonials/GoogleReviewsFeatured"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Clients />
      <Bio />
      <GalleryFeatured title="featured website projects" />
      <GoogleReviewsFeatured />
      <FormContact />
      <Clients />
    </Layout>
  )
}

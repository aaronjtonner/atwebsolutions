import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import TestimonialsFull from "../components/testimonials/testimonialsFull"
import Clients from "../components/clients"
import FormContact from "../components/forms/formContact"

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Freelance Web Designer & Developer - Portfolio" />
      <TestimonialsFull />
      <Projects />
      <Clients />
      <FormContact />
    </Layout>
  )
}

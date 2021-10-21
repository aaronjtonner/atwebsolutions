import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/headers/headerBasic"
import FormContact from "../components/forms/formContact"
import Clients from "../components/clients"
import Map from "../components/map"
import FooterBasic from "../components/footers/footerBasic"
import GoogleReviewsFeatured from "../components/testimonials/GoogleReviewsFeatured"

export default function Contact() {
  return (
    <div>
      <SEO title="Contact" />
      <Header />
      <FormContact />
      <GoogleReviewsFeatured />
      <Clients />
      <Map />
      <FooterBasic />
    </div>
  )
}

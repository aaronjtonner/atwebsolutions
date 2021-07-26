import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/headers/headerBasic"
import FormContact from "../components/forms/formContact"
import Clients from "../components/clients"
import FooterBasic from "../components/footers/footerBasic"

export default function Contact() {
  return (
    <div>
      <SEO title="Freelance Web Designer & Developer - Contact" />
      <Header />
      <FormContact />
      <Clients />
      <FooterBasic />
    </div>
  )
}

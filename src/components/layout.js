import React from "react"

import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import FormContact from "../components/forms/formContact"
import FooterBasic from "./footers/footerBasic"

export default function Layout({ children }) {
  return (
    <>
      <HeaderBasic />
      <main>{children}</main>
      <FooterBasic />
    </>
  )
}

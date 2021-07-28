import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerBasic from "../components/banners/bannerBasic"
import ServicesFull from "../components/services/servicesFull"

import BannerBasicImg from "../images/ph.png"

export default function Services() {
  return (
    <Layout>
      <SEO title="Services" />
      <BannerBasic title="title" img={BannerBasicImg} />
      <ServicesFull title="title" />
    </Layout>
  )
}

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerBasic from "../components/banners/bannerBasic"
import ServicesFull from "../components/services/servicesFull"
import GoogleReviewsFeatured from "../components/testimonials/GoogleReviewsFeatured"

import BannerBasicImg from "../images/ph.png"

export default function Services() {
  return (
    <Layout>
      <SEO title="Web Design, Development, SEO Services" />
      <BannerBasic title="My Services" img={BannerBasicImg} />
      <ServicesFull title="Web design, web development, and SEO services in Calgary" />
      <GoogleReviewsFeatured />
    </Layout>
  )
}

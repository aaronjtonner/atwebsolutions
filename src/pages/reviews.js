import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import { Container, Section } from "../components/layoutComponents"
import BannerBasic from "../components/banners/bannerBasic"
import TestimonialCard from "../components/testimonials/testimonialCard"
import GalleryFull from "../components/gallery/galleryFull"
import TestimonialsFull from "../components/testimonials/testimonialsFull"
import Clients from "../components/clients"
import FormContact from "../components/forms/formContact"
import GoogleReviewsFull from "../components/testimonials/GoogleReviewsFull"

import BannerBasicImg from "../images/ph.png"

export default function Reviews() {
  return (
    <Layout>
      <SEO title="Reviews" />
      <BannerBasic
        title="Highly Recommended By My Happy Clients"
        img={BannerBasicImg}
      />
      <GoogleReviewsFull />
    </Layout>
  )
}

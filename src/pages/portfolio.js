import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, GridAuto } from "../components/layoutComponents"
import BannerBasic from "../components/banners/bannerBasic"
import TestimonialCard from "../components/testimonials/testimonialCard"
import GalleryFull from "../components/gallery/galleryFull"
import TestimonialsFull from "../components/testimonials/testimonialsFull"
import Clients from "../components/clients"
import FormContact from "../components/forms/formContact"

import BannerBasicImg from "../images/ph.png"

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <BannerBasic title="Websites that drive results" img={BannerBasicImg} />
      <GalleryFull />
      <Container>
        <GridAuto>
          <TestimonialCard
            company="Megasets"
            review="One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level."
            name="Sam Swift-Glasman"
            position="Founder of Megasets.ai"
            url="https://www.megasets.ai"
          />
          <TestimonialCard
            company="GreenBioco&#8482;"
            review="Aaron exceeded my expectations in all areas for my redesign. I already plan on hiring Aaron for my next three projects!"
            name="Jacques Camier"
            position="Founder of GreenBioco&#8482;"
            url="https://www.greenbioco.com"
          />
          <TestimonialCard
            company="KiloPower"
            review="Aaron does a superb job in maintaining our website as we grow and changes are required. This support allows our growing consultancy to focus on our day-to-day."
            name="Brenden Marchewka"
            position="President, Kilo Renewables Consulting"
            url="https://www.kilopower.ca"
            disclaimer="* I do not take credit for the design of this website. *"
          />
        </GridAuto>
      </Container>
      <Clients />
      <FormContact />
    </Layout>
  )
}

import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Section, Container, Actions } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

// this component displays a single project with a detailed description and project overview just like in the galleryFull file. The reason I have these seperate is so I can show one single project on the home page and continue using the static image component

const device = {
  md: "50em",
}

export default function GallerySingle(props) {
  return (
    <Section>
      <Container className="spacing-lg"></Container>
    </Section>
  )
}

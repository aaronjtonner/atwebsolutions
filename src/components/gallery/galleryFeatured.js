import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Actions,
  GridOne,
  GridTwo,
  GridThree,
  TextWrapper,
} from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const ProjectLink = styled.a`
  text-decoration: none;
`
const Location = styled.p`
  text-decoration: underline;
  color: var(--clr-accent);
`

export default function GalleryFeatured(props) {
  return (
    <Section>
      <Container className="spacing">
        <TextWrapper>
          <h2 className="title">{props.title}</h2>
        </TextWrapper>
        <>
          <ProjectLink href="https://www.roycoelectric.com/" target="_popup">
            <StaticImage
              src={"../../images/projects/royco-electric-mockup.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.roycoelectric.com</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          <ProjectLink href="https://www.bfirenovations.ca/" target="_popup">
            <StaticImage
              src={"../../images/projects/bfi-renovations-mockup.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.bfirenovations.ca</Location>
            </div>
          </ProjectLink>
          {/* end project */}
        </>
        <ButtonPrimary to="/portfolio">
          View full portfolio &#8594;
        </ButtonPrimary>
      </Container>
    </Section>
  )
}

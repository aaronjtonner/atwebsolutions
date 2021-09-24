import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Actions,
  GridTwo,
  GridThree,
  TextWrapper,
} from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const ProjectLink = styled.a`
  text-decoration: none;

  img {
    border: 1px solid var(--txt-dark);
  }
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
        <GridTwo>
          <ProjectLink href="https://www.roycoelectric.com/" target="_popup">
            <StaticImage
              src={
                "../../images/projects/web-design-project-royco-electric.png"
              }
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
              src={
                "../../images/projects/web-design-project-bfi-renovations.png"
              }
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.bfirenovations.ca</Location>
            </div>
          </ProjectLink>
          {/* end project */}
        </GridTwo>
        <ButtonPrimary to="/portfolio">
          View full portfolio &#8594;
        </ButtonPrimary>
      </Container>
    </Section>
  )
}

import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Actions,
  GridTwo,
  TextWrapper,
} from "../layoutComponents"

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
      <Container>
        <TextWrapper>
          <h2 className="title">{props.title}</h2>
        </TextWrapper>
        <GridTwo>
          <ProjectLink href="https://www.bfirenovations.ca/" target="_popup">
            <StaticImage
              src={"../../images/projects/web-design-project-6.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.bfirenovations.ca</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          <ProjectLink
            href="https://www.iconformingsystems.com/"
            target="_popup"
          >
            <StaticImage
              src={"../../images/projects/web-design-project-5.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.iconformingsystems.com</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          {/* <ProjectLink href="https://www.tractor1.com/" target="_popup">
            <StaticImage
              src={"../../images/projects/web-design-project-4.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.tractor1.com</Location>
            </div>
          </ProjectLink> */}
          {/* end project */}
        </GridTwo>
      </Container>
    </Section>
  )
}

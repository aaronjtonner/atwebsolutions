import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container } from "./layoutComponents"

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: 44em) {
    grid-template-columns: 1fr;
  }
`

const ProjectLink = styled.a`
  text-decoration: none;

  img {
    border: 1px solid var(--txt-dark);
  }
`
const Location = styled.p`
  text-decoration: underline;
`

export default function Projects() {
  return (
    <Section>
      <Container className="spacing-lg">
        <ProjectsGrid>
          <ProjectLink href="https://www.bfirenovations.ca/" target="_popup">
            <StaticImage
              src={"../images/projects/web-design-project-6.png"}
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
              src={"../images/projects/web-design-project-5.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.iconformingsystems.com</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          <ProjectLink href="https://www.tractor1.com/" target="_popup">
            <StaticImage
              src={"../images/projects/web-design-project-4.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.tractor1.com</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          <ProjectLink href="https://www.megasets.ai/" target="_popup">
            <StaticImage
              src={"../images/projects/web-design-project-3.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.megasets.ai</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          <ProjectLink href="https://www.greenbioco.com/" target="_popup">
            <StaticImage
              src={"../images/projects/web-design-project-2.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.greenbioco.com</Location>
            </div>
          </ProjectLink>
          {/* end project */}
          <ProjectLink
            href="https://www.concretecontractorsodessatx.com/"
            target="_popup"
          >
            <StaticImage
              src={"../images/projects/web-design-project-1.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.concretecontractorsodessatx.com</Location>
            </div>
          </ProjectLink>
          {/* end project */}
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

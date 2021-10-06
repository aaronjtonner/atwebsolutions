import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { AnchorPrimary } from "../buttons"

// this component displays 3 - 4 projects that have a detailed description and project overview attached. Below those projects will be another "full gallery" grid to show each and every project in a simple format. I have to use this way to continue using the static image component.

// use these for the 3 - 4 detailed projects display
const ProjectOverview = styled.div`
  background: #f6f6f6;
`

const ProjectOverviewText = styled.div`
  padding: 2em;
  h3 {
    font-size: var(--fs-2);
    text-transform: uppercase;
  }
  p {
    max-width: 70ch;
    width: 100%;
  }
`
// use this for the full gallery display
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 2em;
`

const ProjectLink = styled.a`
  text-decoration: none;

  img {
    border: 1px solid var(--clr-accent);
  }
`
const Location = styled.p`
  text-decoration: underline;
  color: var(--clr-accent);
`

export default function GalleryFull() {
  return (
    <Section>
      <Container className="spacing-lg">
        <>
          <ProjectOverview>
            <StaticImage
              src={"../../images/projects/royco-electric-mockup.png"}
              alt="web design project"
              objectFit="cover"
              placeholder="blurred"
            />
            <ProjectOverviewText className="spacing">
              <div>
                <a
                  className="inline-link"
                  href="https://www.roycoelectric.com"
                  target="blank"
                >
                  www.roycoelectric.com
                </a>
                <h3>royco electric ltd.</h3>
              </div>
              <p>{/* royco project info */}</p>
              <AnchorPrimary
                href="https://www.roycoelectric.com/"
                target="blank"
              >
                view live website &#8594;
              </AnchorPrimary>
            </ProjectOverviewText>
          </ProjectOverview>
          <ProjectOverview>
            <StaticImage
              src={"../../images/projects/bfi-renovations-mockup.png"}
              alt="web design project"
              objectFit="cover"
              placeholder="blurred"
            />
            <ProjectOverviewText className="spacing">
              <div>
                <a
                  className="inline-link"
                  href="https://www.bfirenovations.ca"
                  target="blank"
                >
                  www.bfirenovations.ca
                </a>
                <h3>bfi renovations</h3>
              </div>
              <p>{/* bfi project info */}</p>
              <AnchorPrimary
                href="https://www.bfirenovations.ca/"
                target="blank"
              >
                view live website &#8594;
              </AnchorPrimary>
            </ProjectOverviewText>
          </ProjectOverview>
          <ProjectOverview>
            <StaticImage
              src={"../../images/projects/ifs-mockup.png"}
              alt="web design project"
              objectFit="contain"
              placeholder="blurred"
            />
            <ProjectOverviewText className="spacing">
              <div>
                <a
                  className="inline-link"
                  href="https://www.iconformingsystems.com"
                  target="blank"
                >
                  www.iconformingsystems.com
                </a>
                <h3>icon forming systems inc</h3>
              </div>
              <p>{/* ifs project info */}</p>
              <AnchorPrimary
                href="https://www.iconformingsystems.com"
                target="blank"
              >
                view live website &#8594;
              </AnchorPrimary>
            </ProjectOverviewText>
          </ProjectOverview>
        </>
        <ProjectsGrid>
          {/* full gallery here - use ProjectLink for each item as shown below */}
          <ProjectLink href="https://www.roycoelectric.com/" target="_popup">
            <StaticImage
              src={
                "../../images/projects/web-design-project-royco-electric.png"
              }
              alt="web design project"
              placeholder="blurred"
              objectFit="cover"
            />
            <div>
              <Location>www.roycoelectric.com</Location>
            </div>
          </ProjectLink>
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
          <ProjectLink
            href="https://www.iconformingsystems.com/"
            target="_popup"
          >
            <StaticImage
              src={
                "../../images/projects/web-design-project-icon-forming-systems.png"
              }
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.iconformingsystems.com</Location>
            </div>
          </ProjectLink>
          <ProjectLink href="https://www.megasets.ai/" target="_popup">
            <StaticImage
              src={"../../images/projects/web-design-project-megasets.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.megasets.ai</Location>
            </div>
          </ProjectLink>
          <ProjectLink href="https://www.greenbioco.com/" target="_popup">
            <StaticImage
              src={"../../images/projects/web-design-project-gbc.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.greenbioco.com</Location>
            </div>
          </ProjectLink>
          <ProjectLink href="" target="_popup">
            <StaticImage
              src={"../../images/projects/web-design-project-tractor1.png"}
              alt="web design project"
              placeholder="blurred"
            />
            <div>
              <Location>www.tractor1.com</Location>
            </div>
          </ProjectLink>
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

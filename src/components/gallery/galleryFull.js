import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { AnchorPrimary } from "../buttons"

// this component displays 3 - 4 projects that have a detailed description and project overview attached. Below those projects will be another "full gallery" grid to show each and every project in a simple format. I have to use this way to continue using the static image component.

// use these for the 3 - 4 detailed projects display

// use this for the full gallery display
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
        {/* <>
          <Flex>
            <StaticImage
              src={
                "../../images/projects/web-design-project-royco-electric.png"
              }
              alt="web design project"
              objectFit="contain"
              placeholder="blurred"
              className="img-border"
            />
            <div className="spacing">
              <div>
                <p>www.roycoelectric.com</p>
                <h3>royco electric ltd.</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos magni suscipit facere est. Vitae autem dolorum fuga
                sed assumenda dolore? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dignissimos magni suscipit facere est. Vitae
                autem dolorum fuga sed assumenda dolore? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dignissimos magni suscipit
                facere est. Vitae autem dolorum fuga sed assumenda dolore?
              </p>
              <AnchorPrimary
                href="https://www.roycoelectric.com/"
                target="blank"
              >
                view live website &#8594;
              </AnchorPrimary>
            </div>
          </Flex>
          <Flex>
            <StaticImage
              src={
                "../../images/projects/web-design-project-bfi-renovations.png"
              }
              alt="web design project"
              objectFit="contain"
              placeholder="blurred"
              className="img-border"
            />
            <div className="spacing">
              <div>
                <p>www.bfirenovations.ca</p>
                <h3>bfi renovations</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus at sit enim hic fugit labore odit soluta laborum,
                rerum ipsum a? Veniam vero doloribus molestias voluptatum
                exercitationem, dolore consequatur itaque?
              </p>
              <AnchorPrimary
                href="https://www.bfirenovations.ca/"
                target="blank"
              >
                view live website &#8594;
              </AnchorPrimary>
            </div>
          </Flex>
          <Flex>
            <StaticImage
              src={
                "../../images/projects/web-design-project-icon-forming-systems.png"
              }
              alt="web design project"
              objectFit="contain"
              placeholder="blurred"
              className="img-border"
            />
            <div className="spacing">
              <div>
                <p>www.iconformingsystems.com</p>
                <h3>icon forming systems inc</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                beatae nemo error expedita, tempora laboriosam eius maxime? Eum
                quisquam totam vitae officia nulla ab voluptatem quas, alias
                reprehenderit asperiores labore iste? Dolor inventore architecto
                ad vitae itaque harum. Aperiam, necessitatibus.
              </p>
              <AnchorPrimary
                href="https://www.iconformingsystems.com"
                target="blank"
              >
                view live website &#8594;
              </AnchorPrimary>
            </div>
          </Flex>
        </> */}
        <ProjectsGrid>
          {/* full gallery here - use ProjectLink for each item as shown below */}
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
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

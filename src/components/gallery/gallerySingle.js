import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Section, Container, Actions } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const device = {
  md: "50em",
}

const FeaturedProject = styled.div`
  box-shadow: rgb(0, 128, 255, 0.2) 0px 8px 24px;

  img {
    border: 1px solid var(--clr-accent);
  }

  p {
    line-height: 1.1;
  }
`

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3em 1fr;
  grid-template-rows: auto 3em auto;

  img {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    /* z-index: 1; */
  }

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1.2em auto;
  }
`

const TextBox = styled.div`
  padding: 2em 2em;
  background: var(--clr-secondary);

  a {
    display: inline-block;
    color: var(--txt-dark);
    font-size: var(--fs-sm);
    font-weight: var(--fw-black);
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
    }
  }
`

const ReviewBox = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  /* z-index: 2; */

  padding: 1em 2em;
  background: var(--clr-secondary);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media screen and (max-width: ${device.md}) {
    margin-left: 2em;
    margin-right: 3em;
  }

  a {
    display: inline-block;
    color: var(--txt-dark);
    font-size: var(--fs-sm);
    font-weight: var(--fw-black);
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
    }
  }
`

export default function GallerySingle(props) {
  return (
    <Section>
      <Container className="spacing-lg">
        <div className="center">
          <p className="body--small">WEB DESIGN & DEVELOPMENT</p>
          <span className="title">{props.title}</span>
        </div>
        <FeaturedProject>
          <StaticImage
            src={"../../images/projects/web-design-project-5.png"}
            alt="web design project"
            placeholder="blurred"
          />
          <TextBox className="spacing-sm">
            <div>
              <p className="upper body--small accent">
                web design & development for:
              </p>
              <p className="body--large bold">Icon Forming Systems</p>
            </div>
            <a target="_popup" href="https://www.iconformingsystems.com/">
              live website &#8594;
            </a>
          </TextBox>
        </FeaturedProject>
        <Actions>
          <ButtonPrimary to="/portfolio">
            view my full portfolio &#8594;
          </ButtonPrimary>
        </Actions>
      </Container>
    </Section>
  )
}

import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container } from "./layoutComponents"
import { ButtonInline } from "../components/buttons"

const AboutGrid = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 57em) {
    flex-direction: column;
  }

  > * {
    margin-left: 2em;
  }
`

const GridImg = styled.article`
  text-align: center;

  img {
    width: 150px;
    border-radius: 50%;
  }

  @media screen and (max-width: 57em) {
    border-bottom: 1px solid var(--txt-dark);
  }
`

const GridBio = styled.article`
  text-align: left;
  max-width: 70ch;
`

const AboutText = styled.div`
  text-align: center;
`

export default function Bio(props) {
  return (
    <Section>
      <Container className="spacing">
        {/* <AboutText>
          <h2 className="heading"></h2>
        </AboutText> */}
        <AboutGrid className="spacing">
          <GridImg>
            <StaticImage
              src={"../images/aaron-tonner-headshot.jpg"}
              alt="aaron tonner headshot"
              placeholder="blurred"
            />
          </GridImg>
          <GridBio className="spacing">
            <p className="body">
              I come from a Civil Engineering background, and I provide proven &{" "}
              <ButtonInline to="/services/affordable-web-design-calgary">
                affordable web design
              </ButtonInline>{" "}
              and development, regular web maintenance & updates, local SEO, and
              other internet marketing services that will help your business
              increase revenue and customer connections.
            </p>
            <div>
              <p className="bold italics">Web Design & Marketing</p>
              <p className="body body--small italics">Aaron Tonner</p>
              <p className="body body--small italics">
                Civil Engineering Graduate
              </p>
            </div>
          </GridBio>
        </AboutGrid>
      </Container>
    </Section>
  )
}

import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container } from "./layoutComponents"

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
              Hi, I’m Aaron, a Civil Engineering graduate and I'm here to help
              your business build and improve your website and marketing
              strategies to increase your growth, optimize your conversions, and
              skyrocket your sales.
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

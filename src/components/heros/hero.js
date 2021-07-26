import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Actions } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4em 0;
  color: var(--txt-light);
  background: url(../../../images/hero.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 32em) {
    padding-top: 12em;
    background: url(../../../images/hero-mobile1.png);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const HeroBox = styled.div``

const HeroText = styled.div`
  max-width: 70ch;
  h1 {
    font-size: var(--fs-heading);
    font-weight: 300;
    line-height: 1.1;
    span {
      font-weight: 700;
    }
  }
`

const Review = styled.div`
  color: var(--txt-light-secondary);
  font-weight: 300;
  padding: 1em;
  border-radius: var(--br);
  box-shadow: 0 0 0.5em var(--clr-accent);
`

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroBox>
          <HeroText className="spacing-lg">
            <h1>
              I’m a web designer & digital marketing freelancer with proven
              solutions that will help you{" "}
              <span className="italics">grow your business.</span>
            </h1>
            <Actions>
              <ButtonPrimary to="/portfolio">see my work &#8594;</ButtonPrimary>
            </Actions>
            <Review className="spacing">
              <p className="italics">
                "We couldn't be happier with our choice to hire Aaron for our
                web design project. One of the best things about working with
                Aaron was the ideas and suggestions he came up with to take our
                project to a more professional level."
              </p>
              <div>
                <p className="body--strong">Sam Swift-Glasman</p>
                <p className="italics body--small">Founder of Megasets.ai</p>
              </div>
            </Review>
          </HeroText>
        </HeroBox>
      </Container>
    </HeroWrapper>
  )
}

export default Hero

import React from "react"
import styled from "styled-components"

import { Section, Container, GridAuto } from "../layoutComponents"
import TestimonialCard from "./testimonialCard"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 200px auto;
`
const Bg = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  background-color: var(--clr-dark);
  width: 100%;
  height: 100%;
  z-index: -1000;
`

const Top = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  color: var(--txt-light);
  padding: 4em 0 2em;

  h1,
  h2,
  h3,
  p {
    max-width: 70ch;
    width: 100%;
    text-align: center;
  }
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
`

export default function TestimonialsFull() {
  return (
    <Wrapper>
      <Bg />
      <Top>
        <Container className="spacing">
          <div>
            <h2 className="title italics">websites that drive results.</h2>
          </div>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <GridAuto>
            <TestimonialCard
              company="Megasets"
              review="One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level."
              name="Sam Swift-Glasman"
              position="Founder of Megasets.ai"
              url="https://www.megasets.ai"
            />
            <TestimonialCard
              company="GreenBioco&#8482;"
              review="Aaron exceeded my expectations in all areas for my redesign. I already plan on hiring Aaron for my next three projects!"
              name="Jacques Camier"
              position="Founder of GreenBioco&#8482;"
              url="https://www.greenbioco.com"
            />
            <TestimonialCard
              company="KiloPower"
              review="Aaron does a superb job in maintaining our website as we grow and changes are required. This support allows our growing consultancy to focus on our day-to-day."
              name="Brenden Marchewka"
              position="President, Kilo Renewables Consulting"
              url="https://www.kilopower.ca"
              disclaimer="* I do not take credit for the design of this website. *"
            />
          </GridAuto>
        </Container>
      </Bottom>
    </Wrapper>
  )
}

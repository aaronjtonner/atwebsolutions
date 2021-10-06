import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"

const ReviewFrame = styled.iframe`
  width: 100%;
  max-width: 100%;
  height: 378px;
  max-height: 378px;
  vertical-align: top;
  border: 1px solid var(--clr-accent);
  box-shadow: rgb(0, 128, 255, 0.2) 0px 8px 24px;
  border-radius: 5px;
`

export default function GoogleReviewsFeatured() {
  return (
    <Section>
      <Container>
        <ReviewFrame src="https://www.local-marketing-reports.com/external/showcase-reviews/widgets/cf9f8f70746322df5045f537669be3c2fb645985" />
      </Container>
    </Section>
  )
}

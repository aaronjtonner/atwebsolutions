import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"

const ReviewsFrame = styled.iframe`
  width: 100%;
  max-width: 100%;
  height: 960px;
  max-height: 960px;
  vertical-align: top;
  border-radius: 5px;
  border: none;
`

export default function GoogleReviewsFull() {
  return (
    <Section>
      <Container>
        <ReviewsFrame src="https://www.local-marketing-reports.com/external/showcase-reviews/widgets/651fef1fcf445073f9cbfa26f936e6fa05147a13" />
      </Container>
    </Section>
  )
}

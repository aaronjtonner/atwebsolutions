import React from "react"
import styled from "styled-components"
import { Section, Container } from "../layoutComponents"

const TextWrapper = styled.div`
  width: 100%;
  max-width: 70ch;

  h2 {
    margin-bottom: var(--spacer-lg);
  }

  h3 {
    margin-bottom: var(--spacer-md);
  }

  p,
  ul {
    margin-bottom: var(--spacer);
  }
`

export default function ServicesLayout({ children }) {
  return (
    <Section>
      <Container className="">
        <TextWrapper className="">{children}</TextWrapper>
      </Container>
    </Section>
  )
}

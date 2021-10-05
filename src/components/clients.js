import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "./layoutComponents"

const Section = styled.section`
  background: var(--clr-secondary-dark);
  padding: 2.5em 0;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 90px;
  }
`

export default function Clients() {
  return (
    <Section>
      <Container className="spacing-lg">
        <p className="body--large center">Trusted by</p>
        <Flex>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-7.svg"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-6.svg"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-5.svg"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-4.svg"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-3.png"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-2.svg"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
          <div>
            <StaticImage
              src={"../images/clients/web-design-client-1.png"}
              alt="web design client logo"
              placeholder="blurred"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

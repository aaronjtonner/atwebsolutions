import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  color: var(--clr-accent);
  a {
    color: var(--clr-accent);
  }
`

export default function ContactInfo() {
  return (
    <Wrapper className="spacing">
      <div>
        <p className="bold">Aaron Tonner Web Solutions</p>
        <p>Calgary, AB</p>
        <p>Canada</p>
      </div>
      <div>
        <p className="bold">Direct Contact</p>
        <a className=" italics" href="tel: 587-437-9161">
          587-437-9161
        </a>

        <a className=" italics" href="mailto: aaron@aarontonner.com">
          aaron@aarontonner.com
        </a>
      </div>
    </Wrapper>
  )
}

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { AnchorPrimary } from "../buttons"
import { FaPhoneAlt } from "react-icons/fa"

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: ${props => `url(${props.img})`};
  background-position: center;
  background-attachment: fixed;
  background-size: contain;
  padding: 4em 0;
`

const ActionText = styled.div`
  padding: 1.5em 2em;
  background: var(--clr-overlay-darker);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 70ch;
  h1,
  h2,
  h3,
  h4,
  p {
    line-height: 1.1;
  }
`

const TextSecondary = styled.p`
  color: var(--txt-light-secondary);
`

export default function CallToAction(props) {
  return (
    <ActionWrapper img={props.img}>
      <Container className="spacing">
        <ActionText className="spacing">
          <p className="title bold italics">{props.textPrimary}</p>
          <TextSecondary className=" bold">{props.textSecondary}</TextSecondary>
          <Actions>
            <AnchorPrimary href="tel: ">
              <div>
                <FaPhoneAlt />
                <span>000-000-0000</span>
              </div>
            </AnchorPrimary>
          </Actions>
        </ActionText>
      </Container>
    </ActionWrapper>
  )
}

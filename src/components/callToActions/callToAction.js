import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { AnchorPrimary, ButtonPrimaryLight } from "../buttons"
import { FaPhoneAlt } from "react-icons/fa"

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: #d96f68;
  padding: 6em 0;
`

export default function CallToAction(props) {
  return (
    <ActionWrapper>
      <Container className="spacing">
        <p className="title bold">{props.title}</p>
        <ButtonPrimaryLight to={props.to}>{props.location}</ButtonPrimaryLight>
      </Container>
    </ActionWrapper>
  )
}

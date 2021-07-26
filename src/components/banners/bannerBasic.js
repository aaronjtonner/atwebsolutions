import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../layoutComponents"
import { BannerWrapper, BannerText } from "./bannerItems"

export default function BannerBasic(props) {
  return (
    <BannerWrapper img={props.img}>
      <Container>
        <BannerText className="spacing">
          <h1 className="title">{props.title}</h1>
          <p>{props.description}</p>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}

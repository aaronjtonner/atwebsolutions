import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Actions } from "../layoutComponents"
import { BannerWrapper, BannerText } from "./bannerItems"
import { ButtonPrimary, ButtonSecondary, ButtonUnderline } from "../buttons"
import { BsArrowRight } from "react-icons/bs"

export default function BannerActions(props) {
  return (
    <BannerWrapper img={props.img}>
      <Container className="spacing">
        <BannerText className="spacing">
          <h2 className="body body--large">banner title</h2>
          <ul>
            <li>benefit</li>
            <li>benefit</li>
          </ul>
          <Actions>
            <ButtonPrimary to="">
              <div>
                button <BsArrowRight size={22} />{" "}
              </div>
            </ButtonPrimary>
          </Actions>
        </BannerText>
      </Container>
    </BannerWrapper>
  )
}

import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const device = {
  lg: "50em",
}

const NavWrapperBottom = styled.div`
  background: var(--clr-primary);
`

const NavHeaderBottom = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4em 0;

  width: 85%;
  margin: 0 auto;
  max-width: 65rem;
`

const LogoContainer = styled.div`
  align-self: center;
`

const NavListBottom = styled.ul`
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  li:nth-child(1),
  li:nth-child(2) {
    > * {
      color: ${({ nav }) => (nav ? "var(--txt-dark)" : "var(--txt-light)")};
    }
  }
  li {
    @media screen and (max-width: ${device.lg}) {
      margin-left: 50px;
    }
  }
  > * + * {
    margin-left: 40px;
  }
  @media screen and (max-width: ${device.lg}) {
    position: fixed;
    right: 0;
    top: -5vh;
    height: 105vh;
    background: var(--clr-secondary);
    box-shadow: var(--shadow);
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transform: ${({ nav }) => (nav ? "translateX(0%)" : "translateX(100%)")};
    > * + * {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--txt-light);
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.08em;
  transition: all 0.25s linear;
  :hover,
  :focus {
    opacity: 0.7;
  }
`
const StyledLinkLight = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--txt-light);
  transition: all 0.25s linear;
  :hover,
  :focus {
    opacity: 0.7;
  }
`

// ===== Mobile Nav ======== //
const Burger = styled.div`
  display: none;
  cursor: pointer;
  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: ${({ nav }) =>
      nav ? "var(--txt-dark)" : "var(--txt-light)"};
    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }
  @media screen and (max-width: ${device.lg}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic() {
  const [nav, navOpen] = useState(false)

  function toggleMenu() {
    navOpen(!nav)
  }

  return (
    <>
      <NavWrapperBottom>
        <NavHeaderBottom>
          <LogoContainer>
            <StyledLink to="/">
              <StaticImage
                src={"../../images/logo-light.svg"}
                alt="aaron tonner web solutions logo"
                placeholder="blurred"
              />
            </StyledLink>
          </LogoContainer>
          <nav>
            <NavListBottom nav={nav}>
              <li>
                <StyledLink to="/portfolio">my work</StyledLink>
              </li>
              {/* <li>
                <StyledLink to="/blog">growth tips</StyledLink>
              </li> */}
              <li>
                <StyledLink to="/contact">contact</StyledLink>
              </li>
            </NavListBottom>
            <Burger nav={nav} onClick={toggleMenu}>
              <div />
              <div />
              <div />
            </Burger>
          </nav>
        </NavHeaderBottom>
      </NavWrapperBottom>
    </>
  )
}

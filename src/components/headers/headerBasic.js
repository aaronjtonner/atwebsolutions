import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../layoutComponents"

import { FaPhoneAlt } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoMdArrowDropdown } from "react-icons/io"

const device = {
  sm: "18em",
  md: "48em",
}

const Header = styled.header`
  background: var(--clr-primary);
  box-shadow: var(--shadow-bottom);
  transition: top 0.5s ease-out;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`

const LogoContainer = styled.div`
  margin-right: 2em;
  width: 250px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 2em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: flex-start;
    position: absolute;
    top: 79px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-secondary);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const Dropdown = styled.li`
  /* hover display only on desktop */
  @media screen and (min-width: ${device.md}) {
    ul {
      position: absolute;
      z-index: 1000;
      display: none;
      opacity: 1;
      margin: 0;
      padding: 2em 2em 2em 1em;
      list-style-type: none;
      background: var(--clr-dark);

      li {
        a {
          color: var(--txt-light);
        }
      }
    }

    &:hover {
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-2);
    color: var(--txt-dark);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--txt-light);

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

  @media screen and (max-width: ${device.md}) {
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
    <Header>
      <Container>
        <HeaderWrapper>
          <LogoContainer>
            <StyledLink to="/">
              <StaticImage
                src={"../../images/logo-blue-white.svg"}
                alt="aaron tonner web solutions logo"
                placeholder="blurred"
              />
            </StyledLink>
          </LogoContainer>
          <Nav>
            <Burger nav={nav} onClick={toggleMenu}>
              <div />
              <div />
              <div />
            </Burger>
            <NavList nav={nav}>
              <li>
                <StyledLink to="/portfolio">portfolio</StyledLink>
              </li>
              <Dropdown>
                <StyledLink to="/services">
                  services
                  <IoMdArrowDropdown size={20} />
                </StyledLink>
                <ul>
                  <li>
                    <StyledLink to="/services/affordable-web-design-calgary">
                      web design
                    </StyledLink>
                  </li>
                </ul>
              </Dropdown>
              <li>
                <StyledLink to="/reviews">reviews</StyledLink>
              </li>
              <li>
                <StyledLink to="/contact">contact</StyledLink>
              </li>
            </NavList>
          </Nav>
        </HeaderWrapper>
      </Container>
    </Header>
  )
}

// import React, { useState } from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import { IoMdArrowDropdown } from "react-icons/io"

// const device = {
//   lg: "50em",
// }

// const NavWrapperBottom = styled.div`
//   background: var(--clr-primary);
// `

// const NavHeaderBottom = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1.4em 0;

//   width: 85%;
//   margin: 0 auto;
//   max-width: 65rem;
// `

// const LogoContainer = styled.div`
//   align-self: center;
// `

// const NavListBottom = styled.ul`
//   overflow: hidden;
//   padding: 0;
//   margin: 0;
//   list-style-type: none;
//   display: flex;
//   align-items: center;
//   /* li:nth-child(1),
//   li:nth-child(2),
//   li:nth-child(3) {
//     > * {
//       color: ${({ nav }) => (nav ? "var(--txt-dark)" : "var(--txt-light)")};
//     }
//   } */
//   li {
//     @media screen and (max-width: ${device.lg}) {
//       margin-left: 50px;

//       > * {
//         color: var(--txt-dark);
//       }
//     }
//   }
//   > * + * {
//     margin-left: 40px;
//   }
//   @media screen and (max-width: ${device.lg}) {
//     position: fixed;
//     right: 0;
//     top: -5vh;
//     height: 105vh;
//     background: var(--clr-secondary);
//     box-shadow: var(--shadow);
//     width: 100%;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     transform: ${({ nav }) => (nav ? "translateX(0%)" : "translateX(100%)")};
//     > * + * {
//       margin-left: 0;
//       margin-top: 20px;
//     }
//   }
// `

// const Dropdown = styled.li`
//   /* hover display only on desktop */
//   @media screen and (min-width: ${device.lg}) {
//     ul {
//       position: absolute;
//       z-index: 1000;
//       display: none;
//       opacity: 1;
//       margin: 0;
//       padding: 2em 2em 2em 1em;
//       list-style-type: none;
//       background: var(--clr-secondary);
//       color: var(--txt-dark);

//       li {
//         a {
//           color: var(--txt-dark);
//         }
//       }
//     }

//     &:hover {
//       ul {
//         display: flex;
//         flex-direction: column;
//       }
//     }
//   }
// `

// const StyledLink = styled(props => <Link {...props} />)`
//   text-decoration: none;
//   color: var(--txt-light);
//   text-transform: uppercase;
//   font-size: var(--fs-sm);
//   font-weight: var(--fw-button);
//   letter-spacing: 0.08em;
//   transition: all 0.25s linear;
//   // aligning text with icon
//   display: flex;
//   align-items: center;
//   gap: 2px;
//   :hover,
//   :focus {
//     opacity: 0.7;
//   }
// `
// const StyledLinkDark = styled(props => <Link {...props} />)`
//   text-decoration: none;
//   text-transform: capitalize;
//   color: var(--txt-dark);
//   transition: all 0.25s linear;
//   // aligning text with icon
//   display: flex;
//   align-items: center;
//   gap: 2px;
//   :hover,
//   :focus {
//     opacity: 0.7;
//   }
// `

// // ===== Mobile Nav ======== //
// const Burger = styled.div`
//   display: none;
//   cursor: pointer;
//   div {
//     width: 25px;
//     height: 3px;
//     margin: 5px;
//     background-color: ${({ nav }) =>
//       nav ? "var(--txt-dark)" : "var(--txt-light)"};
//     :nth-child(1) {
//       transform: ${({ nav }) =>
//         nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
//     }
//     :nth-child(2) {
//       opacity: ${({ nav }) => (nav ? "0" : "")};
//     }
//     :nth-child(3) {
//       transform: ${({ nav }) =>
//         nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
//     }
//   }
//   @media screen and (max-width: ${device.lg}) {
//     transform: scale(1);
//     display: block;
//     z-index: 10000;
//   }
// `

// export default function HeaderBasic() {
//   const [nav, navOpen] = useState(false)

//   function toggleMenu() {
//     navOpen(!nav)
//   }

//   return (
//     <>
//       <NavWrapperBottom>
//         <NavHeaderBottom>
//           <LogoContainer>
//             <StyledLink to="/">
//               <StaticImage
//                 src={"../../images/logo-light.svg"}
//                 alt="aaron tonner web solutions logo"
//                 placeholder="blurred"
//               />
//             </StyledLink>
//           </LogoContainer>
//           <nav>
//             <NavListBottom nav={nav}>
//               <li>
//                 <StyledLink to="/portfolio">my work</StyledLink>
//               </li>
//               <Dropdown>
//                 <StyledLink to="/services">
//                   services
//                   <IoMdArrowDropdown size={20} />
//                 </StyledLink>
//                 <ul>
//                   <li>
//                     <StyledLink to="/services/web-designer-calgary">
//                       web design
//                     </StyledLink>
//                   </li>
//                 </ul>
//               </Dropdown>
//               <li>
//                 <StyledLink to="/contact">contact</StyledLink>
//               </li>
//             </NavListBottom>
//             <Burger nav={nav} onClick={toggleMenu}>
//               <div />
//               <div />
//               <div />
//             </Burger>
//           </nav>
//         </NavHeaderBottom>
//       </NavWrapperBottom>
//     </>
//   )
// }

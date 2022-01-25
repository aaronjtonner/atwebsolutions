import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Flex } from "../layoutComponents"
import { FaPhoneAlt, FaRegClock } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"
import { IoLocationSharp } from "react-icons/io5"
import { AnchorInline, ButtonInline } from "../buttons"

const FooterWrapper = styled.footer`
  background: var(--clr-primary);
  color: var(--txt-light);
  padding: 7em 0 2em 0;
`

const FlexContact = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }

  a {
    color: var(--clr-accent);
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  & > * + * {
    margin-left: 5px;
  }
  .social-img {
    width: 48px;
  }
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: var(--txt-light-secondary);
  }
`

const Logo = styled.div`
  .logo-img {
    width: 250px;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: underline;
  text-transform: capitalize;
  color: var(--txt-light);
`

export default function FooterBasic() {
  return (
    <FooterWrapper>
      <Container className="spacing-lg">
        <div className="spacing-lg">
          <Logo>
            <center>
              <StaticImage
                className="logo-img"
                src={"../../images/logo-blue-white.svg"}
                alt="aaron tonner web solutions logo"
                placeholder="blurred"
              />
            </center>
          </Logo>
          <center>
            <a
              href="https://www.bbb.org/ca/ab/calgary/profile/digital-marketing/aaron-tonner-web-solutions-0017-126484/#sealclick"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://seal-calgary.bbb.org/seals/blue-seal-120-61-bbb-126484.png"
                style={{ border: 0 }}
                alt="Aaron Tonner Web Solutions BBB Business Review"
              />
            </a>
            {/* <a
              href="https://www.bbb.org/ca/ab/calgary/profile/digital-marketing/aaron-tonner-web-solutions-0017-126484/#sealclick"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://seal-calgary.bbb.org/seals/blue-seal-120-70-bbb-126484.png"
                style={{ border: 0 }}
                alt="Aaron Tonner Web Solutions BBB Business Review"
              />
            </a> */}
          </center>
          <Flex>
            <FlexItem>
              <p className="heading bold upper">get in touch</p>
              <ul>
                <li className="italics">Aaron Tonner Web Solutions</li>
              </ul>
              <ul>
                <li>
                  <FlexContact>
                    <FaPhoneAlt className="accent" />
                    <a className=" italics" href="tel: 587-437-9161">
                      587-437-9161
                    </a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <SiMailDotRu className="accent" />
                    <a className="italics" href="mailto: aaron@aarontonner.com">
                      aaron@aarontonner.com
                    </a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <FaRegClock className="accent" />
                    <div>
                      <p>Monday - Friday</p>
                      <p>9:00 AM - 4:00 PM</p>
                    </div>
                  </FlexContact>
                </li>
              </ul>
              <ul>
                <li>Calgary, AB</li>
                <li>Canada</li>
              </ul>
            </FlexItem>
            <FlexItem>
              <p className="heading bold upper">website</p>
              <ul>
                <li>
                  <StyledLink to="/">home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolio">portfolio</StyledLink>
                </li>
                <li>
                  <StyledLink to="/services">services</StyledLink>
                </li>
                <li>
                  <StyledLink to="/services/affordable-web-design-calgary">
                    web design
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
              </ul>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading bold upper">About</p>
              <ul>
                <li>
                  I offer affordable{" "}
                  <ButtonInline to="/services/affordable-web-design-calgary">
                    web design
                  </ButtonInline>
                  , web development, regular web maintenance & updates, local
                  SEO, and other internet marketing services in Calgary, AB and
                  surrounding areas.
                </li>
              </ul>
            </FlexItem>
          </Flex>
          <Socials>
            <a target="_popup" href="https://www.linkedin.com/in/aarontonner/">
              <StaticImage
                className="social-img"
                src={"../../images/socials/linkedin.svg"}
                alt="linkedin logo"
                placeholder="blurred"
              />
            </a>
            <a
              target="_popup"
              href="https://www.facebook.com/aarontonnerwebsolutions"
            >
              <StaticImage
                className="social-img"
                src={"../../images/socials/facebook.svg"}
                alt="facebook logo"
                placeholder="blurred"
              />
            </a>
          </Socials>
        </div>
        <Copy>
          <StyledLink to="/privacy-policy">privacy policy</StyledLink>
          <p>&#169;2022 Aaron Tonner Web Solutions</p>
        </Copy>
      </Container>
    </FooterWrapper>
  )
}

import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "../layoutComponents"

const FooterWrapper = styled.footer`
  background: var(--clr-primary);
  color: var(--txt-light);
  padding: 7em 0 2em 0;
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
                src={"../../images/logo-light.svg"}
                alt="aaron tonner web solutions logo"
                placeholder="blurred"
              />
            </center>
          </Logo>
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
          <p>&#169;2021 Aaron Tonner Web Solutions</p>
        </Copy>
      </Container>
    </FooterWrapper>
  )
}

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, TextWrapper, GridTwo } from "../layoutComponents"

const Service = styled(props => <Link {...props} />)`
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);
  text-decoration: none;
  color: var(--txt-dark);
  .service-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: var(--br);
    box-shadow: rgba(0, 128, 255, 0.4) 0px 8px 24px;
  }

  h2 {
    text-decoration: underline;
  }
`

const ReadMore = styled.p`
  font-size: var(--fs-sm);
  color: var(--clr-accent);
  font-weight: var(--fw-button);
  text-transform: uppercase;
`

export default function ServicesFull(props) {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <h2 className="title">{props.title}</h2>
          <p>{props.body}</p>
        </TextWrapper>
        <GridTwo>
          <Service to="/services/web-designer-calgary" className="spacing">
            <StaticImage
              className="service-img"
              src={"../../images/services/web-design-calgary.png"}
              alt="web design services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">web design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
            <ReadMore>read more &#8594;</ReadMore>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={
                "../../images/services/mobile-responsive-website-design-services-calgary.png"
              }
              alt="mobile responsive website design services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">mobile responsive websites</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={"../../images/services/web-development-services-calgary.png"}
              alt="web development services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">web development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={
                "../../images/services/website-maintenance-updates-services-calgary.png"
              }
              alt="website maintenance and updates services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">web maintenance & updates</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={
                "../../images/services/web-design-support-services-calgary.png"
              }
              alt="web design support services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">client support</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={"../../images/services/local-seo-services-calgary.png"}
              alt="local seo services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">local SEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={
                "../../images/services/free-web-hosting-services-calgary.png"
              }
              alt="free web hosting services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">free web hosting</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
          <Service className="spacing">
            <StaticImage
              className="service-img"
              src={
                "../../images/services/google-my-business-services-calgary.png"
              }
              alt="google my business services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">google my business</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident aut illo quaerat numquam quas quibusdam, voluptas,
              reprehenderit impedit minima deserunt eum maiores amet officiis,
              similique odio doloremque adipisci? Esse possimus reprehenderit
              ad, optio veniam tempore nam? Quis debitis dignissimos nisi!
            </p>
          </Service>
        </GridTwo>
      </Container>
    </Section>
  )
}

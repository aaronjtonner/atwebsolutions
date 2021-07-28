import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerBasic from "../../components/banners/bannerBasic"
import {
  Section,
  Container,
  Flex,
  TextWrapper,
} from "../../components/layoutComponents"
import { ButtonInline, AnchorInline } from "../../components/buttons"
import Industries from "../../components/industries"

import BannerBasicImg from "../../images/ph.png"

import { IoMdThumbsUp } from "react-icons/io"
import Star from "../../images/benefits/star.svg"
import Trusted from "../../images/benefits/trusted.svg"
import Price from "../../images/benefits/price.svg"
import ServicesFull from "../../components/services/servicesFull"
import GalleryFeatured from "../../components/gallery/galleryFeatured"

const Benefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    p {
      font-size: var(--fs-sm);
      font-weight: var(--fw-button);
      text-transform: uppercase;
      margin-bottom: 0;
    }

    img {
    }
  }
`

export default function WebDesignerCalgary() {
  return (
    <Layout>
      <SEO
        title="Web Designer Calgary - Services"
        description="I am a trusted web designer in calgary. I offer affordable web design, development, SEO services in calgary for your local business. Call me at 587-437-9161 to discuss your next website design project!"
      />
      <BannerBasic img={BannerBasicImg} title="web designer calgary" />
      <Section>
        <Container>
          <TextWrapper>
            <h2 className="title">calgary web design</h2>
            <Benefits>
              <div>
                <img src={Trusted} alt="trusted web designer in calgary" />
                <p>trusted</p>
              </div>
              <div>
                <IoMdThumbsUp size={32} />
                <p>proven solutions</p>
              </div>
              <div>
                <img src={Star} alt="highly-reviewed web designer in calgary" />
                <p>highly-reviewed</p>
              </div>
              <div>
                <img src={Price} alt="affordable web designer in calgary" />
                <p>affordable</p>
              </div>
            </Benefits>
            <hr />
            <p>
              I am a trusted, and highly-reviewed Calgary web designer. I offer
              affordable web design, web development, regular web maintenance &
              updates, local SEO, and other internet marketing services in
              Calgary, AB.{" "}
            </p>
            <p>
              My goal is to help your local business gain more visibility and
              traffic online with the use of a modern and professional website
              design that will help you show off relevant information about your
              business. I provide internet marketing services that will get your
              products and services seen online so you will increase your
              profits. An effective and professional website will enable your
              potential customers to learn everything they need to know about
              you and your business in order for you to gain their trust whether
              they’re looking to hire you for your professional services, or
              visit your store-front to experience your products.
            </p>{" "}
            <p>
              In order to hire me as your freelance
              <strong> web designer Calgary</strong>, call me at{" "}
              <AnchorInline href="tel: 587-437-9161">587-437-9161</AnchorInline>
              , or fill out my{" "}
              <ButtonInline to="/contact">online form </ButtonInline> to discuss
              your next website design project!{" "}
            </p>
          </TextWrapper>
        </Container>
      </Section>

      {/*  */}
      <Section>
        <Container>
          <TextWrapper>
            <h2 className="title">web design for local businesses</h2>
            <p>
              I provide professional website design and development services to
              the following industries:
            </p>
          </TextWrapper>
          <div className="spacing">
            <Industries />
            <TextWrapper>
              <p>
                Whether you run a local business, operate a construction
                company, own an electrical contracting company, provide home
                renovations or concrete contracting services, or even sell your
                innovative ideas or top-of-the-line products online or in-store,
                I’m here to{" "}
                <strong>
                  build, manage, and market a professional website
                </strong>{" "}
                so you can:
              </p>
              <ul>
                <li>Get more customers, increase your profits</li>
                <li>
                  Have a 24-hour, 7-days-a-week, online salesmen for your
                  business
                </li>
                <li>Appear more professional </li>
                <li>Get seen online</li>
                <li>
                  Display your services, past work, photos, customer reviews,
                  products, contact information, service areas or store
                  locations, team members, social profiles, and more!
                </li>
                <li>
                  Save time by having answers to common customer questions
                </li>
                <li>Gain trust from potential customers</li>
                <li>Establish credibility for your business</li>
                <li>Be seen as an expert in your industry</li>
              </ul>
              <p>...and so much more.</p>
            </TextWrapper>
          </div>
        </Container>
      </Section>
      <ServicesFull title="Web Design Services Calgary" body="" />
      <Section>
        <Container>
          <TextWrapper>
            <h2 className="title">affordable web design calgary</h2>
            <p>
              Work with an affordable freelancer and receive the best in class
              web design services Calgary has to offer! I’m here to provide you
              with a website and marketing solution that’s right for your
              business goals and budget. Quality communication is the #1 reason
              that all my{" "}
              <ButtonInline to="/portfolio">
                past web design & development projects
              </ButtonInline>{" "}
              have resulted in a successful and inexpensive outcome, with an
              even happier client that understands their dedicated freelance web
              design specialist is only a phone call away. Here’s what James,
              master electrician at Royco Electric, has been saying about his
              experience in working together:
            </p>
            <blockquote>
              <p>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                repudiandae temporibus porro dolores quisquam incidunt.
                Aspernatur culpa pariatur adipisci cupiditate?"
              </p>
            </blockquote>
          </TextWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <TextWrapper>
            <h2 className="title">calgary web design prices</h2>
            <span className="heading upper italics">
              starting at $3,000 CAD
            </span>
            <p>
              Working with an experienced and trusted
              <strong> website designer Calgary Alberta</strong> means you’re
              going to experience reliable customer support, at a reasonable
              cost, throughout the entire duration of your website project. My
              website design & development services start at an affordable price
              of $3,000 CAD. Your customers have high expectations for how your
              company is represented online and they expect to find information
              about your products or services as quickly and easily as possible
              in a way that’s going to help them make a buying decision. With
              that being said, custom web design services Calgary requires
              proper planning and research that will help you stand out from
              your local competition while ensuring your customers are having a
              happy experience on your web page. Although the price of starting
              a new project may seem steep, you’ll be working with a web
              consultant that knows what it takes to provide the right solution
              for your business that’s going to result in a return on your
              investment.
            </p>
            <p>
              Web design pricing is also determined by other factors relating to
              your business such as:
            </p>
            <ul>
              <li>
                What you’re currently doing to get new leads for your business
              </li>
              <li>What your sales process is like</li>
              <li>Your ideal customer and geographic locations you serve</li>
              <li>Your competition</li>
              <li>Services and products you offer</li>
            </ul>
          </TextWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="title">best calgary web design services</h2>
        </Container>
      </Section>
      <GalleryFeatured title="Top-rated Calgary Website Design and Development - View My Work" />
    </Layout>
  )
}

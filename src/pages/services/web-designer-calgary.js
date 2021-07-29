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
  GridTwo,
  GridThree,
} from "../../components/layoutComponents"
import { ButtonInline, AnchorInline } from "../../components/buttons"
import Industries from "../../components/industries"
import Clients from "../../components/clients"
import FormContact from "../../components/forms/formContact"
import CallToAction from "../../components/callToActions/callToAction"

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

const GridItemWrapper = styled.div`
  padding: 2em;
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
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
      <CallToAction
        title="want to work with an affordable web designer?"
        to="/contact"
        location="start by sending me a message &#8594;"
      />
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
      <CallToAction
        title="need help on your website project?"
        to="/contact"
        location="get a free quote &#8594;"
      />
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
              design specialist is only a phone call away. Here’s what Sam,
              owner at Megasets, has been saying about his experience in working
              together:
            </p>
            <blockquote>
              <p>
                "We had a tight deadline for our website design project and
                Aaron was very conscious of this and organised the project in
                such a way that we comfortably achieved that. We can not
                recommend Aaron highly enough!"
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
      <CallToAction
        title="need an affordable website?"
        to="/contact"
        location="get a free quote &#8594;"
      />
      <Section>
        <Container>
          <TextWrapper>
            <h2 className="title">best calgary web design services</h2>
          </TextWrapper>
          <Flex>
            <GridItemWrapper>
              <TextWrapper>
                <h3>what is good design?</h3>
                <ul>
                  <li>
                    Your website helps your business appear more professional
                  </li>
                  <li>
                    Your customers find it easy to navigate the website and find
                    the information they need at ease
                  </li>
                  <li>
                    Your website uses effective{" "}
                    <AnchorInline
                      target="blank"
                      href="https://www.investopedia.com/terms/c/call-action-cta.asp"
                    >
                      call-to-actions
                    </AnchorInline>{" "}
                    that will guide customers to taking a target action such as
                    getting a free quote from your business
                  </li>
                  <li>
                    Google wants to enable the best possible{" "}
                    <AnchorInline
                      target="blank"
                      href="https://www.thecreativemomentum.com/blog/the-importance-of-user-experience-in-web-design"
                    >
                      user experiences
                    </AnchorInline>{" "}
                    for online customers so it’s important both in the eyes of
                    Google, and your customers that your website is designed
                    professionally
                  </li>
                  <li>
                    A well-designed website is essential to the success of your
                    SEO campaigns - Google will notice if a website is designed
                    in a way that helps online searchers
                  </li>
                </ul>
              </TextWrapper>
            </GridItemWrapper>
            <GridItemWrapper>
              <TextWrapper>
                <h3>Why is a website important for your business?</h3>
                <ul>
                  <li>
                    A website is the #1 modern solution to communicating your
                    company-related information to your customers
                  </li>
                  <li>
                    A website is essential to getting more sales and customers
                    online because{" "}
                    <AnchorInline
                      target="blank"
                      href="https://seotribunal.com/blog/stats-to-understand-seo/#local-seo-facts"
                    >
                      97% of people
                    </AnchorInline>{" "}
                    learn more about a local company online than anywhere else
                  </li>
                  <li>
                    A website helps you build trust between your company and
                    your customers, as well as helping you establish yourself as
                    an expert in the services or products you offer
                  </li>
                  <li>
                    Leave a positive impression on customers that are doing
                    research between local companies
                  </li>
                </ul>
              </TextWrapper>
            </GridItemWrapper>
            <GridItemWrapper>
              <TextWrapper>
                <h3>why hire aaron tonner web solutions?</h3>
                <ul>
                  <li>
                    At Aaron Tonner Web Solutions, I’m a one-man operation which
                    means you know exactly who you’re working with at all times
                  </li>
                  <li>
                    I'm a trusted freelancer with{" "}
                    <ButtonInline to="/portfolio">proven results</ButtonInline>{" "}
                    and top-rated customer support services
                  </li>
                  <li>
                    Once-off pricing solutions so you know what you’re going to
                    spend, before you spend
                  </li>
                  <li>
                    I provide website design in Calgary and I provide on-site
                    solutions which means you have the option of meeting me in
                    person, or, if you prefer, meet me on a video call at your
                    earliest convenience
                  </li>
                  <li>
                    I’m only a phone call away anytime you have a question about
                    your web design and development project both throughout and
                    after completion
                  </li>
                  <li>
                    After your business website is successfully launched online
                    you will have the option to enter a no-contract retainer
                    agreement where I provide regular website maintenance and
                    updates, as well as local SEO services in Calgary
                  </li>
                  <li>
                    You will have 100% ownership over all accounts created for
                    your website. This includes a free account on{" "}
                    <AnchorInline
                      target="blank"
                      href="https://www.netlify.com/"
                    >
                      Netlify
                    </AnchorInline>{" "}
                    to ensure a speedy and secure web hosting solution, a free{" "}
                    <AnchorInline target="blank" href="https://github.com/">
                      Github
                    </AnchorInline>{" "}
                    account to store the code that I developed to create your
                    website in the rare case that you choose to change website
                    providers, and a free{" "}
                    <AnchorInline target="blank" href="https://ca.godaddy.com/">
                      Godaddy
                    </AnchorInline>{" "}
                    account where I’ll help you make the right website domain
                    choice
                  </li>
                </ul>
              </TextWrapper>
            </GridItemWrapper>
          </Flex>
        </Container>
      </Section>
      <GalleryFeatured title="Top-rated Calgary Website Design and Development - View My Work" />
      <Clients />
      <FormContact />
    </Layout>
  )
}

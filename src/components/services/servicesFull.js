import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Container, TextWrapper, GridTwo } from "../layoutComponents"
import { AnchorInline, ButtonInline } from "../buttons"

const Service = styled(props => <Link {...props} />)`
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);
  text-decoration: none;
  color: var(--txt-dark);
  .service-img {
    width: 150px;
    // height: 150px;
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
          <Service
            to="/services/affordable-web-design-calgary"
            className="spacing"
          >
            <StaticImage
              className="service-img"
              src={"../../images/services/web-design-calgary.png"}
              alt="web design services calgary"
              placeholder="blurred"
            />
            <h2 className="heading bold">web design</h2>
            <p>
              I provide{" "}
              <strong> cost-effective website design in Calgary</strong> for
              construction companies, electricians, home renovators, and other
              local businesses of any size. A professional website is the
              foundation necessary to growing your business online so your
              customers can easily find you to learn about your services, see
              your past work, and read your positive customer reviews. People
              have high expectations for how your local business is represented
              online, and it’s important that you stand out with a polished
              website design.
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
              Nearly{" "}
              <AnchorInline
                target="blank"
                href="https://www.thesearchreview.com/60-percent-online-searches-mobile-devices-07212/"
              >
                60%
              </AnchorInline>{" "}
              of online searches are carried out on a mobile device, while
              location-based searches, for example, “electricians near me”, are
              done almost exclusively on mobile. It is essential that you work
              with someone that will consider a{" "}
              <strong>responsive web design Calgary</strong> to help ensure your
              customers have a positive experience when using your website on
              their mobile devices. As long as customers are finding your
              website, you are guaranteed to bring in more leads through the
              internet if your website is mobile-friendly.
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
              Not only will you have a professional website design, you will
              also receive the best-in-class{" "}
              <strong> Calgary web development services</strong> from your
              professional freelancer. I work towards bringing the website
              design to life on a fully-functioning, error-free, live website.
              My website development services are always completed quickly and
              responsibly to ensure that your important company information is
              visible on the internet as soon as possible.
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
              Receiving regular maintenance and updates to your website will
              ensure your customers remain up-to-date with your company
              services, projects, reviews, and other important information.
              Keeping the content on your website fresh and up-to-date will help
              you build trust with your customers, as well as establish your
              company as the go-to expert for the services or products you
              offer. If you need{" "}
              <strong>website maintenance services Calgary</strong>, feel free
              to fill out my{" "}
              <ButtonInline to="/contact">online contact form</ButtonInline> to
              see how I can help you!
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
              Top-rated customer support is what you will experience by working
              with me for <strong> Calgary web design services.</strong> You
              will stay up-to-date with the progress of your website on a weekly
              basis, and communication between you and your Calgary web
              developer will be effortless and stress-free. I’m a one-man-show
              which means all communication will happen with me, and your
              website design and development services will be carried out by me.
              I’m your marketing and local SEO professional and I provide
              in-depth reports on the work that was done, and the progress made
              on all campaigns so you’re kept in the loop on what’s being done
              for your business.
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
              Work with a <strong>Calgary SEO specialist</strong> that’s going
              to help your business become visible on Google and other popular
              channels in order to help you get more customers through the
              internet. I am dedicated to using ethical SEO tactics that include
              optimizing your website for keywords while ensuring your website
              performance & speed are top-of-the-line. I work towards optimizing
              your Google My Business listing so local customers can easily find
              you and hire you when they’re doing a search for the services you
              offer. I will help your business consistently get great customer
              reviews online so that new potential customers can see all the
              good things about working with you. I build business citations
              that will help you stand out on local directories relative to your
              business. Search engine optimization is a long-term investment, so
              I’m going to make sure that you’re working with the right{" "}
              <strong>Calgary SEO expert</strong> that’s going to help you meet
              your business goals.
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
              Not only will you receive top-notch customer service from your{" "}
              <strong>website designer Calgary</strong>, you’ll also be provided
              with free website hosting solutions through the use of{" "}
              <AnchorInline target="blank" href="https://www.netlify.com/">
                Netlify
              </AnchorInline>{" "}
              and{" "}
              <AnchorInline target="blank" href="https://github.com/">
                Github
              </AnchorInline>
              . Not sure what I’m talking about? Don’t worry - it’s all going to
              be taken care of by your professional Calgary web developer to
              ensure your budget is not exceeded, while making use of a speedy,
              highly-reviewed and trusted website hosting provider. You’re going
              to have 100% ownership on all accounts for your website, which
              includes your web hosting account. You will never feel locked in,
              but I will still have access to your website accounts so you don’t
              have to worry about doing the nitty gritty work on your own!
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
              I provide <strong>Google My Business SEO services</strong> where I
              will optimize and manage your Google My Business account to help
              your business get noticed when customers are looking for your
              services online. This includes finding the right keywords for your
              business while optimizing and geo-tagging your company photos
              before uploading them to your GMB account. I will help you manage
              your GMB account so you can consistently get great customer
              reviews, and deal with the negative reviews in a positive manner.
              If your GMB listing is doing well in your area, it’s likely that
              your local competition is trying to find ways to get above you.
              It’s my job to maintain a successful GMB listing for your business
              and work against your competition to ensure you stay on top and in
              the lead to get the most clicks from your customers.
            </p>
          </Service>
        </GridTwo>
      </Container>
    </Section>
  )
}

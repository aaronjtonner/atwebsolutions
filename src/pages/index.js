import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/heros/hero"
import Clients from "../components/clients"
import Bio from "../components/bio"
import FormContact from "../components/forms/formContact"
import GalleryFeatured from "../components/gallery/galleryFeatured"
import GoogleReviewsFeatured from "../components/testimonials/GoogleReviewsFeatured"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Helmet>
        <script type="application/ld+json">
          {`
{
              "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Aaron Tonner Web Solutions",
  "url": "https://www.aarontonner.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
            }, 
            {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aaron Tonner Web Solutions",
  "image": "https://aarontonner.com/images/logo-white-bg.png",
  "@id": "",
  "url": "https://www.aarontonner.com/",
  "telephone": "5874379161",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "postalCode": "T2X 0G7",
    "addressCountry": "CA"
  },
"review": {
        {
      "@type": "Review",
      "author": "James Ross",
      "datePublished": "2021-09-28",
      "reviewBody": "Before I met Aaron we were operating under the radar relying on word of mouth and referrals. He reached out via email about his business solutions and his professionalism and confidence made for an easy decision. We hired him for our website / business solutions for better exposure and marketing and with very little input on my end his initial design and layout was spot on to our branding. A true start to finish turn key operation - answered emails promptly, took the time for video calls, handled our changes and suggestions almost instantly and was always patient and willing to go the extra mile for our needs. I highly recommend Aaron to any business not only looking for a great website but to increase revenue and exposure. The tools he installed have already increased our customer connections.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    },
{
      "@type": "Review",
      "author": "Nick Holder",
      "datePublished": "2021-08-31",
      "reviewBody": "We couldn't be happier with our choice to hire Aaron for our web design project. We were asking a lot as not only did we want the finished site to look great, but we wanted it to be very easy for us to customise and add to ourselves. Aaron exceeded our expectations in both regards and kept us updated on a daily basis often by making demo videos to show the direction he was taking and give us insight into how we would be able to work with the site moving forward. One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level. We really wanted someone who could show us the way and come up with ideas for us and this is exactly what we got. We threw all sorts of challenges Aaron's way and each time he came back with a number of options for us and was even willing to create iterations to help us choose the best solution. An example that springs to mind is our choice of homepage image which created problems when making overlaying text readable across all the devices. Aaron was able to fix this so that not only could we use the image we had chosen but the text is beautifully displayed on whichever device it is viewed from. We had a tight deadline for this project and Aaron was very conscious of this and organised the project in such a way that we comfortably achieved that. We can not recommend Aaron highly enough and already have plans to work with him in the future. Many thanks Aaron!",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    },
{
      "@type": "Review",
      "author": "Patrick Pierre",
      "datePublished": "2021-09-27",
      "reviewBody": "Communication is the biggest challenge in successfully completing projects with other web designers and developers, but Aaron always makes communication online to be effortless. Aaron Tonner Web Solutions provides the best web design and development services in Calgary and I highly recommend him for your next website project. Not only does he provide web design work, but also quality SEO services so that a business can easily be found online.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    }
      },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.882110,
    "longitude": -114.077640
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "16:00"
  },
  "sameAs": [
    "https://www.facebook.com/AaronTonnerWebSolutions",
    "https://www.instagram.com/aaronjtonner/",
    "https://www.linkedin.com/in/aarontonner/",
    "https://www.aarontonner.com/"
  ] 
}
          `}
        </script>
      </Helmet>
      <Hero />
      <Clients />
      <Bio />
      <GalleryFeatured title="featured website projects" />
      <GoogleReviewsFeatured />
      <FormContact />
      <Clients />
    </Layout>
  )
}

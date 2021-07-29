import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <script type="application/ld+json">
        {`
        "@context" : "http://schema.org",
  "@type" : "LocalBusiness",
  "name" : "Aaron Tonner Web Solutions",
  "telephone" : "587-437-9161",
  "email" : "aaron@aarontonner.com",
  "address" : {
    "@type" : "PostalAddress",
    "addressLocality" : "Calgary",
    "addressRegion" : "AB",
    "addressCountry" : "Canada"
  },
  "openingHoursSpecification" : {
    "@type" : "OpeningHoursSpecification",
    "dayOfWeek" : {
      "@type" : "DayOfWeek",
      "name" : "Monday - Friday"
    },
    "opens" : "09:00:00",
    "closes" : "16:00:00"
  },
  "review" : [ {
    "@type" : "Review",
    "author" : {
      "@type" : "Person",
      "name" : "Sam Swift-Glasman"
    },
    "reviewRating" : {
      "@type" : "Rating",
      "ratingValue" : "5"
    },
    "reviewBody" : "One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level."
  }, {
    "@type" : "Review",
    "author" : {
      "@type" : "Person",
      "name" : "Jacques Camier"
    },
    "reviewRating" : {
      "@type" : "Rating",
      "ratingValue" : "5"
    },
    "reviewBody" : "Aaron exceeded my expectations in all areas for my redesign. I already plan on hiring Aaron for my next three projects!"
  }, {
    "@type" : "Review",
    "author" : {
      "@type" : "Person",
      "name" : "Brenden Marchewka"
    },
    "reviewRating" : {
      "@type" : "Rating",
      "ratingValue" : "5"
    },
    "reviewBody" : "Aaron does a superb job in maintaining our website as we grow and changes are required. This support allows our growing consultancy to focus on our day-to-day."
  } ]
      `}
      </script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`

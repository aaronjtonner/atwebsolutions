import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const Keap = styled.div``

export default function Test() {
  return (
    <>
      <Keap
        data-form-slug={3444847735724589}
        data-env="production"
        data-path="contact-us/3444847735724589"
        className="keap-custom-form"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(a,b){var c=a.keapForms||{SNIPPET_VERSION:"1.1.0",appId:"lhz514"},d=b.createElement("script");d.type="text/javascript",d.crossOrigin="anonymous",d.defer=!0,d.src="https://forms.keap.app/lib/public-form-embed.js?appId=lhz514&version=1.1.0",d.onload=function(){var b=a.keapForms;b.renderAllForms?!b.invoked&&(b.invoked=!0,b.renderAllForms()):console.error("[Keap Forms] Error: could not load")};var e=b.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e),a.keapForms=c})(window,document);
        `,
        }}
      />
    </>
  )
}

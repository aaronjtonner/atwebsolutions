import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d321200.4922713151!2d-114.087835!3d51.0276233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa41e3748c364663b!2sAaron%20Tonner%20Web%20Solutions!5e0!3m2!1sen!2sca!4v1634836507734!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

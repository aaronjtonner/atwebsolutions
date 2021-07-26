import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import ContactInfo from "../contactInfo"

const Light = styled.p`
  color: var(--txt-dark-secondary);
`

export default function FormContact() {
  return (
    <Section>
      <Container className="spacing">
        <div className="spacing">
          <h2 className="title">Ready to start a project together?</h2>
          <Light>
            I'd love to work with you! Fill out the form below to get started:
          </Light>
        </div>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <div>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="spacing-sm">
                <Label className="bold" htmlFor="name">
                  * Name:
                </Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Johnny Doe"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label className="bold" htmlFor="email">
                  * Email:
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@email.com"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label className="bold" htmlFor="msg">
                  * Message:
                </Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="Hi Aaron, I've got a website project that I need a professional to help me with."
                  required
                />
              </div>
              <div>
                <Submit
                  type="submit"
                  id="submit"
                  value="work with me &#8594;"
                />
                <Light className="body--small italics bold">
                  I'm quick to respond
                </Light>
              </div>
            </form>
          </div>
          {/* flex item 2 */}
          <ContactInfo />
        </Flex>
      </Container>
    </Section>
  )
}

import React from "react"
import styled from "styled-components"

import { IoStarSharp } from "react-icons/io5"

const Flex = styled.div`
  display: flex;

  > * {
    color: var(--clr-accent);
  }
`

export default function Stars() {
  return (
    <Flex>
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp />
    </Flex>
  )
}

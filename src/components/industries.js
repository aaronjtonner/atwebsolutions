import React from "react"
import styled from "styled-components"
import { GridTwo } from "./layoutComponents"
import { IoMdThumbsUp } from "react-icons/io"
import { GrUserWorker } from "react-icons/gr"
import { GiElectric, GiConcreteBag, GiBulldozer } from "react-icons/gi"
import { FaHammer, FaStore } from "react-icons/fa"

const Wrapper = styled.div`
  background: var(--clr-accent-darker);
  padding: 2em;
`

const Industry = styled.div`
  background: var(--clr-accent);
  padding: 2em;
  color: var(--txt-light);
`

export default function Industries() {
  return (
    <Wrapper className="spacing-md">
      <GridTwo>
        <Industry className="spacing">
          <GiBulldozer size={60} />
          <p className="bold upper">construction & general contractors</p>
          <p></p>
        </Industry>
        <Industry className="spacing">
          <GiElectric size={60} />
          <p className="bold upper">electrical contractors</p>
          <p></p>
        </Industry>
        <Industry className="spacing">
          <FaHammer size={60} />
          <p className="bold upper">home renovators</p>
          <p></p>
        </Industry>
        <Industry className="spacing">
          <GiConcreteBag size={60} />
          <p className="bold upper">concrete contractors</p>
          <p></p>
        </Industry>
      </GridTwo>
      <div>
        <Industry className="spacing">
          <FaStore size={60} />
          <p className="bold upper">other local businesses</p>
          <p></p>
        </Industry>
      </div>
    </Wrapper>
  )
}

import React from "react"
import styled from "styled-components"
import { GridTwo } from "./layoutComponents"
import { IoMdThumbsUp } from "react-icons/io"
import { GrUserWorker } from "react-icons/gr"
import { GiElectric, GiConcreteBag, GiBulldozer } from "react-icons/gi"
import { FaHammer } from "react-icons/fa"

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
    <Wrapper>
      <GridTwo>
        <Industry className="spacing">
          <GiBulldozer size={40} />
          <p className="bold upper">construction & general contractors</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi
            provident error, eveniet dolorem excepturi modi velit labore aperiam
            illo officiis sit nemo debitis rem dolore tempore nisi a quia?
          </p>
        </Industry>
        <Industry className="spacing">
          <GiElectric size={40} />
          <p className="bold upper">electrical contractors</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi
            provident error, eveniet dolorem excepturi modi velit labore aperiam
            illo officiis sit nemo debitis rem dolore tempore nisi a quia?
          </p>
        </Industry>
        <Industry className="spacing">
          <FaHammer size={40} />
          <p className="bold upper">home renovators</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi
            provident error, eveniet dolorem excepturi modi velit labore aperiam
            illo officiis sit nemo debitis rem dolore tempore nisi a quia?
          </p>
        </Industry>
        <Industry className="spacing">
          <GiConcreteBag size={40} />
          <p className="bold upper">concrete contractors</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi
            provident error, eveniet dolorem excepturi modi velit labore aperiam
            illo officiis sit nemo debitis rem dolore tempore nisi a quia?
          </p>
        </Industry>
      </GridTwo>
    </Wrapper>
  )
}

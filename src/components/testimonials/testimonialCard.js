import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Stars from "./stars"

import { RiArrowRightSLine } from "react-icons/ri"

// OPTION 1
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: auto 2em auto;
`

const TextWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;

  padding: 2em;
  border-radius: var(--br);
  color: var(--txt-light);
  height: 100%;
  min-height: 450px;
  background: var(--clr-dark);
  box-shadow: 0 0 1em var(--clr-accent);

  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: var(--txt-light);
    text-transform: uppercase;
    font-size: 14px;
  }
`

const Name = styled.div`
  line-height: 1.1;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`

const Description = styled.p``

export default function TestimonialCard(props) {
  return (
    <GridWrapper>
      <TextWrapper className="spacing">
        <Stars />
        <p className="italics">"{props.review}"</p>
        <Name className="">
          <p className="bold">{props.name}</p>
          <p className="italics body--small">{props.position}</p>
        </Name>
        <a target="blank" href={props.url}>
          live website
        </a>
        <p className="body--small italics">{props.disclaimer}</p>
      </TextWrapper>
    </GridWrapper>
  )
}
// END OPTION 1

// OPTION 2
// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1em 1fr 1em;
//   grid-template-rows: auto 2em auto;
//   position: relative;
//   img {
//     grid-row: 1 / span 2;
//     grid-column: 1 / -1;

//     height: 400px;
//     width: 100%;
//     object-fit: cover;
//   }
// `

// const Text = styled.div`
//   grid-row: 2 / span 2;
//   grid-column: 2 / 3;
//   padding: 1em;
//   text-align: center;
//   background: var(--clr-light-secondary);
//   color: var(--txt-dark);
//   border: 1px solid var(--clr-dark);

//   p {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `

// const StyledLink = styled(props => <Link {...props} />)`
//   text-decoration: none;
//   color: var(--clr-accent);
// `

// export default function ServiceCard(props) {
//   return (
//     <StyledLink to={props.to}>
//       <GridWrapper>
//         <img src={props.img} alt="royco electrical services" />
//         <Text>
//           <p className="body--large">
//             <span>{props.title}</span> <RiArrowRightSLine />
//           </p>
//         </Text>
//       </GridWrapper>
//     </StyledLink>
//   )
// }
// END OPTION 2

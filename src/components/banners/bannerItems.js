import styled from "styled-components"

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--txt-light);
  background: ${props => `url(${props.img})`}, var(--clr-overlay);
  background-blend-mode: overlay;
  background-position: center;
  padding: 4em 0;

  background-size: cover;
  background-repeat: no-repeat;
`

export const BannerText = styled.div`
  width: 100%;
  text-align: center;
  p {
    color: var(--txt-light-secondary);
  }
  h1,
  h2,
  h3 {
    line-height: 1.1;
  }

  ul {
    padding: 0;
    margin: var(--spacer) 0;
    list-style-type: none;
    li {
      font-size: var(--fs-sm);
      text-transform: uppercase;

      &::before {
        content: "✓";
        color: var(--clr-accent);
        font-size: 1.2em;
        margin-right: 0.8rem;
      }
    }
  }
`

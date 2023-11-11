import { FunctionComponent, ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`

   /* stylelint-disable-next-line length-zero-no-unit */
  --zero: 0px;
  --wrapper-width: 50em;

  padding-inline: var(--gutter);
  margin-inline: max(var(--zero), ((100% - var(--wrapper-width)) / 2));

`

export const CenterWrapper: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>aa{children}</Wrapper>
  )
}
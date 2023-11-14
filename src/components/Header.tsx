import Link from 'next/link'
import {FunctionComponent} from 'react'
import { CenterWrapper } from './CenterWrapper'
import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  inset: auto 0 0;
  background-color: #272727;
  z-index: var(--z-index-menu);
  border-bottom: thin solid hsla(0, 0%, 100%, 0.12);
  position: static;
`

const List = styled.ul`
  margin: 0 calc(-1 * var(--gutter));
  list-style: none outside;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 1em;
  margin-inline: 0;
  display: flex;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
`

const ListItem = styled.ul`
  padding: 0 0 var(--save-area-bottom);

  &:not(:last-child) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.12);
  }

  border-right: 0;
  &:last-child {
    margin-left: auto;
  }
`

const LinkItem = styled(Link)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-white);
  padding: 0.5em 0.25em;

  &:not(.active) {
    color: var(--color-primary);
  }

  padding: 0.75em 0;
  color: var(--color-primary);
  text-decoration: underline;
  &:not(.active) {
    text-decoration: none;
  }
`



const Styled = {
  Wrapper,
  List,
  ListItem,
  Link: LinkItem
}

const Header: FunctionComponent = () => {
  return (
  <Styled.Wrapper>
    <CenterWrapper>
      <Styled.List>
        {/* <li>
          <Link
            class="link"
            :to="{ name: ROUTES.recipes_home }"
            :class="{ active: isRecipe }"
          >
            <app-icon name="Recipes" class="icon" />
            <span class="title">Recepten</span>
          </Link>
        </li>
        <li>
          <Link
            class="link"
            :to="{ name: ROUTES.weekmenu_home }"
            :class="{ active: isWeekmenu }"
          >
            <app-icon name="Weekmenu" class="icon" />
            <span class="title">Weekmenu</span>
          </Link>
        </li> */}
        <Styled.ListItem>
          <Styled.Link
            className="link"
            href="/acount"
          >
            <span className="title">Account</span>
          </Styled.Link>
        </Styled.ListItem>
      </Styled.List>
    </CenterWrapper>
  </Styled.Wrapper>
  )
  }

  export default Header
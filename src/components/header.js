import React from 'react'
import styled from 'styled-components';

import LOGO from '../images/appahead-logo.png'
import { fluidRange } from 'polished';
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHammer, faEnvelope } from '@fortawesome/pro-solid-svg-icons';

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    transition: all 0.5s ease;
  }
`

const Logo = styled.img.attrs({
  src: LOGO
})`
  height: 100%;
  width: auto;
`

const Menu = styled.ul`
  list-style-type: none;
  max-height: 39px;
`

const MenuItem = styled(Link).attrs({
  activeClassName: "active",
  exact: true
})`
  float: left;
  padding: 10px 20px;

  text-decoration: none;

  color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.light};
  }

  &:active {
    color: ${({ theme }) => theme.primary};
  }

  & > svg {
    max-height: 16px;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Logo />
    <Menu>
      <MenuItem to="/"><FontAwesomeIcon icon={faHome}/> Startseite</MenuItem>
      <MenuItem to="/tools"><FontAwesomeIcon icon={faHammer}/> Werkzeuge</MenuItem>
      <MenuItem to="/contact"><FontAwesomeIcon icon={faEnvelope}/> Kontakt</MenuItem>
    </Menu>
  </Wrapper>
)

export default Header

import React from 'react'
import styled from 'styled-components';



const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.secondary};
`

const ExternalLink = styled.a.attrs({
  target: "_blank"
})`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border-bottom: 1px dotted ${({ theme }) => theme.primary};
`

const Center = styled.div`
  text-align: center;
`

const Footer = ({ siteTitle }) => (
  <Wrapper>
    <Center>
      Erstellt mit <ExternalLink href="https://www.gatsbyjs.org/">Gatsby</ExternalLink> und <ExternalLink href="https://reactjs.org/">React</ExternalLink>. Bereitgestellt durch <ExternalLink to="https://www.netlify.com/">Netlify</ExternalLink>. Diese Seite ist Open Source und verfügbar auf <ExternalLink to="https://github.com/Appahead/website">Github</ExternalLink>.
    </Center>
  </Wrapper>
)

export default Footer

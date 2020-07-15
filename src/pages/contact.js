import React from 'react';
import styled from 'styled-components';
import { Trail, animated, Spring } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import Obfuscate from 'react-obfuscate';

import Layout from '../components/layout'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.8rem;
  margin-bottom: 30px;
  & > strong {
    color: ${({ theme }) => theme.dark};
    font-weight: 600;
  }
`

const ContactList = styled.ul`
  list-style-type: none;
`

const ContactListItem = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  margin-bottom: 10px;
  & > a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    border-bottom: 1px dotted ${({ theme }) => theme.primary};
  }
`
const EMail = styled(Obfuscate)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`

const Items = [{
  key: "email",
  item: (
    <ContactListItem>
      <FontAwesomeIcon icon={faEnvelope} /> <EMail email="hi@appahead.de" />
    </ContactListItem>
  )
}, {
  key: "twitter",
  item: (
    <ContactListItem>
      <FontAwesomeIcon icon={faTwitter} /> <a href="https://twitter.com/tillhuebner" target="_blank" rel="noreferrer">@tillhuebner</a>
    </ContactListItem>
  )
}, {
  key: "github",
  item: (
    <ContactListItem>
      <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/ruohki" target="_blank" rel="noreferrer">ruohki</a>
    </ContactListItem>
  )
}];


const ContactPage = () => (
  <Layout>
    <Wrapper>
      <Spring
        from={{ opacity: 0, transform: 'translateX(-50px)' }}
        to={{ opacity: 1, transform: 'translateX(0)' }}
      >
        {(style) => (
          <animated.div style={style}>
            <Title><strong>Kontaktiere mich jederzeit</strong> zum Beispiel über</Title>
          </animated.div>
        )}
      </Spring>
      <ContactList>
        <Trail
          native
          items={Items} keys={item => item.key}
          from={{ opacity: 0, transform: 'translateY(100px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}>
          {item => props =>
            <animated.li style={props}>{item.item}</animated.li>
          }
        </Trail>

      </ContactList>
    </Wrapper>
  </Layout>
)

export default ContactPage

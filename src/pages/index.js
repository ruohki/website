import React from 'react';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';

import Layout from '../components/layout'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Main = styled.p`
  color: ${({ theme }) => theme.dark};
  position: relative;

  font-size: 4.8rem;
  font-weight: 800;
  line-height: 4.0rem;
  margin: 40px 0 48px 0;
`

const Primary = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`
const Secondary = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Spring
        native
        config={{ delay: 0 }}
        from={{ opacity: 0, transform: 'translateY(-50px)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {(style) => (
          <animated.div style={style}>
            <Secondary>Hallo, meine Name ist Till</Secondary>
          </animated.div>
        )}
      </Spring>
      <Spring
        native
        config={{ delay: 100 }}
        from={{ opacity: 0, transform: 'translateX(-50px)' }}
        to={{ opacity: 1, transform: 'translateX(0)' }}
      >
        {(style) => (
          <animated.div style={style}>
            <Main>Ich bin ein Web-<br />entwickler</Main>
          </animated.div>
        )}
      </Spring>
      <Spring
        native
        config={{ delay: 200 }}
        from={{ opacity: 0, transform: 'translateY(50px)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {(style) => (
          <animated.div style={style}>
            <Secondary>Ich sorge für deinen guten <Primary>Auftritt</Primary></Secondary>
          </animated.div>
        )}
      </Spring>
    </Wrapper>
  </Layout>
)

export default IndexPage

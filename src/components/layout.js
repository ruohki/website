import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import 'typeface-exo-2';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { fluidRange } from 'polished';

const defaultTheme = {
  primary: "#7289DA",
  secondary: "#99AAB5",
  tertiary: "#99DA72",
  white: "#ffffff",
  light: "#F4F4F4",
  dark: "#42464C",
}

const Global =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    font-family: "Exo 2", Sans Serif
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;
    
  transition: all 0.5s ease;
  

  ${fluidRange([{
    prop: 'padding-left',
    fromSize: '15px',
    toSize: '150px',
  }, {
    prop: 'padding-right',
    fromSize: '15px',
    toSize: '150px',
  }],
    '400px',
    '1000px',
  )}
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;

  align-items: center;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Container>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Appahead Homepage' },
              { name: 'keywords', content: 'web, dev, react, apps, gatsby, appahead, till' },
            ]}
          >
            <html lang="de" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            {children}
          </Content>
          <Footer />
          <Global />
        </Container>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

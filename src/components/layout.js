/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Container = styled.div`
  animation: fadeInAnimation ease 0.75s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer location={location} />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

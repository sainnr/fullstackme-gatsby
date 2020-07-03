import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './header'
import './layout.css'

export const Layout: FC = ({ children }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={ data => (
      <>
        <Header
          siteTitle={ data.site.siteMetadata.title }
          subtitle={ data.site.siteMetadata.description } />
        <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
          <main>{ children }</main>
          <footer style={{textAlign: 'center', color: 'grey'}}>©{new Date().getFullYear()}, Full Stack Me Project</footer>
        </div>
      </>
    )}
  />
)

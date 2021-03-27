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
        <script type="text/javascript" src="https://s.skimresources.com/js/187687X1658364.skimlinks.js"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={ { __html: "            var vglnk = {key: '4231e428be4450bc5ee4f7ed544fe912'};"+
"            (function(d, t) { " +
"                var s = d.createElement(t);"+ 
"                   s.type = 'text/javascript';"+
"                    s.async = true;"+
"                    s.src = '//cdn.viglink.com/api/vglnk.js';"+
"                var r = d.getElementsByTagName(t)[0];"+
"                    r.parentNode.insertBefore(s, r);"+
"            }(document, 'script'));"
 } }>
        </script>
      </>
    )}
  />
)

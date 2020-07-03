import { Link } from 'gatsby'
import React, { FC } from 'react'

interface IOuterProps {
  siteTitle: string,
  subtitle: string
}

export const Header: FC<IOuterProps> = ({ siteTitle, subtitle }) =>
  <header style={{ marginBottom: `1.45rem` }}>
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
        <h2 style={{ margin: 0 }}>
          <Link to="/" style={{
            color: `black`,
            textDecoration: `none`,
          }}>{ siteTitle }.</Link>
        </h2>
        <h4 style={{
          fontFamily: `Roboto`,
          margin: `.3rem 0`,
        }}>{ subtitle }</h4>
      </div>
 </header>

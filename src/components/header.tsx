import { Link } from 'gatsby'
import React, { FC } from 'react'

import { BgImage } from './bgImage'

interface IOuterProps {
  siteTitle: string,
  subtitle: string
}

export const Header: FC<IOuterProps> = ({ siteTitle, subtitle }) =>
  <header style={{ marginBottom: `1.45rem` }}>
    <BgImage>
      <div style={{
        textAlign: `center`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{
            fontFamily: `Caveat Brush`,
            fontWeight: `normal`,
            fontSize: `1.25em`,
            color: `black`,
            textDecoration: `none`,
          }}>{ siteTitle }</Link>
        </h1>
        <h4 style={{
          fontStyle: `italic`,
          fontWeight: `normal`,
          margin: `.7rem 0 .1rem`,
        }}>{ subtitle }</h4>
      </div>

    </BgImage>
  </header>

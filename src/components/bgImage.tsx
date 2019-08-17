import React, { FC } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection: FC<{ className?: string }> = ({ children, className }) =>
  <StaticQuery
    query={ query }
    render={ data => {
      const imageData = data.desktop.childImageSharp.fluid
      return <BackgroundImage
        Tag="section"
        className={ className }
        fluid={ imageData } >
        { children }
      </BackgroundImage>
    } } />

const query = graphql`
  query {
    desktop: file(relativePath: { eq: "header-bg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export const BgImage = styled(BackgroundSection)`
  width: 100%;
  background-position: center right;
`

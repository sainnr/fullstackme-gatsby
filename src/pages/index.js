import React, { Fragment } from "react"
import ReactMarkdown from 'react-markdown'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    { data.allStrapiArticle.edges.map(edge =>
      <Fragment key={ edge.node.id }>
        <h2>
          <Link to={`/${ edge.node.id }`}>{ edge.node.title }</Link>
        </h2>
        <Img fluid={ edge.node.image.childImageSharp.fluid } />
        <ReactMarkdown source={ edge.node.summary } />
      </Fragment>
    )}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          summary
        }
      }
    }
  }
`
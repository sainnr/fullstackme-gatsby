import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      { data.allStrapiArticle.edges.map(edge => 
        <li key={ edge.node.id }>
          <h2>
            <Link to={`/${ edge.node.id }`}>{ edge.node.title }</Link>
          </h2>
          <Img fluid={ edge.node.image.childImageSharp.fluid } />
          <p>{ edge.node.content }</p>
        </li>) 
      }
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
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
          content
        }
      }
    }
  }
`
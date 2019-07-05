import React from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticleTemplate = ({ data }) => 
  <Layout>
    <h1>{ data.strapiArticle.title }</h1>
    <p>
      by <Link to={ `/authors/User_${ data.strapiArticle.author.id }`}>
        { data.strapiArticle.author.displayName }
      </Link>
    </p>
    <Img fluid={ data.strapiArticle.image.childImageSharp.fluid } />
    <ReactMarkdown source={ data.strapiArticle.content } />
    ← <Link to="/">Back to other articles</Link>
  </Layout>

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        displayName
      }
    }
  }
`
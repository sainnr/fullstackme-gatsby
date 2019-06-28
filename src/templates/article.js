import React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby"
import Img from "gatsby-image"


const ArticleTemplate = ({ data }) => 
  <Layout>
    <h1>{ data.strapiArticle.title }</h1>
    <p>
      by <Link to={ `/authors/User_${ data.strapiArticle.author.id }`}>
        { data.strapiArticle.author.username }
      </Link>
    </p>
    <Img fluid={ data.strapiArticle.image.childImageSharp.fluid } />
    <p>{ data.strapiArticle.content }</p>
  </Layout>

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
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
        username
      }
    }
  }
`
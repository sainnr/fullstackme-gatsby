import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate } from '../components'
import { IArticle } from 'types'

interface IQueryData {
  strapiArticle: IArticle
}

const ArticleTemplate: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO
    title={ data.strapiArticle.title }
    description={ data.strapiArticle.summary }
    keywords={ data.strapiArticle.keywords }
  />
  <h1>{ data.strapiArticle.title }</h1>
  <div className="flexWrapper">
    <div className="flexLeft">
      By <Link to={ `/authors/${ data.strapiArticle.author.username }`}>
        { data.strapiArticle.author.displayName }
      </Link>
    </div>
    <div className="flexRight">
      <PublishDate dateString={ data.strapiArticle.createdAt } />
    </div>
  </div>
  <Img fluid={ data.strapiArticle.image.childImageSharp.fluid } />
  <ReactMarkdown source={ data.strapiArticle.content } />
  ← <Link to="/">Back to other articles</Link>
</Layout>

export default ArticleTemplate

export const query = graphql`    
  query ArticleTemplate($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      title
      content
      summary
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      keywords
      createdAt
      author {
        username
        displayName
      }
    }
  }
`
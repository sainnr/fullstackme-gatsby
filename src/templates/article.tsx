import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate } from '../components'
import { IArticle, IAuthor } from 'types'

interface IQueryData {
  strapiArticle: IArticle
  strapiUser: IAuthor
}

const ArticleTemplate: FC<{ data: IQueryData }> = ({ data }) => {
  return <Layout>
    <SEO
      title={ data.strapiArticle.title }
      description={ data.strapiArticle.summary }
      keywords={ data.strapiArticle.keywords }
    />
    <h1>{ data.strapiArticle.title }</h1>
    <div className="flex-wrapper">
      <div className="flex-left">
        By <Img
          alt="Vladimir Salin"
          fixed={ data.strapiUser.photo.childImageSharp.fixed }
        /> <Link to={`/authors/${ data.strapiArticle.author.username }`}>
          { data.strapiArticle.author.displayName }
        </Link>
      </div>
      <div className="flex-right">
        <PublishDate dateString={ data.strapiArticle.createdAt } />
      </div>
    </div>
    <Img className="article-cover"
         fluid={ data.strapiArticle.image.childImageSharp.fluid } />
    <ReactMarkdown source={ data.strapiArticle.content } />
    ← <Link to="/">Back to other articles</Link>
  </Layout>
}

export default ArticleTemplate

export const query = graphql`    
  query ArticleTemplate($slug: String!, $user: String!) {
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
    strapiUser(username: { eq: $user }) {
      username
      displayName
      photo {
        childImageSharp {
          fixed(width: 18, height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
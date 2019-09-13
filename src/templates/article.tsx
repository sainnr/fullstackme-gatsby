import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate } from '../components'
import { IArticle, IAuthor } from 'types'
import { TagView } from '../components/tag'

interface IQueryData {
  strapiArticle: IArticle
  strapiUser: IAuthor
}

const ArticleTemplate: FC<{ data: IQueryData }> = ({ data }) => {
  const article = data.strapiArticle
  const author = data.strapiUser

  return <Layout>
    <SEO
      title={ article.title }
      description={ article.summary }
      keywords={ article.keywords }
    />
    <h1>{ article.title }</h1>
    <div className="flex-wrapper">
      <div className="flex-left">
        By <Img
          alt="Vladimir Salin"
          fixed={ author.photo.childImageSharp.fixed }
        /> <Link to={`/authors/${ article.author.username }`}>
          { article.author.displayName }
        </Link>
      </div>
      <div className="flex-right">
        <PublishDate dateString={ article.createdAt } />
      </div>
    </div>
    <Img className="article-cover"
         fluid={ article.image.childImageSharp.fluid } />
    <ReactMarkdown source={ article.content } />
    <div className="article-tags" >
      Tags: { article.tags.map(tag => <TagView tag={ tag } />) }
    </div>
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
      tags {
        name
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
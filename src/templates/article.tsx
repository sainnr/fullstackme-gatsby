import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate } from '../components'
import { IArticle } from 'types'
import { TagView } from '../components/tag'

interface IQueryData {
  wordpressPost: IArticle
}

const ArticleTemplate: FC<{ data: IQueryData }> = ({ data }) => {
  const article = data.wordpressPost
  const author = article.author

  return <Layout>
    <SEO
      title={ article.title }
      description={ article.excerpt }
      keywords={ article.keywords }
    />
    <h1>{ article.title }</h1>
    <div className="flex-wrapper">
      <div className="flex-left">
        By <img
          alt="Vladimir Salin"
          src={ author.avatar_urls.wordpress_96 }
        /> <Link to={`/authors/${ author.slug }`}>
          { author.name }
        </Link>
      </div>
      <div className="flex-right">
        <PublishDate dateString={ article.date } />
      </div>
    </div>
    <Img className="article-cover"
         fluid={ article.featured_media.localFile.childImageSharp.fluid } />
    <ReactMarkdown source={ article.content } />
    <div className="article-tags" >
      Tags: { article.tags.map(tag => <TagView tag={ tag } />) }
    </div>
    ← <Link to="/">Back to other articles</Link>
  </Layout>
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      excerpt
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
#      keywords
      date
      author {
        name
        slug
        avatar_urls {
          wordpress_96
        }
      }
      tags {
        name
      }
    }
  }
`
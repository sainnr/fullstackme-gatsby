import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate, TagView, WpContent } from '../components'
import { Article, IArticle } from '../types'

interface IQueryData {
  wordpressPost: IArticle
}

const ArticleTemplate: FC<{ data: IQueryData }> = ({ data }) => {
  const article = data.wordpressPost
  const author = article.author

  return <Layout>
    <SEO
      title={ article.title }
      description={ article.acf.seo_description }
      keywords={ article.acf.seo_keywords }
    />
    <div style={{textAlign: 'center'}}>
      <h1>{ Article.withDecodedTitle(article).title }</h1>
        <div style={{display: 'flex', justifyContent: 'center', color: 'grey'}}>
          <div style={{}}>
            By <Link to={`/authors/${ author.slug }`}>
              { author.name }
            </Link>
          </div>&nbsp;|&nbsp;
          <div>
            <PublishDate dateString={ article.date } />
          </div>
        </div>
    </div>
    <Img className="article-cover"
         fluid={ article.featured_media.localFile.childImageSharp.fluid } />
    <WpContent htmlString={ article.content } />
    <div className="article-tags" >
      <span style={{fontFamily: 'Patua One', fontSize: '1.1em'}}>Tags: </span>
      { article.tags.map(tag => <TagView key={tag.name} tag={ tag } />) }
    </div>
    <br />
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
      acf {
        seo_keywords
        seo_description
      }
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
import React, { FC, Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate, WpContent, ArticleLink } from '../components'
import { Article, IArticle } from '../types'

interface IQueryData {
  allWordpressPost: { edges: Array<{ node: IArticle }> }
}

const IndexPage: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title="Home"/>
  { data.allWordpressPost.edges.map(edge => {
    const article = edge.node
    return <Fragment key={ article.id }>
      <div style={{marginLeft: '-200px', marginBottom: '-70px', marginTop: '50px'}}>
        <div style={{textAlign: 'right', width: '180px', fontStyle: 'Italic'}}><PublishDate dateString={ article.date }/></div>
      </div>
      <h2><ArticleLink article={ Article.withDecodedTitle(article) } /></h2>
      <Img className="article-cover"
           fluid={ article.featured_media.localFile.childImageSharp.fluid }/>
      <WpContent htmlString={ article.excerpt }/>
    </Fragment>
  }) }
</Layout>

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          id
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          slug
          excerpt
          date
          categories { name }
        }
      }
    }
  }
`
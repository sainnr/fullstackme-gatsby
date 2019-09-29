import React, { FC, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate } from '../components'
import { IArticle } from 'types'

interface IQueryData {
  allWordpressPost: { edges: Array<{ node: IArticle }> }
}

const IndexPage: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title="Home"/>
  { data.allWordpressPost.edges.map(edge =>
    <Fragment key={ edge.node.id }>
      <h2>
        <Link to={`/${ edge.node.slug }`}>{ edge.node.title }</Link>
      </h2>
      <div className="flex-wrapper">
        <PublishDate dateString={ edge.node.date } />
      </div>
      <Img className="article-cover"
           fluid={ edge.node.featured_media.localFile.childImageSharp.fluid }/>
      <ReactMarkdown source={ edge.node.excerpt }/>
    </Fragment>
  ) }
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
        }
      }
    }
  }
`
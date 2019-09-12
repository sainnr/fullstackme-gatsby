import React, { FC, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO, PublishDate } from '../components'
import { IArticle } from 'types'

interface IQueryData {
  allStrapiArticle: { edges: Array<{ node: IArticle }> }
}

const IndexPage: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title="Home"/>
  { data.allStrapiArticle.edges.map(edge =>
    <Fragment key={ edge.node.id }>
      <h2>
        <Link to={`/${ edge.node.slug }`}>{ edge.node.title }</Link>
      </h2>
      <div className="flex-wrapper">
        <PublishDate dateString={ edge.node.createdAt } />
      </div>
      <Img fluid={ edge.node.image.childImageSharp.fluid }/>
      <ReactMarkdown source={ edge.node.summary }/>
    </Fragment>
  ) }
</Layout>

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
          slug
          summary
          createdAt
        }
      }
    }
  }
`
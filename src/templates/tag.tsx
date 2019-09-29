import React, { FC, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, graphql } from 'gatsby'

import { Layout, SEO } from '../components'
import { IArticle, ITag } from 'types'

interface IQueryData {
  allWordpressPost: ITaggedArticles
  wordpressTag: ITag
}

interface ITaggedArticles extends ITag {
  nodes: Array<IArticle>
}

const TagTemplate: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title={ data.wordpressTag.name } />
  <h1>Articles tagged with "{ data.wordpressTag.name }"</h1>
  { data.allWordpressPost.nodes.map(article =>
    <Fragment key={ article.id }>
      <h2><Link to={`/${ article.slug }`}>{ article.title }</Link></h2>
      <ReactMarkdown source={ article.excerpt } />
    </Fragment>) }
</Layout>

export default TagTemplate

export const query = graphql`
  query TagTemplate($tag: String!) {
    allWordpressPost(filter: {
      tags: {
        elemMatch: { name: {eq: $tag} }
      }
    }) {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
    wordpressTag(name: {eq: $tag}) {
      name
    }
  }
`
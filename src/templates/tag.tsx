import React, { FC, Fragment } from 'react'
import { graphql } from 'gatsby'

import { ArticleLink, Layout, SEO, WpContent } from '../components'
import { Article, IArticle, ITag } from '../types'

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
      <h2><ArticleLink article={ Article.withDecodedTitle(article) } /></h2>
      <WpContent htmlString={ article.excerpt } />
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
        categories { name }
      }
    }
    wordpressTag(name: {eq: $tag}) {
      name
    }
  }
`
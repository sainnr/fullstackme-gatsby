import React, { FC, Fragment } from 'react'
import { graphql } from 'gatsby'

import { ArticleLink, Layout, SEO, WpContent } from '../components'
import { Article, IArticle } from '../types'

interface IQueryData {
  allWordpressPost: IArticles
  wordpressCategory: { name: string }
}

interface IArticles {
  nodes: Array<IArticle>
}

const CategoryTemplate: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title={ data.wordpressCategory.name } />
  <h1>Full stack { data.wordpressCategory.name }</h1>
  { data.allWordpressPost.nodes.map(article =>
    <Fragment key={ article.id }>
      <h2><ArticleLink article={ Article.withDecodedTitle(article) } /></h2>
      <WpContent htmlString={ article.excerpt } />
    </Fragment>) }
</Layout>

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($category: String!) {
    allWordpressPost(filter: {
      categories: {
        elemMatch: { name: {eq: $category} }
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
    wordpressCategory(name: {eq: $category}) {
      name
    }
  }
`
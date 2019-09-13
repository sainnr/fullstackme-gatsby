import React, { FC, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, graphql } from 'gatsby'

import { Layout, SEO } from '../components'
import { IArticle, ITag } from 'types'

interface IQueryData {
  strapiTag: ITaggedArticles
}

interface ITaggedArticles extends ITag {
  articles: Array<IArticle>
}

const TagTemplate: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title={ data.strapiTag.name } />
  <h1>Articles tagged with "{ data.strapiTag.name }"</h1>
  { data.strapiTag.articles.map(article =>
    <Fragment key={ article.id }>
      <h2><Link to={`/${ article.slug }`}>{ article.title }</Link></h2>
      <ReactMarkdown source={ article.summary } />
    </Fragment>) }
</Layout>

export default TagTemplate

export const query = graphql`
  query TagTemplate($tag: String!) {
    strapiTag(name: { eq: $tag }) {
      name
      articles {
        id
        title
        slug
        summary
      }
    }
  }
`
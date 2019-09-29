import React, { FC, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, graphql } from 'gatsby'

import { Layout, SEO } from '../components'
import { IArticle, IAuthor } from 'types'

interface IQueryData {
  wordpressWpUsers: IAuthorArticles
}

interface IAuthorArticles extends IAuthor {
  authored_wordpress__POST: Array<IArticle>
}

const UserTemplate: FC<{ data: IQueryData }> = ({ data }) => <Layout>
  <SEO title={ data.wordpressWpUsers.name } />
  <h1>Articles by { data.wordpressWpUsers.name }</h1>
  { data.wordpressWpUsers.authored_wordpress__POST.map(article =>
    <Fragment key={ article.id }>
      <h2><Link to={`/${ article.slug }`}>{ article.title }</Link></h2>
      <ReactMarkdown source={ article.excerpt } />
    </Fragment>) }
</Layout>

export default UserTemplate

export const query = graphql`
  query UserTemplate($username: String!) {
    wordpressWpUsers(slug: { eq: $username }) {
      name
      authored_wordpress__POST {
        id
        title
        slug
        excerpt
      }
    }
  }
`
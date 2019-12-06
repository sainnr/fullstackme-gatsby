import React, { FC, Fragment } from 'react'
import { graphql } from 'gatsby'

import { ArticleLink, Layout, SEO, WpContent } from '../components'
import { Article, IArticle, IAuthor } from '../types'

interface IQueryData {
  wordpressWpUsers: IAuthorArticles
}

interface IAuthorArticles extends IAuthor {
  authored_wordpress__POST: Array<IArticle>
}

const UserTemplate: FC<{ data: IQueryData }> = ({ data }) => {
  const user = data.wordpressWpUsers
  return <Layout>
    <SEO
      title={ user.name }
      keywords={ `${user.name}, journal, blog, articles, posts, development,
       web technology, sports, running` }
      description={ `Articles by ${user.name} about sports, running,
       web technology and software development` }
    />
    <h1>Articles by { user.name }</h1>
    { user.authored_wordpress__POST.map(article =>
      <Fragment key={ article.id }>
        <h2><ArticleLink article={ Article.withDecodedTitle(article) }/></h2>
        <WpContent htmlString={ article.excerpt }/>
      </Fragment>) }
  </Layout>
}

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
        categories { name }
      }
    }
  }
`
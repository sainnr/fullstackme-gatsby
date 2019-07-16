import React, { Fragment } from "react"
import ReactMarkdown from 'react-markdown'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const UserTemplate = ({ data }) => <Layout>
  <SEO title={ data.strapiUser.displayName } />
  <h1>Articles by { data.strapiUser.displayName }</h1>
  { data.strapiUser.articles.map( article =>
    <Fragment key={ article.id }>
      <h2><Link to={`/${ article.slug }`}>{ article.title }</Link></h2>
      <ReactMarkdown source={ article.summary } />
    </Fragment>) }
</Layout>

export default UserTemplate

export const query = graphql`
  query UserTemplate($username: String!) {
    strapiUser(username: { eq: $username }) {
      displayName
      articles {
        id
        title
        slug
        summary
      }
    }
  }
`
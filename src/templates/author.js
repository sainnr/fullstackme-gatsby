import React, { Fragment } from "react"
import ReactMarkdown from 'react-markdown'

import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const UserTemplate = ({ data }) => <Layout>
  <h1>Articles by { data.strapiUser.displayName }</h1>
  { data.strapiUser.articles.map( article =>
    <Fragment key={ article.id }>
      <h2><Link to={`/Article_${ article.id }`}>{ article.title }</Link></h2>
      <ReactMarkdown source={ article.summary } />
    </Fragment>) }
</Layout>

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      displayName
      articles {
        id
        title
        summary
      }
    }
  }
`
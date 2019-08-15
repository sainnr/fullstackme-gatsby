/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

const makeRequest = (graphql, request) => new Promise((resolve, reject) =>
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }   
      return result;
    })
  ))

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  
  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => 
    result.data.allStrapiArticle.edges.forEach(({ node }) => 
      createPage({
        path: `/${ node.slug }`,
        component: path.resolve(`src/templates/article.tsx`),
        context: {
          slug: node.slug,
        },
      })
    )
  )
  
  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            username
          }
        }
      }
    }
  `).then(result => 
    result.data.allStrapiUser.edges.forEach(({ node }) => 
      createPage({
        path: `/authors/${ node.username }`,
        component: path.resolve(`src/templates/author.tsx`),
        context: {
          username: node.username,
        },
      })
    )
  )
    
  return Promise.all([
    getArticles,
    getAuthors,
  ])
}
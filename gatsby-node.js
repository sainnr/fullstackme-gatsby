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
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  
  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => 
    result.data.allStrapiArticle.edges.forEach(({ node }) => 
      createPage({
        path: `/${ node.id }`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    )
  )
  
  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => 
    result.data.allStrapiUser.edges.forEach(({ node }) => 
      createPage({
        path: `/authors/${ node.id }`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          id: node.id,
        },
      })
    )
  )
    
  return Promise.all([
    getArticles,
    getAuthors,
  ])
}
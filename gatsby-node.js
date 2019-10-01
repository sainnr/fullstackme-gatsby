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
      allWordpressPost {
        edges {
          node {
            categories { name }
            slug
            author { name }
          }
        }
      }
    }
  `).then(result => 
    result.data.allWordpressPost.edges.forEach(({ node }) =>
      createPage({
        path: `/${ node.categories[0].name }/${ node.slug }`,
        component: path.resolve(`src/templates/article.tsx`),
        context: {
          slug: node.slug,
        },
      })
    )
  )
  
  const getAuthors = makeRequest(graphql, `
    {
      allWordpressWpUsers {
        edges {
          node { slug }
        }
      }
    }
  `).then(result => 
    result.data.allWordpressWpUsers.edges.forEach(({ node }) =>
      createPage({
        path: `/authors/${ node.slug }`,
        component: path.resolve(`src/templates/author.tsx`),
        context: {
          username: node.slug,
        },
      })
    )
  )
    
  const getTags = makeRequest(graphql, `
    {
      allWordpressTag {
        edges {
          node { name }
        }
      }
    }
  `).then(result =>
    result.data.allWordpressTag.edges.forEach(({ node }) =>
      createPage({
        path: `/tags/${ node.name }`,
        component: path.resolve(`src/templates/tag.tsx`),
        context: {
          tag: node.name,
        },
      })
    )
  )

  return Promise.all([
    getArticles,
    getAuthors,
    getTags,
  ])
}
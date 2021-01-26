const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workTemplate = path.resolve(`src/templates/work.tsx`)
  const result = await graphql(`
    query {
      content: dataJson {
        profil {
          firstName
          lastName
        }
        works {
          company
          id
          name
          image
        }
      }
    }
  `)
  result.data.content.works.forEach(work => {
    createPage({
      path: `work-${work.name.toLowerCase().replace(/\s+/g, '-')}`,
      component: workTemplate,
      context: {work, content: result.data.content},
    })
  })
}
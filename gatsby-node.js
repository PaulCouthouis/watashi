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
    const { content } = result.data;
    createPage({
      path: `work-${work.name.toLowerCase().replace(/\s+/g, '-')}`,
      component: workTemplate,
      context: {profil: content.profil, work, otherWorks: content.works.filter(w => work.id !== w.id)},
    })
  })
}
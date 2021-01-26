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
          details {
            content
            charge
            environnment
            summary
          }
          id
          name
          image
        }
      }
    }
  `)
  result.data.content.works.forEach(work => {
    const { content } = result.data;
    const pagePath = work.name.toLowerCase().replace(/\s+/g, '-');
    createPage({
      path: `work-${pagePath}`,
      component: workTemplate,
      context: {profil: content.profil, work, otherWorks: content.works.filter(w => work.id !== w.id), regex:`/details-${pagePath}/`},
    })
  })
}
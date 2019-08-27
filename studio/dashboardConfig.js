export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d656363105a090c6a89a880',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2tap52z3',
                  apiId: 'b81f355c-b978-4d6d-89f0-60bfab2b5174'
                },
                {
                  buildHookId: '5d6563647e87aaa42457ed27',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3sxca83o',
                  apiId: '682d6db2-33cb-4064-b4ca-414a2ac19ca4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffreymorg/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3sxca83o.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

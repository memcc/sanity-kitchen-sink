export default {
  widgets: [
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
                  buildHookId: '5f696ae6f210d37503d0c26c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uc982u7x',
                  apiId: '19e44d71-ee6c-492b-a930-d29451aa76be'
                },
                {
                  buildHookId: '5f696ae6f210d3747cd0c2a1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5brshk15',
                  apiId: '122453e3-764b-445f-ac31-47064a5e41ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/memcc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5brshk15.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

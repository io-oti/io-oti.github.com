import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "槭林",
  description: "连林人不觉 独树众乃奇",
  cleanUrls: true,
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/maple.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/maple.png' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: '/maple.svg', width: 24, height: 24 },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      {
        text: 'Vue',
        items: [
          {
            text: 'Vue 3',
            items: [
              { text: 'Options API', link: '/vue/3/' },
              { text: 'Composition API', link: '/vue/3/composition-api' },
            ]
          },
          {
            text: 'Vue 2',
            items: [
              { text: 'Options API', link: '/vue/2/' },
              { text: 'Render Function', link: '/vue/2/render-function' },
              { text: 'JSX', link: '/vue/2/jsx' },
            ]
          },
        ],
      },
      {
        text: 'NodeJS',
        items: [
          { text: 'NPM', link: '/nodejs/' },
          {
            text: 'Packages',
            items: [
              { text: 'xlsx', link: '/nodejs/packages/xlsx' },
              { text: 'node-sass', link: '/nodejs/packages/node-sass' },
            ]
          }
        ]
      },
      { text: 'Git', link: '/git/' },
      {
        text: 'Others',
        items: [
          { text: 'Browser', link: '/others/browser' },
          { text: 'Nginx', link: '/others/nginx' },
        ],
      }
    ],

    socialLinks: [
      {
        text: 'github',
        icon: 'github',
        link: 'https://github.com/io-oti'
      },
      {
        text: 'codepen',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.3 24.29"><path d="M12.15,24.29a1.14,1.14,0,0,1-.65-.2l-11-7.28a.91.91,0,0,1-.32-.3h0l0-.05A1.24,1.24,0,0,1,0,15.82V8.45a1.23,1.23,0,0,1,.18-.63l0-.06a1,1,0,0,1,.32-.29L11.5.19a1.22,1.22,0,0,1,1.3,0l11,7.28a1,1,0,0,1,.32.29h0a.1.1,0,0,1,0,.05,1.23,1.23,0,0,1,.18.63v7.37a1.24,1.24,0,0,1-.18.64l0,.05a1,1,0,0,1-.32.3l-11,7.28A1.14,1.14,0,0,1,12.15,24.29Zm1.15-7.84V21l7.78-5.17-3.43-2.31ZM3.22,15.83,11,21V16.45L6.65,13.52Zm5.49-3.69,3.44,2.31,3.44-2.31L12.15,9.82Zm11,0L22,13.68V10.6ZM2.3,10.6v3.08l2.29-1.54Zm11-2.77,4.35,2.92,3.43-2.3L13.3,3.28ZM3.22,8.45l3.43,2.3L11,7.83V3.28Z"/></svg>'
        },
        link: 'https://codepen.io/Io_oTI'
      }
    ],

    sidebar: {
      '/vue/': {
        base: '/vue/',
        items: [
          {
            text: 'Vue 3',
            items: [
              { text: 'Options API', link: '/3/' },
              { text: 'Composition API', link: '/3/composition-api' },
            ]
          },
          {
            text: 'Vue 2',
            items: [
              { text: 'Options API', link: '/2/' },
              { text: 'Render Function', link: '/2/render-function' },
              { text: 'JSX', link: '/2/jsx' },
            ]
          },
        ]
      },
      '/nodejs/': {
        base: '/nodejs/',
        items: [
          { text: 'NPM', link: '/' },
          {
            text: 'Packages',
            items: [
              { text: 'xlsx', link: '/packages/xlsx' },
              { text: 'node-sass', link: '/packages/node-sass' },
            ]
          }
        ]
      }
    },

    outline: {
      level: 'deep',
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})

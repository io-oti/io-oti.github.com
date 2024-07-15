import { defineConfig } from "vitepress"
import { genSidebar } from "./configs/sidebar.js"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"

export default defineConfig({
  title: "槭 林",
  description: "今日菖蒲花 明朝枫树老",

  lang: "zh-CN",
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/icons/maple.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/icons/maple.png" }],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // logo - 网站图标
    logo: { src: "/icons/maple.svg", width: 24, height: 24 },

    // Search - 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
        _render(src, env, md) {
          if (env.frontmatter?.draft) return ""
          if (env.relativePath.startsWith("draft")) return ""

          return md.render(src, env)
        },
      },
    },

    // Nav - 导航
    nav: [
      {
        text: "Vue",
        items: [
          {
            text: "Vue 2",
            items: [
              { text: "Vue 2 备忘录", link: "posts/vue/2/cheatsheet" },
              { text: "Vue 2 JSX用法", link: "posts/vue/2/jsx" },
              { text: "Vue 2 渲染函数用法", link: "posts/vue/2/render-function" },
            ],
          },
          {
            text: "Vue 3",
            items: [
              { text: "Vue 3 Options API", link: "posts/vue/3/options-api" },
              { text: "Vue 3 Composition API", link: "posts/vue/3/composition-api" },
            ],
          },
          {
            text: "Vite",
            items: [
              {
                text: "如何从 Vue CLI 迁移到 Vite",
                link: "posts/vue/vite/how-to-migrate-from-vue-cli-to-vite",
              },
            ],
          },
        ],
      },
      {
        text: "Node.js",
        items: [
          { text: "NPM", link: "posts/nodejs/npm" },
          {
            text: "软件包",
            items: [{ text: "目录", link: "posts/nodejs/packages" }],
          },
        ],
      },
      {
        text: "Others",
        items: [
          { text: "Windows", link: "posts/windows" },
          { text: "Browser", link: "posts/browser/google-chrome" },
          { text: "Nginx", link: "posts/nginx/nginx-guide" },
          { text: "Git", link: "posts/git/git-cheatsheet" },
          { text: "Webpack", link: "posts/webpack/webpack" },
        ],
      },
    ],

    // SocialLinks - 社交链接
    socialLinks: [
      {
        // text: 'github',
        icon: "github",
        link: "https://github.com/io-oti",
      },
      {
        // text: 'codepen',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.3 24.29"><path d="M12.15,24.29a1.14,1.14,0,0,1-.65-.2l-11-7.28a.91.91,0,0,1-.32-.3h0l0-.05A1.24,1.24,0,0,1,0,15.82V8.45a1.23,1.23,0,0,1,.18-.63l0-.06a1,1,0,0,1,.32-.29L11.5.19a1.22,1.22,0,0,1,1.3,0l11,7.28a1,1,0,0,1,.32.29h0a.1.1,0,0,1,0,.05,1.23,1.23,0,0,1,.18.63v7.37a1.24,1.24,0,0,1-.18.64l0,.05a1,1,0,0,1-.32.3l-11,7.28A1.14,1.14,0,0,1,12.15,24.29Zm1.15-7.84V21l7.78-5.17-3.43-2.31ZM3.22,15.83,11,21V16.45L6.65,13.52Zm5.49-3.69,3.44,2.31,3.44-2.31L12.15,9.82Zm11,0L22,13.68V10.6ZM2.3,10.6v3.08l2.29-1.54Zm11-2.77,4.35,2.92,3.43-2.3L13.3,3.28ZM3.22,8.45l3.43,2.3L11,7.83V3.28Z"/></svg>',
        },
        link: "https://codepen.io/Io_oTI",
      },
    ],

    // Sidebar - 侧边栏
    sidebar: genSidebar(
      "posts/vue/3",
      "posts/vue/2",
      "posts/vue/vite",
      "posts/nodejs",
      "posts/windows",
      "posts/browser",
      "posts/nginx",
      "posts/git",
      "posts/webpack"
    ),

    // Outline - 目录
    outline: {
      label: "目录",
      level: "deep",
    },

    // LastUpdated - 最后更新时间
    lastUpdated: {
      text: "最后更新",
    },

    // DocFooter - 翻页
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    // Footer - 页脚
    footer: {
      message: "Email: io_oti@outlook.com",
      copyright: "Copyright © 2023-present Io_oTI. All Rights Reserved.",
    },
  },

  markdown: {
    // 启用代码块中的行号
    lineNumbers: true,
    // 全局自定义容器标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        // 设置路径
        "~": path.resolve(__dirname, "./"),
        // 设置别名
        "@": path.resolve(__dirname, "./theme"),
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
  },
})

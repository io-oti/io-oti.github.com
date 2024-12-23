// Search - 搜索
export default {
  provider: 'local',
  options: {
    locales: {
      zh: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    _render(src, env, md) {
      if (env.frontmatter?.draft) return ''
      if (env.relativePath.startsWith('draft')) return ''

      return md.render(src, env)
    },
  },
}

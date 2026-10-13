import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'


const config: Config = {
  title: 'LeylaTop',
  url: 'https://leyla.top',
  baseUrl: '/',
  // favicon: 'img/favicon.ico',
  favicon: 'https://leyla.top/img/favicon.ico',
  organizationName: 'LeylaTop',
  projectName: 'blog',
  customFields: {
    bio: '道阻且长，行则将至',
    description:
      '是一个由Leyla创建的技术笔记网站，主要记录编程开发知识，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: 'Leyla',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 主攻React',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      logo: {
        alt: 'Leyla',
        src: '/img/logo.svg',
        srcDark: '/img/logo.svg',
      },
      hideOnScroll: true,
      // items: [{ label: '笔记', position: 'right', to: '/' }],
    },
    algolia: {
      appId: '6KIX5EFJP3',
      apiKey: 'cd149a11a95e0e50ab3cbac68bfd86f4',
      indexName: 'leyla',
      contextualSearch: true,
      insights: true,
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'leylatop/blog',
      repoId: 'R_kgDON1ou_A',
      category: 'General',
      categoryId: 'DIC_kwDON1ou_M4Cpo-y',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        // sitemap: {
        //   priority: 0.5,
        // },
        gtag: {
          trackingID: 'G-KCPB0V29QG',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // 'docusaurus-plugin-image-zoom',
    // '@docusaurus/plugin-ideal-image',
    // ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: process.env.NODE_ENV === 'development',
    //     offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
    //     pwaHead: [
    //       { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
    //       { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
    //       { tagName: 'meta', name: 'theme-color', content: '#12affa' },
    //     ],
    //   },
    // ],
    // [
    //   'vercel-analytics',
    //   {
    //     debug: process.env.NODE_ENV === 'development',
    //     mode: 'auto',
    //   },
    // ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c LeylaTop %c https://github.com/leylatop/blog`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )

      const motto = `
This Webisite Powered By LeylaTop.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Leyla的技术笔记',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  onBrokenLinks: 'warn',
}

export default config

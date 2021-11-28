import { React } from 'https://deno.land/x/pagic/mod.ts';

export default {
  srcDir: '.',
  exclude: ['LICENSE'],
  root: '/tool_docs/',

  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: '阿甫工具-说明手册',
  description: 'Use this template to create a Pagic site with the docs theme',
  // To use jsx syntax, please rename this file to pagic.config.tsx
  //head: <>
  //   <link rel="icon" type="image/png" href="/favicon.png" />
  //   <script src="/assets/custom.js" />
  // </>,
  head: <link rel="icon" type="image/png" href="/favicon.png" />,
  nav: [
    {
      text: '赞助作者',
      link: '/tool_docs/introduction/index.html',
      target: '_blank',
      popover: (
        <>
          <img src="/assets/wechatpay.jpeg" width="256" style={{ marginRight: '1rem', verticalAlign: 'top' }} />
        </>
      ),
    },
    {
      text: '加入微信群',
      link: 'https://pagic.org/',
    },
    {
      text: 'About',
      link: '/tool_docs/about/index.html',
      align: 'right',
    },
  ],
  github: 'https://github.com/dengchengfu/tool_docs',
  sidebar: {
    '/': [
      'introduction/README.md',
      {
        link: 'test_pages/README.md',
        children: ['test_pages/markdown_test.md', 'test_pages/front_matter.md', 'test_pages/react_hooks_test.tsx'],
      },
      {
        text: 'Folder',
        children: [
          'folder/foo.md',
          {
            text: 'Custom sidebar text',
            link: 'folder/bar.md'
          }
        ]
      }
    ],
  },
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },

  footer: (
    <footer>
      Powered by&nbsp;
      <a href="https://github.com/xcatliu/pagic" target="_blank">
        Pagic testing
      </a>
    </footer>
  ),

  port: 8000,
};

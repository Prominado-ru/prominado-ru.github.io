module.exports = {
  base: '/docs/',
  title: 'Документация Prominado',
  description: 'Правила оформления кода, принятые в Prominado, рекомендации и просто советы',
  themeConfig: {
    repo: 'prominado-ru/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Помогите нам улучшить эту страницу!',
    displayAllHeaders: true,
    lastUpdated: 'Последнее обновление',
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Новичкам',
        children: [
          '/newcommers/',
          '/newcommers/setup',
          '/newcommers/connection',
        ],
      },
      {
        title: 'Руководство',
        children: [
          '/guides/common',
          '/guides/php',
          '/guides/bitrix',
          '/guides/bitrix24',
          '/guides/frontend',
          '/guides/javascript',
          '/guides/jquery',
          '/guides/reactnative',
          '/guides/schema',
        ],
      },
      {
        title: 'Frontend',
        children: [
          '/other/csshack',
          '/other/jshack',
          '/other/plugins',
        ],
      },
      {
        title: 'Backend',
        children: [
          '/bitrix/cli',
          '/bitrix/d7-events',
          '/bitrix/fileinput',
          '/bitrix/grid',
          '/bitrix/import',
          '/bitrix/orm',
          '/other/phphack',
          '/other/yandexkassa',
          '/other/links',
        ],
      },
      {
        title: 'Git',
        children: [
          '/git/vcs',
          '/git/git-phpstorm',
        ],
      },
      {
        title: 'Разное',
        children: [
          '/seo/yandexmetrika',
        ],
      },
    ],
  },
  /*
  sidebar: {
    '/bitrix/': [
      'cli',
      'd7-events',
      'fileinput',
      'grid',
      'import',
      'orm',
    ],
    '/git/': [
      'git-phpstorm',
      'vcs',
    ],
    '/guides/': [
      'bitrix',
      'bitrix24',
      'common',
      'frontend',
      'javascript',
      'jquery',
      'php',
      'reactnative',
      'schema',
    ],
    '/other/': [
      'csshack',
      'jshack',
      'links',
      'newcomers',
      'phphack',
      'plugins',
      'yandexkassa',
    ],
    '/phpstorm/': [
      'connection',
      'setup',
    ],
    '/react/': [
      'libraries',
      'publishing',
      'setup',
    ],
    '/seo/': [
      'yandexmetrika',
    ],
    '/': [],
  },
  */
};
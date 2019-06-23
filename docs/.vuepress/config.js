module.exports = {
  base: '/',
  title: '',
  description: 'Правила оформления кода, принятые в Prominado, рекомендации и просто советы',
  themeConfig: {
    logo: '/logo.svg',
    repo: 'prominado-ru/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Помогите нам улучшить эту страницу!',
    displayAllHeaders: true,
    lastUpdated: 'Последнее обновление',
    head: [
      ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Новичкам',
        children: [
          '/newcomers/',
          '/newcomers/setup',
          '/newcomers/connection',
        ],
      },
      {
        title: 'Стандарт',
        children: [
          '/guides/common',
          '/guides/php',
          '/guides/bitrix',
          '/guides/bitrix24',
          '/guides/frontend',
          '/guides/javascript',
          '/guides/jquery',
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
          '/other/phphack',
          '/other/yandexkassa',
          '/other/links',
        ],
      },
      {
        title: '1С-Битрикс',
        children: [
          '/bitrix/cli',
          '/bitrix/fileinput',
          '/bitrix/orm',
          '/bitrix/d7-events',
        ],
      },
      {
        title: 'Git',
        children: [
          '/git/vcs',
        ],
      },
      {
        title: 'React Native',
        children: [
          '/react/',
          '/react/publishing',
          '/react/libraries',
        ],
      },
      {
        title: 'Разное',
        children: [
          '/seo/yandexmetrika',
        ],
      },
    ],
    nav: [
      {
        text: 'Наш сайт',
        link: 'https://prominado.ru',
      },
    ],
  },
};
